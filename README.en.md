# NoMoveFlags 🗺️

NoMoveFlags is a practice game app to solve the common GeoGuessr No Move / Country Streak problem: "I've seen that flag but can't remember the country name."
We've prepared modes with short question sets, a mode focused only on GeoGuessr-compatible countries, and a browsing mode for memorization.

## Table of Contents 📋

- [Overview](#overview-)
- [Features](#features-)
- [Game Modes](#game-modes-)
- [Technology Stack](#technology-stack-)
- [Project Structure](#project-structure-)
- [Getting Started](#getting-started-)
- [Development](#development-)
- [Data Sources](#data-sources-)
- [Contributing](#contributing-)
- [License](#license-)

## Overview 🌍

NoMoveFlags addresses a critical challenge in competitive GeoGuessr: rapid and accurate flag identification under time pressure. In No Move and Country Streak modes, players have mere seconds to identify flags correctly, making systematic training essential for competitive performance.

The application leverages cognitive learning principles, spaced repetition patterns, and game-based learning methodologies to optimize flag memorization and recall speed.

## Features ✨
- 5 different modes
- Instant feedback
- Memorization mode
- Organized data management

*Performance tracking and other features will be added when we feel like it

## Game Modes 🎮

### 1. Flag 10-Question Mode
Random 10 questions.

### 2. ISO Code 10-Question Mode
Guess countries from codes like JP / FR / DE. Surprisingly effective.

### 3. GeoGuessr Countries 10-Question Mode
10 questions from countries that appear in GeoGuessr only. More practical.

### 4. All Flags Mode
Questions from the entire dataset.

### 5. Memorization Mode
Browse flags by region. For studying while looking at them.

## Technology Stack ⚙️
- Next.js
- React
- TypeScript
- Tailwind CSS
- Static Export (Cloudflare Pages)

## Project Structure 🏗️

```
nomoveflags/
├── app/                  # Next.js App Router
├── components/           # UI Components
├── context/              # Game State Management
├── data/                 # Flag Data
└── utils/                # Game Logic, etc.
```

## Getting Started 🚀

### Prerequisites
- Node.js 18+
- pnpm

### Installation & Startup

```bash
git clone https://github.com/yourusername/nomoveflags.git
cd nomoveflags
pnpm install
pnpm dev
```

### Production Build

```bash
pnpm build
pnpm dlx serve@latest out
```

Application available at `http://localhost:3000`

## Development 🛠️

### Common Commands

```bash
pnpm dev
pnpm build
pnpm lint
```

Flag data is organized under data/.<br>
To add more, put them in additionalFlags*.ts files.

## Data Sources 📊
- Countries/Regions List: Google's supported countries/regions list
- GeoGuessr Compatible Countries: Plonk It (GeoGuessr Guide)

## Contributing 🤝
Issues / Pull Requests welcome<br>
Feel free to add/fix flag data or make minor UI improvements.

## License 📜

This project is licensed under the [MIT License](LICENSE). You may use, modify, and distribute this software for personal and commercial purposes with proper attribution.

---

**Built with ❤️ for the GeoGuessr community**