/**
 * MISTER BNINE - LUXURY INTERACTIVE ENGINE
 * Inspired by Al Walima (Agadir / Dcheira El Jihadia)
 * Phone / WhatsApp: +212 6 65 63 84 87
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initOpeningHours();
  initCart();
  initMenuFilters();
  initSearch();
  initReservation();
  initFAQ();
  initMenuBook();
});

/* ==========================================================================
   1. NAVBAR & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.site-navbar');
  const toggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      drawer.classList.toggle('open', !isOpen);
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
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
  const statusElements = document.querySelectorAll('.hero-status-pill, .live-status-badge');
  if (!statusElements.length) return;

  function checkStatus() {
    const now = new Date();
    const moroccoTimeStr = now.toLocaleString("en-US", { timeZone: "Africa/Casablanca" });
    const moroccoDate = new Date(moroccoTimeStr);
    
    const hours = moroccoDate.getHours();
    const minutes = moroccoDate.getMinutes();
    const totalMinutes = hours * 60 + minutes;

    // 12:00 (720 min) to 00:30 (30 min)
    const isOpen = (totalMinutes >= 720) || (totalMinutes <= 30);

    statusElements.forEach(el => {
      const textSpan = el.querySelector('.status-text') || el;
      const dot = el.querySelector('.status-dot');

      if (isOpen) {
        if (dot) dot.style.background = '#10B981';
        if (textSpan.tagName === 'SPAN') {
          textSpan.textContent = "Ouvert actuellement • Service continu jusqu'à 00:30";
        }
      } else {
        if (dot) dot.style.background = '#EF4444';
        if (textSpan.tagName === 'SPAN') {
          textSpan.textContent = "Fermé actuellement • Ouvre à 12:00";
        }
      }
    });
  }

  checkStatus();
  setInterval(checkStatus, 60000);
}

/* ==========================================================================
   3. CART & WHATSAPP DIRECT ORDER SYSTEM
   ========================================================================== */
let cart = [];

function initCart() {
  const triggers = document.querySelectorAll('.btn-cart-trigger');
  const overlay = document.querySelector('.cart-drawer-overlay');
  const drawer = document.querySelector('.cart-drawer');
  const closeBtn = document.querySelector('.btn-close-cart');
  const addButtons = document.querySelectorAll('.btn-add-cart, .btn-add-item');
  const checkoutBtn = document.querySelector('.btn-checkout-whatsapp');

  try {
    const stored = localStorage.getItem('mb_cart');
    if (stored) cart = JSON.parse(stored);
  } catch(e) {
    cart = [];
  }
  updateCartUI();

  function openCart() {
    drawer?.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    drawer?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  triggers.forEach(b => b.addEventListener('click', openCart));
  overlay?.addEventListener('click', closeCart);
  closeBtn?.addEventListener('click', closeCart);

  addButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.dataset.id || 'item-' + Math.random().toString(36).substr(2, 6);
      const name = btn.dataset.name || 'Plat Mister Bnine';
      const price = parseFloat(btn.dataset.price) || 35;

      addToCart(id, name, price);
      showToast(`« ${name} » ajouté au panier !`);
    });
  });

  checkoutBtn?.addEventListener('click', handleCheckoutWhatsApp);
}

function addToCart(id, name, price) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, qty: 1 });
  }
  saveCart();
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem('mb_cart', JSON.stringify(cart));
  } catch(e) {}
}

function updateCartUI() {
  const badges = document.querySelectorAll('.cart-count-badge');
  const list = document.querySelector('.cart-items-list');
  const totalVal = document.querySelector('.cart-total-val');

  const count = cart.reduce((acc, i) => acc + i.qty, 0);
  const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);

  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });

  if (totalVal) {
    totalVal.textContent = total.toFixed(2).replace('.00', '') + ' DH';
  }

  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `
      <div style="text-align:center; padding:50px 20px; color:var(--text-muted);">
        <p style="font-size:2.4rem; margin-bottom:12px;">🍽️</p>
        <p style="font-family:var(--font-display); font-size:1.3rem; color:var(--gold-light);">Votre panier est vide</p>
        <p style="font-size:0.88rem; margin-top:6px;">Ajoutez des pizzas au feu de bois, burgers ou salades fraîches pour commander !</p>
      </div>
    `;
    return;
  }

  list.innerHTML = cart.map(item => `
    <div class="cart-item-card">
      <div>
        <h4 style="font-family:var(--font-display); font-size:1.15rem; color:#FFFFFF; margin-bottom:4px;">${item.name}</h4>
        <div style="font-size:0.85rem; color:var(--gold-primary); font-weight:700;">${item.price} DH / unité</div>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button onclick="decrementCart('${item.id}')" style="width:28px; height:28px; border-radius:50%; background:rgba(214,173,99,0.15); border:1px solid var(--gold-primary); color:var(--gold-light); font-weight:800; display:flex; align-items:center; justify-content:center;">-</button>
        <span style="font-weight:700; min-width:18px; text-align:center; color:#FFF;">${item.qty}</span>
        <button onclick="incrementCart('${item.id}')" style="width:28px; height:28px; border-radius:50%; background:rgba(214,173,99,0.15); border:1px solid var(--gold-primary); color:var(--gold-light); font-weight:800; display:flex; align-items:center; justify-content:center;">+</button>
      </div>
    </div>
  `).join('');
}

window.incrementCart = function(id) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += 1;
    saveCart();
    updateCartUI();
  }
};

window.decrementCart = function(id) {
  const index = cart.findIndex(i => i.id === id);
  if (index > -1) {
    if (cart[index].qty > 1) {
      cart[index].qty -= 1;
    } else {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
};

function handleCheckoutWhatsApp() {
  if (cart.length === 0) {
    alert("Votre panier est vide. Veuillez sélectionner des plats !");
    return;
  }

  const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  let message = `*Salam Mister Bnine !*\nJe souhaite passer une commande :\n\n`;

  cart.forEach(item => {
    message += `• ${item.qty}x ${item.name} (${item.price * item.qty} DH)\n`;
  });

  message += `\n*TOTAL : ${total.toFixed(2).replace('.00', '')} DH*\n`;
  message += `\nNom :\nAdresse / Quartier à Dcheira :\n(Option : Sur place / À emporter / Livraison)`;

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/212665638487?text=${encoded}`, '_blank');
}

/* ==========================================================================
   4. MENU FILTERS & SEARCH
   ========================================================================== */
function initMenuFilters() {
  const buttons = document.querySelectorAll('.menu-tab-btn, .category-filter-pill');
  const cards = document.querySelectorAll('.dish-card, .menu-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
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

function initSearch() {
  const input = document.querySelector('#menu-search-input');
  const cards = document.querySelectorAll('.dish-card, .menu-card');

  if (!input) return;

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();

    cards.forEach(card => {
      const name = card.querySelector('.dish-title, .item-name')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.dish-desc, .item-description')?.textContent.toLowerCase() || '';

      if (name.includes(q) || desc.includes(q)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

/* ==========================================================================
   5. TABLE RESERVATION SYSTEM (AL WALIMA FLOW)
   ========================================================================== */
function initReservation() {
  const forms = document.querySelectorAll('.reservation-form');
  forms.forEach(form => {
    // Guest counter
    const decBtn = form.querySelector('.btn-guest-dec');
    const incBtn = form.querySelector('.btn-guest-inc');
    const valDisplay = form.querySelector('.counter-value-display');
    const hiddenInput = form.querySelector('input[name="guests"]');

    let guests = 2;

    if (decBtn && incBtn && valDisplay) {
      decBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (guests > 1) {
          guests -= 1;
          valDisplay.textContent = guests + (guests > 1 ? ' convives' : ' convive');
          if (hiddenInput) hiddenInput.value = guests;
        }
      });

      incBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (guests < 30) {
          guests += 1;
          valDisplay.textContent = guests + ' convives';
          if (hiddenInput) hiddenInput.value = guests;
        }
      });
    }

    // Submit via WhatsApp
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('input[name="fullname"]')?.value || 'Client';
      const phone = form.querySelector('input[name="phone"]')?.value || '';
      const date = form.querySelector('input[name="date"]')?.value || 'Aujourd\'hui';
      const time = form.querySelector('input[name="time"]:checked')?.value || form.querySelector('select[name="time"]')?.value || '20:00';
      const notes = form.querySelector('textarea[name="notes"]')?.value || '';

      let text = `*RÉSERVATION DE TABLE - MISTER BNINE*\n`;
      text += `• Nom : ${name}\n`;
      text += `• Téléphone : ${phone}\n`;
      text += `• Convives : ${guests} personnes\n`;
      text += `• Date : ${date}\n`;
      text += `• Heure souhaitée : ${time}\n`;
      if (notes) text += `• Remarques : ${notes}\n`;

      const encoded = encodeURIComponent(text);
      window.open(`https://wa.me/212665638487?text=${encoded}`, '_blank');
      showToast("Demande de réservation envoyée avec succès !");
    });
  });
}

/* ==========================================================================
   6. QUESTIONS FRÉQUENTES (ACCORDION FAQ)
   ========================================================================== */
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    btn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
}

/* ==========================================================================
   7. INTERACTIVE MENU BOOK VIEWER (AL WALIMA /FR/MENU/BOOK)
   ========================================================================== */
function initMenuBook() {
  const book = document.querySelector('.menu-book-viewport');
  if (!book) return;

  const pages = [
    { title: "Carte Officielle - Salades & Sandwiches", src: "assets/photos/affiche_menu_exact.jpg" },
    { title: "Spécialités Pizzas au Feu de Bois", src: "assets/photos/affiche_promo_pizza.jpg" },
    { title: "Burgers Gourmets & Combos", src: "assets/photos/affiche_burger.jpg" },
    { title: "Tacos Maison & Sauces Secrètes", src: "assets/photos/affiche_tacos_original.jpg" },
    { title: "Couscous Royal Traditionnel du Vendredi", src: "assets/photos/affiche_couscous_vendredi.jpg" }
  ];

  let currentPage = 0;
  const pageImg = book.querySelector('.book-page-image');
  const pageIndicator = book.querySelector('.book-page-indicator');
  const prevBtn = book.querySelector('.btn-book-prev');
  const nextBtn = book.querySelector('.btn-book-next');
  const pageTitle = book.querySelector('.book-page-title');

  function renderPage() {
    if (!pageImg) return;
    pageImg.style.opacity = '0';
    setTimeout(() => {
      pageImg.src = pages[currentPage].src;
      pageImg.alt = pages[currentPage].title;
      if (pageIndicator) pageIndicator.textContent = `‹ ${currentPage + 1} / ${pages.length} ›`;
      if (pageTitle) pageTitle.textContent = pages[currentPage].title;
      pageImg.style.opacity = '1';
    }, 150);
  }

  prevBtn?.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      renderPage();
    }
  });

  nextBtn?.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      renderPage();
    }
  });

  renderPage();
}

/* ==========================================================================
   TOAST HELPER
   ========================================================================== */
function showToast(msg) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span><span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
