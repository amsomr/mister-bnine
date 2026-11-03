# Graph Report - mister-bnine  (2026-11-03)

## Corpus Check
- 3 files · ~80,982 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .xml 1, .css 1)

## Summary
- 36 nodes · 40 edges · 8 communities (2 shown, 6 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8cedc6de`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app.js
- serve.py
- initCart
- initOpeningHours
- 🍔 Mister Bnine | مستر بنين - Dcheira El Jihadia
- saveCart
- showToast
- initMenuBook

## God Nodes (most connected - your core abstractions)
1. `initCart()` - 7 edges
2. `🍔 Mister Bnine | مستر بنين - Dcheira El Jihadia` - 7 edges
3. `addToCart()` - 4 edges
4. `updateCartUI()` - 3 edges
5. `showToast()` - 3 edges
6. `UTF8Handler` - 3 edges
7. `initOpeningHours()` - 2 edges
8. `saveCart()` - 2 edges
9. `handleCheckoutWhatsApp()` - 2 edges
10. `initReservation()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `initCart()` --calls--> `addToCart()`  [EXTRACTED]
  app.js → app.js  _Bridges community 2 → community 5_
- `initCart()` --calls--> `showToast()`  [EXTRACTED]
  app.js → app.js  _Bridges community 2 → community 6_

## Import Cycles
- None detected.

## Communities (8 total, 6 thin omitted)

### Community 4 - "🍔 Mister Bnine | مستر بنين - Dcheira El Jihadia"
Cohesion: 0.25
Nodes (7): 🌟 Fonctionnalités & Expérience Visuelle (Al Walima Design System), 📍 Informations & Fiche Google Maps Officielle, 🚀 Lancement & Test en Local (Quick Start), 🍔 Mister Bnine | مستر بنين - Dcheira El Jihadia, 🎨 Palette de Couleurs & Tokens de Marque, 📌 Présentation du Projet (About The Project), 🗂️ Structure des Pages & Fichiers

### Community 5 - "saveCart"
Cohesion: 0.67
Nodes (3): addToCart(), saveCart(), updateCartUI()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `initCart()` connect `initCart` to `app.js`, `saveCart`, `showToast`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `initCart()` (e.g. with `handleCheckoutWhatsApp()` and `closeCart()`) actually correct?**
  _`initCart()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Why does `initOpeningHours()` connect `initOpeningHours` to `app.js`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._