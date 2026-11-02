# Graph Report - mister-bnine  (2026-11-02)

## Corpus Check
- 3 files · ~50,231 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .xml 1, .css 1)

## Summary
- 32 nodes · 36 edges · 7 communities (2 shown, 5 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `04f8c26d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- serve.py
- initCart
- initOpeningHours
- 🍔 Mister Bnine | مستر بنين - Dcheira El Jihadia
- saveCart
- addToCart

## God Nodes (most connected - your core abstractions)
1. `🍔 Mister Bnine | مستر بنين - Dcheira El Jihadia` - 7 edges
2. `initCart()` - 6 edges
3. `saveCart()` - 4 edges
4. `addToCart()` - 4 edges
5. `updateCartUI()` - 3 edges
6. `UTF8Handler` - 3 edges
7. `initOpeningHours()` - 2 edges
8. `updateItemQty()` - 2 edges
9. `handleWhatsAppCheckout()` - 2 edges
10. `showToast()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `addToCart()` --calls--> `saveCart()`  [EXTRACTED]
  app.js → app.js  _Bridges community 5 → community 6_
- `initCart()` --calls--> `addToCart()`  [EXTRACTED]
  app.js → app.js  _Bridges community 2 → community 6_
- `initCart()` --calls--> `updateCartUI()`  [EXTRACTED]
  app.js → app.js  _Bridges community 2 → community 5_

## Import Cycles
- None detected.

## Communities (7 total, 5 thin omitted)

### Community 4 - "🍔 Mister Bnine | مستر بنين - Dcheira El Jihadia"
Cohesion: 0.25
Nodes (7): 🌟 Fonctionnalités Clés (Key Features), 📍 Informations & Fiche Google Maps Officielle, 🚀 Lancement & Test en Local (Quick Start), 🍔 Mister Bnine | مستر بنين - Dcheira El Jihadia, 🎨 Palette de Couleurs & Tokens de Marque, 📌 Présentation du Projet (About The Project), 🗂️ Structure des Fichiers (Directory Structure)

### Community 5 - "saveCart"
Cohesion: 0.67
Nodes (3): saveCart(), updateCartUI(), updateItemQty()

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `initCart()` connect `initCart` to `app.js`, `saveCart`, `addToCart`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `initCart()` (e.g. with `handleWhatsAppCheckout()` and `closeCart()`) actually correct?**
  _`initCart()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Why does `initOpeningHours()` connect `initOpeningHours` to `app.js`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._