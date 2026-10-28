# Manthan Labs

> We run experiments in AI until they become products.

Manthan Labs builds models, simulates complex systems, and hardens breakthrough AI experiments into production-grade tools. This repository contains the official frontend web application, built with **React** and **Vite** with a modular component architecture and a custom dark-bench design system.

---

## 🌟 Key Features

- **Live Flow-Field Simulation**: Interactive HTML5 Canvas hero simulation with 900 reactive particles, directional vector fields, alpha dissipation, and `prefers-reduced-motion` support.
- **Waveform Timeline & Video Cropping Preview**: Dynamic 120-bar algorithmic audio waveform with active detection ranges, sweeping playhead animation, and live 9:16 vertical shorts tracking demonstration.
- **Modular Multi-View Routing**: Lightweight hash-based routing (`#home`, `#products`, `#reelcut`, `#consultancy`) with smooth auto-scrolling to deep-linked anchor sections (`#demo`, `#waitlist`).
- **Data-Driven Architecture**: Product catalogs, journey milestones, work categories, and criteria definitions are separated into clean data modules for effortless maintenance.
- **Accessible, Interactive Forms**: Demo requests, early-access waitlist, and project proposal forms with reactive state management, validation, and polite ARIA live status feedback.
- **Design System & Shape Grammar**:
  - `Dashed square` = Experiment
  - `Hairline square` = In development
  - `Cyan line + dissipating glow` = Launching / Live

---

## 🏗️ Project Architecture

```
mlabs/
├── index.html                           # Font imports (Syne, IBM Plex Sans, IBM Plex Mono) & viewport configuration
├── public/
│   └── favicon.svg                      # Custom Manthan Labs SVG mark
├── src/
│   ├── main.jsx                         # Application entrypoint
│   ├── App.jsx                          # Main layout orchestrator & view renderer
│   ├── index.css                        # Design tokens, variables, typography, keyframes & responsive layout
│   ├── hooks/
│   │   └── useHashRoute.js              # Hash routing, anchor scrolling, and active link synchronization
│   ├── data/
│   │   ├── productsData.js              # Product models (video, vision, language, voice) & options
│   │   └── contentData.js               # Kinds of work, timeline stops, steps, target audiences, and consultancy data
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx               # Sticky navigation with active page indicator
│   │   │   ├── Footer.jsx               # Copyright and status indicator legend
│   │   │   ├── Button.jsx               # Reusable button and link component
│   │   │   └── StatusBadge.jsx          # Experiment / Dev / Launching badge
│   │   ├── home/
│   │   │   ├── ParticleCanvas.jsx       # 900-particle canvas animation with lifecycle management
│   │   │   ├── HomeHero.jsx             # Hero section featuring live simulation
│   │   │   ├── KindsSection.jsx         # Models, Simulations, and Products cards
│   │   │   ├── JourneySection.jsx       # Timeline sequence
│   │   │   └── LaunchStrip.jsx          # Reelcut launch highlight strip
│   │   ├── products/
│   │   │   ├── ProductCard.jsx          # Modular product cards with tags and status
│   │   │   └── DemoForm.jsx             # Demo request form with live confirmation
│   │   ├── reelcut/
│   │   │   ├── ReelcutHero.jsx          # Reelcut showcase hero
│   │   │   ├── TheCutIllustration.jsx   # Timeline & 9:16 short preview container
│   │   │   ├── WaveformTimeline.jsx     # 120-bar algorithmic audio waveform & sweeping playhead
│   │   │   ├── ShortsPreview.jsx        # 9:16 vertical shorts with face tracking circle
│   │   │   ├── StepsSection.jsx         # 3-step workflow
│   │   │   ├── AudienceSection.jsx      # Audience category breakdown
│   │   │   └── WaitlistForm.jsx         # Early-access waitlist signup form
│   │   └── consultancy/
│   │       ├── ConsultancyReel.jsx      # Historical client work highlights
│   │       ├── CriteriaList.jsx         # Project selection criteria
│   │       └── ProjectProposalForm.jsx  # Client collaboration proposal form
│   └── views/
│       ├── HomeView.jsx                 # Home view
│       ├── ProductsView.jsx             # Products catalog & demo section
│       ├── ReelcutView.jsx              # Reelcut product landing page
│       └── ConsultancyView.jsx          # Consultancy page & proposal section
```

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: Vanilla CSS with custom properties & token architecture
- **Typography**: Google Fonts (*Syne*, *IBM Plex Sans*, *IBM Plex Mono*)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/Admin-Manthan/ManthanlabsAI_website.git
cd ManthanlabsAI_website

# Install dependencies
npm install
```

### Development Server

Start the local Vite development server:

```bash
npm run dev
```

Visit `http://localhost:5173` (or the port indicated in your terminal).

### Linting

Run Oxlint to check code quality:

```bash
npm run lint
```

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🧩 Adding New Products or Content

### Adding a Product
Open `src/data/productsData.js` and add an object to `videoProducts` or `languageProducts`:

```javascript
{
  id: "my-model",
  title: "Model Name",
  status: "dev", // 'exp' | 'dev' | 'launch'
  statusLabel: "In development",
  description: "Description of what this experiment accomplishes.",
  uses: ["Tag 1", "Tag 2"],
  link: "#optional-link",
  linkLabel: "Learn more",
}
```

### Updating Homepage Content
Edit `src/data/contentData.js` to customize:
- `kindsOfWork`: Cards describing areas of research
- `journeyStops`: Milestones on the timeline
- `reelcutSteps`: Step-by-step product workflow
- `builtForList`: Target audience cards
- `consultancyCriteria`: Qualifications for client collaborations

---

## 🎨 Design Tokens

Defined in `src/index.css`:

| Token | Value | Purpose |
| :--- | :--- | :--- |
| `--ink` | `#06090E` | Main page background |
| `--bench` | `#0B1118` | Raised card surface background |
| `--line` | `#1A2531` | Hairline borders & dividers |
| `--text` | `#E4ECF2` | Primary typography |
| `--mute` | `#8494A6` | Secondary / muted text |
| `--cyan` | `#3ED6F0` | Primary accent & active status |
| `--cyan-glow` | `rgba(62, 214, 240, 0.55)` | Hover glow & radiation effect |

---

## 📄 License

© 2026 Manthan Labs. All rights reserved.
