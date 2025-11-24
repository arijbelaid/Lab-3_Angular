# 🌐 TP Full Stack Development - Partie Angular

---

## 📌 Description
Ce projet représente la partie **Angular** du TP Full Stack Development.  
Objectif : Créer une application Angular avec :  
- Routage dynamique  
- Communication Parent → Enfant  
- Appel API pour afficher des données  

---

## 🛠 Prérequis
- Node.js >= 18  
- npm >= 8  
- Angular CLI >= 20  

Vérifier les versions :



---

✨ Fonctionnalités
npm install
---

🚀 Lancer l'application
ng serve
----
✨ Fonctionnalité
---

1️⃣ Routing
---

Barre de navigation (HeaderComponent) : Home, Login, Contact

Routage HTML via [routerLink]

Routage TypeScript via Router.navigate()

Paramètres de route : ActivatedRoute pour afficher ID


2️⃣ Composants
---

HeaderComponent : navigation

LoginComponent & ContactComponent : pages principales

ChildComponent : passer des données du parent à l’enfant

3️⃣ Partage de données
---
Chaîne de caractères : Parent → Enfant

Liste de villes (states) : Parent → Enfant

Affichage avec interpolation et boucle *ngFor


4️⃣ Appel API
---

ProductsComponent : récupération d’un produit depuis https://dummyjson.com/products/1

Affichage : titre et description






