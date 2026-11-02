/**
 * MISTER BNINE - INTERACTIVE ENGINE & ORDERING LOGIC
 * Fast-Food & Restaurant Gastronomique | Dcheira El Jihadia
 * Phone / WhatsApp: +212 6 65 63 84 87
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initOpeningHours();
  initCart();
  initMenuFilters();
  initSearch();
});

/* ==========================================================================
   1. NAVBAR & MOBILE DRAWER CHOREOGRAPHY
   ========================================================================== */
function initNavbar() {
  const island = document.querySelector('.nav-island');
  const toggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');

  // Scroll dynamics
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      island?.classList.add('scrolled');
    } else {
      island?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      toggle.classList.toggle('active', !isOpen);
      drawer.classList.toggle('open', !isOpen);
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    // Close when clicking nav links inside drawer
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ==========================================================================
   2. LIVE OPENING HOURS CHECKER (MOROCCO TIME GMT+1)
   Hours: 12:00 PM (12:00) to 00:30 AM (00:30)
   ========================================================================== */
function initOpeningHours() {
  const statusElements = document.querySelectorAll('.live-status-badge');
  if (!statusElements.length) return;

  function checkStatus() {
    // Get current time in Morocco (Africa/Casablanca)
    const now = new Date();
    const moroccoTimeStr = now.toLocaleString("en-US", { timeZone: "Africa/Casablanca" });
    const moroccoDate = new Date(moroccoTimeStr);
    
    const hours = moroccoDate.getHours();
    const minutes = moroccoDate.getMinutes();
    const totalMinutes = hours * 60 + minutes;

    // 12:00 PM is 720 minutes. 00:30 AM is 30 minutes.
    // Open between 12:00 (720 min) and 23:59 (1439 min) OR between 00:00 (0 min) and 00:30 (30 min).
    const isOpen = (totalMinutes >= 720) || (totalMinutes <= 30);

    statusElements.forEach(el => {
      const dot = el.querySelector('.live-status-dot');
      const text = el.querySelector('.status-text');

      if (isOpen) {
        if (dot) {
          dot.classList.remove('closed');
          dot.classList.add('open');
        }
        if (text) text.textContent = "Ouvert actuellement • Ferme à 00h30";
      } else {
        if (dot) {
          dot.classList.remove('open');
          dot.classList.add('closed');
        }
        if (text) text.textContent = "Fermé actuellement • Ouvre à 12h00";
      }
    });
  }

  checkStatus();
  // Check every minute
  setInterval(checkStatus, 60000);
}

/* ==========================================================================
   3. CART & WHATSAPP DIRECT ORDER SYSTEM
   ========================================================================== */
const RESTAURANT_PHONE = "212665638487"; // 0665638487

let cart = JSON.parse(localStorage.getItem('mister_bnine_cart')) || [];
let orderType = 'livraison'; // 'livraison' | 'emporter'

function saveCart() {
  localStorage.setItem('mister_bnine_cart', JSON.stringify(cart));
  updateCartUI();
}

function initCart() {
  // Bind trigger buttons
  const triggers = document.querySelectorAll('.btn-cart-trigger');
  const overlay = document.querySelector('.cart-drawer-overlay');
  const drawer = document.querySelector('.cart-drawer');
  const closeBtn = document.querySelector('.btn-close-cart');
  const orderTypeBtns = document.querySelectorAll('.order-type-btn');
  const checkoutBtn = document.querySelector('.btn-whatsapp-checkout');

  function openCart() {
    overlay?.classList.add('open');
    drawer?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    overlay?.classList.remove('open');
    drawer?.classList.remove('open');
    document.body.style.overflow = '';
  }

  triggers.forEach(btn => btn.addEventListener('click', openCart));
  overlay?.addEventListener('click', closeCart);
  closeBtn?.addEventListener('click', closeCart);

  // Bind order type buttons
  orderTypeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      orderTypeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      orderType = btn.dataset.type || 'livraison';
      const addressField = document.querySelector('#cart-address');
      if (addressField) {
        addressField.placeholder = orderType === 'livraison' 
          ? "Adresse exacte à Dcheira / Inezgane..." 
          : "Nom pour le retrait au comptoir...";
      }
    });
  });

  // Bind Add to Cart buttons
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.btn-add-cart');
    if (addBtn) {
      const id = addBtn.dataset.id;
      const name = addBtn.dataset.name;
      const price = parseFloat(addBtn.dataset.price);
      addToCart(id, name, price);
    }
  });

  // Bind WhatsApp Checkout
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', handleWhatsAppCheckout);
  }

  updateCartUI();
}

function addToCart(id, name, price) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, qty: 1 });
  }
  saveCart();
  showToast(`Ajouté au panier : ${name}`);
}

function updateItemQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
}

function updateCartUI() {
  const badgeCounts = document.querySelectorAll('.cart-count-badge');
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  
  badgeCounts.forEach(b => {
    b.textContent = totalItems;
    b.style.display = totalItems > 0 ? 'flex' : 'none';
  });

  const cartList = document.querySelector('.cart-items-list');
  const totalVal = document.querySelector('.cart-total-val');
  const totalCost = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (totalVal) {
    totalVal.textContent = `${totalCost} DH`;
  }

  if (cartList) {
    if (cart.length === 0) {
      cartList.innerHTML = `
        <div class="empty-cart-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <p>Votre panier est vide pour le moment.</p>
          <span style="font-size:0.8rem; color:var(--text-muted)">Choisissez vos tacos, pizzas ou burgers préférés !</span>
        </div>
      `;
    } else {
      cartList.innerHTML = cart.map(item => `
        <div class="cart-item-row" data-id="${item.id}">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <div class="item-unit-price">${item.price} DH x ${item.qty} = ${item.price * item.qty} DH</div>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateItemQty('${item.id}', -1)">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateItemQty('${item.id}', 1)">+</button>
          </div>
        </div>
      `).join('');
    }
  }
}

function handleWhatsAppCheckout(e) {
  e.preventDefault();
  if (cart.length === 0) {
    alert("Votre panier est vide. Veuillez sélectionner un plat.");
    return;
  }

  const nameInput = document.querySelector('#cart-name')?.value.trim();
  const addressInput = document.querySelector('#cart-address')?.value.trim();
  const notesInput = document.querySelector('#cart-notes')?.value.trim();

  let message = `*Salam Mister Bnine !*\nJe souhaite passer une commande :\n\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* x ${item.qty} = ${item.price * item.qty} DH\n`;
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  message += `\n*Total : ${total} DH*`;
  message += `\n*Mode :* ${orderType === 'livraison' ? '🛵 Livraison à Dcheira/Inezgane' : '🥡 À emporter (Sur place)'}`;

  if (nameInput) message += `\n*Nom :* ${nameInput}`;
  if (addressInput) message += `\n*Adresse / Repère :* ${addressInput}`;
  if (notesInput) message += `\n*Notes (sauce, sans oignons, etc.) :* ${notesInput}`;

  message += `\n\n_Commande transmise depuis le site mister-bnine.ma_`;

  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/${RESTAURANT_PHONE}?text=${encoded}`;
  window.open(waUrl, '_blank');
}

/* ==========================================================================
   4. MENU FILTERING LOGIC
   ========================================================================== */
function initMenuFilters() {
  const filterBtns = document.querySelectorAll('.menu-tab-btn');
  const cards = document.querySelectorAll('.menu-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. REAL-TIME SEARCH (For menu.html)
   ========================================================================== */
function initSearch() {
  const searchInput = document.querySelector('#menu-search-input');
  if (!searchInput) return;

  const cards = document.querySelectorAll('.menu-card');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    cards.forEach(card => {
      const title = card.querySelector('.item-name')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.item-description')?.textContent.toLowerCase() || '';
      const category = card.dataset.category?.toLowerCase() || '';

      if (title.includes(query) || desc.includes(query) || category.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

/* ==========================================================================
   6. HAPTIC TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF8A00" stroke-width="2.5">
      <path d="M20 6L9 17l-5-5"></path>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}
