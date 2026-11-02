# Graph Report - mister-bnine  (2026-11-02)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 24 nodes · 29 edges · 4 communities (1 shown, 3 thin omitted)
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8c26ad66`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app.js
- serve.py
- initCart
- initOpeningHours

## God Nodes (most connected - your core abstractions)
1. `initCart()` - 6 edges
2. `addToCart()` - 4 edges
3. `saveCart()` - 4 edges
4. `UTF8Handler` - 3 edges
5. `updateCartUI()` - 3 edges
6. `showToast()` - 2 edges
7. `updateItemQty()` - 2 edges
8. `handleWhatsAppCheckout()` - 2 edges
9. `initOpeningHours()` - 2 edges
10. `Mister Bnine Restaurant - Local Development Server Usage: python3 serve.py…` - 1 edges

## Surprising Connections (you probably didn't know these)
- `initCart()` --calls--> `addToCart()`  [EXTRACTED]
  app.js → app.js  _Bridges community 0 → community 2_

## Import Cycles
- None detected.

## Communities (4 total, 3 thin omitted)

### Community 0 - "app.js"
Cohesion: 0.33
Nodes (5): addToCart(), saveCart(), showToast(), updateCartUI(), updateItemQty()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `initCart()` connect `initCart` to `app.js`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `initCart()` (e.g. with `handleWhatsAppCheckout()` and `closeCart()`) actually correct?**
  _`initCart()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Why does `initOpeningHours()` connect `initOpeningHours` to `app.js`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._