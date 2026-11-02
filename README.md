# 🍔 Mister Bnine | مستر بنين - Dcheira El Jihadia

> **Le Sanctuaire du Goût Savoureux & Cuisson au Feu de Bois à Dcheira El Jihadia (Grand Agadir).**
> Site web officiel & plateforme de commande et réservation digitale pour le restaurant & fast-food **Mister Bnine**, inspiré du design haut de gamme et de l'expérience sensorielle d'**Al Walima**.

---

## 📌 Présentation du Projet (About The Project)

**Mister Bnine** est un établissement gastronomique et fast-food de premier plan situé sur l'**Avenue Al Mourabitin (Hay Le Mers) à Dcheira El Jihadia**. Réputé pour son four à bois traditionnel noir gravé de son emblème doré « MB », ses pizzas artisanales à pâte fine croustillante, ses burgers gourmets cuits au four, ses sandwichs roulés toastés et ses salades composées fraîches du matin, le restaurant bénéficie d'une note Google Maps de **4.4 ★ sur plus de 145 avis vérifiés**.

Cette plateforme web a été entièrement refondue dans les codes d'excellence et de raffinement d'**Al Walima** (Agadir) :
- Palette chaleureuse **Moroccan Charcoal & Gold** (`#141210`, `#d6ad63`, `#e6d1a2`, `#8b6f4a`).
- Typographie éditoriale de prestige : **Cormorant Garamond** (titres), **Dancing Script** (signatures et fioritures), **Inter** (corps) et **Alexandria** (calligraphie arabe).
- Motifs géométriques marocains subtils (`moroccan-ornament`).
- Effets d'arcade mauresque, ruban défilant Wordmark et double carrousel d'avis clients en continu.

---

## 📍 Informations & Fiche Google Maps Officielle

- **Établissement :** Mister Bnine (مستر بنين)
- **Adresse :** 117, Hay Le Mers, Avenue Al Mourabitin, Dcheira El Jihadia 80000, Maroc
- **Coordonnées GPS :** `30.3722634, -9.5227452`
- **Fiche Google Maps :** [https://maps.app.goo.gl/Y2hHxJQywBc3FXu29](https://maps.app.goo.gl/Y2hHxJQywBc3FXu29)
- **Compte Instagram Officiel :** [https://www.instagram.com/restaurant_misterbnine/](https://www.instagram.com/restaurant_misterbnine/) (`@restaurant_misterbnine`)
- **Téléphone Direct :** `+212 6 65 63 84 87` (06 65 63 84 87)
- **Horaires :** 12:00 – 00:30 (7 jours sur 7 en service continu)
- **Services :** Sur place (Salle climatisée + Étage mezzanine), À emporter, Livraison à domicile (Dcheira, Inezgane, Agadir Sud)

---

## 🌟 Fonctionnalités & Expérience Visuelle (Al Walima Design System)

1. **Barre de Navigation Verre Dépoli (Glassmorphism Navbar) :**
   - Effet `backdrop-filter: blur(24px) saturate(165%)` avec hairlines dorées.
   - Logo officiel four à bois + Mascotte ronde du Chef Mister Bnine.
   - Sélecteur de langue (FR / AR), panier interactif et bouton doré « Réserver ma table ».

2. **Hero Section Majestueuse avec Cadre Mauresque :**
   - Arrière-plan de la salle de restaurant avec vignettage chaleureux et arabesques d'angles SVG.
   - Titre d'orfèvre en *Cormorant Garamond* et signature en *Dancing Script*.
   - Détecteur dynamique d'horaires d'ouverture basé sur le fuseau horaire de Casablanca.

3. **Ruban Wordmark Défilant Infini (Divider Ticker) :**
   - Animation fluide à 45s bouclant l'emblème de Mister Bnine, les étoiles d'or et les spécialités.

4. **Bienvenue & Piliers en Arcades Mauresques :**
   - 3 cartes piliers avec découpe d'arche : Cuisson au feu de bois, Ambiance chaleureuse, Service attentionné.
   - Filigrane calligraphique géant en arabe (`مستر بنين`) en arrière-plan.

5. **Double Marquee Infini d'Avis Clients Google :**
   - Deux pistes parallèles défilant en sens inverse avec pause automatique au survol de la souris.
   - Témoignages réels et vérifiés avec étoiles d'or et étiquettes de quartier.

6. **Plats Signatures & Ajout Panier :**
   - Cartes gastronomiques avec photos réelles de chaque plat (Pizzas, Burgers, Rolls, Tacos, Salades, Za3za3).
   - Ajout au panier en 1 clic et calcul du total en Dirhams (DH).

7. **Visionneuse Interactive « Notre Carte Book » (`menu-book.html`) :**
   - Exactement comme `/fr/menu/book` d'Al Walima : visionneuse interactive des 5 affiches officielles (carte imprimée, promo pizza 2=1, burgers, tacos, couscous).
   - Contrôles de pagination (‹ 1 / 5 ›), zoom et bouton de commande rapide.

8. **Module de Réservation Dédié (`reservation.html`) :**
   - Exactement comme `/fr/reservation` d'Al Walima : sélection de la date, créneaux horaires (Midi / Soir), compteur de convives interactif (- / +) et envoi de confirmation instantanée sur WhatsApp.

9. **Section Reels Instagram Réels (@restaurant_misterbnine) :**
   - 6 couvertures vidéo haute résolution avec bouton de lecture doré et lien direct vers les Reels originaux.

10. **Questions Fréquentes (Accordéon FAQ) :**
    - 5 questions interactives dépliables avec rotation d'icône.

11. **Bouton Flottant Pulsant (Sticky Action) :**
    - Bouton doré persistant en bas d'écran avec halo pulsant (`call-sticky-pulse`) pour réserver à tout moment.

---

## 🗂️ Structure des Pages & Fichiers

```text
mister-bnine/
├── index.html            # Accueil complet (Hero, Ticker, Piliers, Avis Marquee, Signatures, Galerie, Reels, Réservation, FAQ, Contact)
├── menu.html             # La Carte complète avec filtres, recherche en temps réel et panier WhatsApp
├── menu-book.html        # Notre Carte Book (visionneuse interactive de livre comme Al Walima)
├── reservation.html      # Page dédiée de réservation de table (compteur convives, créneaux, validation)
├── about.html            # L'Expérience & Histoire (four à bois, logo MB, mascotte, engagements)
├── contact.html          # Localisation, horaires, coordonnées, WhatsApp direct et Google Maps
├── styles.css            # Design System complet Al Walima (Charcoal & Gold, Cormorant Garamond, Dancing Script, Inter)
├── app.js                # Moteur interactif (panier, réservation WhatsApp, flipbook, FAQ, horaires)
├── serve.py              # Serveur local Python zéro-dépendance (port 3005)
├── robots.txt            # Directives d'indexation
├── sitemap.xml           # Plan du site avec les 6 pages officielles
├── llms.txt              # Contexte LLM & IA
├── README.md             # Documentation complète
└── assets/
    ├── logo.svg          # Emblème officiel four à bois « MB »
    ├── favicon.svg       # Favicon SVG
    ├── favicon.png       # Favicon PNG haute fidélité
    ├── logo_mascot_round.png # Mascotte officielle du Chef Mister Bnine
    ├── photos/           # 17 photos réelles des plats et des lieux
    └── instagram/        # 12 couvertures de reels officielles
```

---

## 🚀 Lancement & Test en Local (Quick Start)

```bash
# 1. Se rendre dans le dossier du projet
cd "/home/amsomr/Projects/mister-bnine"

# 2. Lancer le serveur local (s'il n'est pas déjà actif)
python3 serve.py 3005

# 3. Ouvrir dans votre navigateur
# http://localhost:3005/
```

---

## 🎨 Palette de Couleurs & Tokens de Marque

| Token | Valeur Hex | Rôle |
|---|---|---|
| `--bg-primary` | `#141210` | Fond principal Charcoal chaleureux |
| `--bg-secondary`| `#181512` | Fond des sections secondaires |
| `--bg-surface` | `#1c1814` | Cartes et surfaces intérieures |
| `--gold-primary`| `#d6ad63` | Or signature Al Walima |
| `--gold-light` | `#e6d1a2` | Or clair pour titres et reflets |
| `--gold-dark` | `#8b6f4a` | Bronze foncé pour contours et bordures |
| `--text-primary`| `#fbf7ee` | Blanc crème d'une lisibilité parfaite |

---

*Mister Bnine – Dcheira El Jihadia, Agadir, Maroc.*
