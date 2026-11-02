# 🍔 Mister Bnine | مستر بنين - Dcheira El Jihadia

> **Le Sanctuaire du Goût Savoureux à Dcheira El Jihadia (Grand Agadir).**
> Site web officiel & plateforme de commande digitale pour le restaurant & fast-food **Mister Bnine**.

---

## 📌 Présentation du Projet (About The Project)

**Mister Bnine** est un établissement gastronomique et fast-food de premier plan situé sur l'**Avenue Al Mourabitin (Hay Le Mers) à Dcheira El Jihadia**. Réputé pour son rapport qualité-prix exemplaire, ses pizzas artisanales à pâte fermentée 48h, ses tacos gratinés nappés d'une sauce fromagère maison exclusive, et ses smash burgers généreux, le restaurant bénéficie d'une note Google Maps de **4.4 ★ sur plus de 145 avis vérifiés**.

Cette plateforme web a été conçue selon les plus hauts standards d'architecture visuelle (Awwwards-tier / High-End Agency Design) pour offrir une expérience fluide, rapide et axée sur la conversion directe via WhatsApp et appel téléphonique.

---

## 📍 Informations & Fiche Google Maps Officielle

- **Établissement :** Mister Bnine (مستر بنين)
- **Adresse :** 117, Hay Le Mers, Avenue Al Mourabitin, Dcheira El Jihadia 80000, Maroc
- **Coordonnées GPS :** `30.3722634, -9.5227452`
- **Fiche Google Maps :** [https://maps.app.goo.gl/Y2hHxJQywBc3FXu29](https://maps.app.goo.gl/Y2hHxJQywBc3FXu29)
- **Téléphone Direct :** `+212 6 65 63 84 87` (06 65 63 84 87)
- **Horaires :** 12:00 – 00:30 (7 jours sur 7 en service continu)
- **Services :** Sur place, À emporter, Livraison à domicile (Dcheira, Inezgane, Agadir Sud)

---

## 🌟 Fonctionnalités Clés (Key Features)

1. **Architecture Visuelle Double-Bezel (Doppelrand Hardware Aesthetic) :**
   - Coque extérieure usinée avec hairlines sub-pixel et rayon concentrique (`rounded-[28px]`).
   - Cœur intérieur sombre (`#1A1A1E` / `#222227`) rehaussé d'ombres intérieures diffuses et d'accents ambrés (`#FF5500` & `#FFB800`).
   - Typographies premium sans polices génériques : `Outfit`, `Plus Jakarta Sans`, et calligraphie arabe `Alexandria`.

2. **Panier Flottant & Générateur de Commande WhatsApp Directe :**
   - Ajout d'articles au panier en 1 clic depuis la page d'accueil ou le menu complet.
   - Sélection du mode : **Livraison à Dcheira/Inezgane** ou **À emporter**.
   - Calcul automatique du total en Dirhams (DH).
   - Formatage instantané d'un message WhatsApp prêt à envoyer au restaurant (`+212 6 65 63 84 87`) avec détails des plats, suppléments, adresse et notes.

3. **Détecteur en Temps Réel d'Horaires d'Ouverture :**
   - Calcul dynamique basé sur le fuseau horaire marocain (`Africa/Casablanca`).
   - Badge lumineux avec point d'état vert pulsant (*Ouvert actuellement • Ferme à 00h30*) ou rouge (*Fermé actuellement • Ouvre à 12h00*).

4. **Carte Interactive Complète avec Recherche Instantanée (`menu.html`) :**
   - Filtrage par catégories (Pizzas, Tacos Français, Smash Burgers, Sandwichs & Shawarma, Salades de la Mer, Boissons & Desserts).
   - Moteur de recherche en temps réel par mots-clés ou ingrédients.

5. **Optimisation GEO, LLM & SEO Avancée :**
   - Données structurées Schema.org JSON-LD complètes (`FastFoodRestaurant`, coordonnées GPS, notation Google 4.4, horaires, menu, géolocalisation).
   - Fichiers `robots.txt`, `sitemap.xml`, et `llms.txt` pour indexation par Google Search, Google AI Overviews, Perplexity, Claude et ChatGPT.

---

## 🗂️ Structure des Fichiers (Directory Structure)

```text
mister-bnine/
├── index.html            # Page d'accueil (Hero, Bento Avantages, Highlights, Avis, Carte)
├── menu.html             # Menu digital complet avec recherche en temps réel et filtres
├── about.html            # Histoire, sourcing des ingrédients frais, normes d'hygiène
├── contact.html          # Plan d'accès, coordonnées, zones de livraison, contact rapide
├── styles.css            # Système de design gastronomique moderne & responsive
├── app.js                # Moteur interactif (panier, WhatsApp checkout, horaires, recherche)
├── serve.py              # Serveur local Python zéro-dépendance (port 3005)
├── robots.txt            # Directives d'indexation et accès robots IA
├── sitemap.xml           # Plan du site XML pour moteurs de recherche
├── llms.txt              # Fichier de contexte pour moteurs d'IA conversationnels
├── README.md             # Documentation complète du projet
└── assets/
    ├── logo.svg          # Logo officiel Mister Bnine (Typographie + Emblème toque & flamme)
    └── favicon.svg       # Favicon SVG pour onglet navigateur
```

---

## 🚀 Lancement & Test en Local (Quick Start)

Le projet ne nécessite aucune installation de paquets Node.js ni dépendance externe lourde :

```bash
# 1. Se rendre dans le dossier du projet
cd "/home/amsomr/Projects/mister-bnine"

# 2. Lancer le serveur local
python3 serve.py

# 3. Ouvrir dans votre navigateur
# http://localhost:3002/
```

---

## 🎨 Palette de Couleurs & Tokens de Marque

| Token | Valeur Hex | Rôle |
|---|---|---|
| `--bg-deep` | `#0B0B0D` | Fond principal OLED noir profond |
| `--bg-card` | `#1A1A1E` | Fond des cartes double-bezel |
| `--accent-primary` | `#FF5500` | Orange vif énergique / Flamme grill |
| `--accent-secondary`| `#FF8A00` | Ambre doré gastronomique |
| `--accent-gold` | `#FFB800` | Or croustillant / Éléments stars & prix |
| `--text-primary` | `#FAF9F6` | Blanc cassé ultra-lisible |
| `--status-open` | `#10B981` | Vert émeraude (Ouvert en direct) |

---

*Développé avec passion pour Mister Bnine – Dcheira El Jihadia, Maroc.*
