# NoMoveFlags 🗺️

NoMoveFlags est une application de jeu d'entraînement pour résoudre le problème courant de GeoGuessr No Move / Country Streak : "J'ai vu ce drapeau mais je n'arrive pas à me rappeler du nom du pays."
Nous avons préparé des modes avec des séries de questions courtes, un mode axé uniquement sur les pays compatibles GeoGuessr, et un mode de navigation pour la mémorisation.

## Table des matières 📋

- [Aperçu](#aperçu-)
- [Caractéristiques](#caractéristiques-)
- [Modes de jeu](#modes-de-jeu-)
- [Stack technologique](#stack-technologique-)
- [Structure du projet](#structure-du-projet-)
- [Commencer](#commencer-)
- [Développement](#développement-)
- [Sources de données](#sources-de-données-)
- [Contribuer](#contribuer-)
- [Licence](#licence-)

## Aperçu 🌍

NoMoveFlags répond à un défi critique dans le GeoGuessr compétitif : l'identification rapide et précise des drapeaux sous pression temporelle. Dans les modes No Move et Country Streak, les joueurs n'ont que quelques secondes pour identifier correctement les drapeaux, rendant l'entraînement systématique essentiel pour les performances compétitives.

L'application exploite les principes de l'apprentissage cognitif, les modèles de répétition espacée et les méthodologies d'apprentissage basées sur le jeu pour optimiser la mémorisation des drapeaux et la vitesse de rappel.

## Caractéristiques ✨
- 5 modes différents
- Retour instantané
- Mode mémorisation
- Gestion organisée des données

*Le suivi des performances et autres fonctionnalités seront ajoutés quand on en aura envie

## Modes de jeu 🎮

### 1. Mode Drapeau 10 Questions
10 questions aléatoires.

### 2. Mode Code ISO 10 Questions
Deviner les pays à partir de codes comme JP / FR / DE. Étonnamment efficace.

### 3. Mode Pays GeoGuessr 10 Questions
10 questions uniquement à partir des pays qui apparaissent dans GeoGuessr. Plus pratique.

### 4. Mode Tous les Drapeaux
Questions à partir de l'ensemble du jeu de données.

### 5. Mode Mémorisation
Parcourir les drapeaux par région. Pour étudier en les regardant.

## Stack technologique ⚙️
- Next.js
- React
- TypeScript
- Tailwind CSS
- Export statique (Cloudflare Pages)

## Structure du projet 🏗️

```
nomoveflags/
├── app/                  # Next.js App Router
├── components/           # Composants UI
├── context/              # Gestion d'état du jeu
├── data/                 # Données des drapeaux
└── utils/                # Logique de jeu, etc.
```

## Commencer 🚀

### Prérequis
- Node.js 18+
- pnpm

### Installation et démarrage

```bash
git clone https://github.com/yourusername/nomoveflags.git
cd nomoveflags
pnpm install
pnpm dev
```

### Build de production

```bash
pnpm build
pnpm dlx serve@latest out
```

Application disponible sur `http://localhost:3000`

## Développement 🛠️

### Commandes courantes

```bash
pnpm dev
pnpm build
pnpm lint
```

Les données des drapeaux sont organisées sous data/.<br>
Pour en ajouter plus, mettez-les dans les fichiers additionalFlags*.ts.

## Sources de données 📊
- Liste des pays/régions : Liste des pays/régions supportés par Google
- Pays compatibles GeoGuessr : Plonk It (GeoGuessr Guide)

## Contribuer 🤝
Issues / Pull Requests bienvenues<br>
N'hésitez pas à ajouter/corriger les données des drapeaux ou faire des améliorations mineures de l'UI.

## Licence 📜

Ce projet est sous licence [MIT License](LICENSE). Vous pouvez utiliser, modifier et distribuer ce logiciel à des fins personnelles et commerciales avec une attribution appropriée.

---

**Construit avec ❤️ pour la communauté GeoGuessr**