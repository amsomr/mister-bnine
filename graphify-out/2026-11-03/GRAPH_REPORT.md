# Graph Report - mister-bnine  (2026-11-03)

## Corpus Check
- 3 files · ~81,857 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .xml 1, .css 1)

## Summary
- 41 nodes · 48 edges · 9 communities (3 shown, 6 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
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
- initHeroDishSwitcher

## God Nodes (most connected - your core abstractions)
1. `initCart()` - 7 edges
2. `🍔 Mister Bnine | مستر بنين - Dcheira El Jihadia` - 7 edges
3. `initHeroDishSwitcher()` - 5 edges
4. `addToCart()` - 4 edges
5. `updateCartUI()` - 3 edges
6. `showToast()` - 3 edges
7. `setDish()` - 3 edges
8. `startAutoTimer()` - 3 edges
9. `UTF8Handler` - 3 edges
10. `initOpeningHours()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `initCart()` --calls--> `addToCart()`  [EXTRACTED]
  app.js → app.js  _Bridges community 2 → community 5_
- `initCart()` --calls--> `showToast()`  [EXTRACTED]
  app.js → app.js  _Bridges community 2 → community 6_

## Import Cycles
- None detected.

## Communities (9 total, 6 thin omitted)

### Community 4 - "🍔 Mister Bnine | مستر بنين - Dcheira El Jihadia"
Cohesion: 0.25
Nodes (7): 🌟 Fonctionnalités & Expérience Visuelle (Al Walima Design System), 📍 Informations & Fiche Google Maps Officielle, 🚀 Lancement & Test en Local (Quick Start), 🍔 Mister Bnine | مستر بنين - Dcheira El Jihadia, 🎨 Palette de Couleurs & Tokens de Marque, 📌 Présentation du Projet (About The Project), 🗂️ Structure des Pages & Fichiers

### Community 5 - "saveCart"
Cohesion: 0.67
Nodes (3): addToCart(), saveCart(), updateCartUI()

### Community 8 - "initHeroDishSwitcher"
Cohesion: 0.70
Nodes (5): initHeroDishSwitcher(), resetAutoTimer(), setDish(), startAutoTimer(), updateContent()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `initHeroDishSwitcher()` connect `initHeroDishSwitcher` to `app.js`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `initCart()` (e.g. with `handleCheckoutWhatsApp()` and `closeCart()`) actually correct?**
  _`initCart()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Why does `initCart()` connect `initCart` to `app.js`, `saveCart`, `showToast`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `initOpeningHours()` connect `initOpeningHours` to `app.js`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._