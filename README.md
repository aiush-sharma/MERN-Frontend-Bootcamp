# MERN Stack React — Code for Change (2026)

This repository contains the source code and lessons for the "Code for Change" MERN Stack React course (2026). The course focuses on modern React with Vite and practical MERN concepts to build real-world apps.

**What This Course Covers:**

- **React (2026)**: modern patterns, hooks, component design, state management basics
- **Vite**: fast dev tooling and build setup
- **MERN fundamentals**: how React integrates with Express, MongoDB, and Node.js (server code examples and exercises)
- **APIs & Data fetching**: Axios, fetch patterns, and handling async state
- **Project structure & deployment**: simple production build and deployment notes

**Prerequisites:**

- Node.js 16+ (recommended) and npm or yarn
- Basic JavaScript and HTML/CSS knowledge

**Quick Start**

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:(edited)

```bash
npm run start
```

3. Open the app at the address shown (usually `http://localhost:5173`).

**Available NPM Scripts:**

- `start` — start Vite dev server
- `build` — produce a production build
- `preview` — locally preview the production build

**Project Structure (key files):**

- [index.html](index.html) — app entry HTML
- [vite.config.js](vite.config.js) — Vite configuration
- [src/main.jsx](src/main.jsx) — React app bootstrap
- [src/App.jsx](src/App.jsx) — top-level app component

- [src/Components/AxiosPractice.jsx](src/Components/AxiosPractice.jsx) — Axios/API practice
- [src/Pages/Home.jsx](src/Pages/Home.jsx) — example page
- [src/shared/Navbar.jsx](src/shared/Navbar.jsx) — shared UI component

If you want to explore lesson code quickly, open the linked files above.

**How to Use This Repo for Learning**

- Follow the examples inside `src/` and run the dev server to see changes live.
- Experiment: modify components, add routes, or connect a simple Express + MongoDB backend.
- Try converting a component to use context or a small global state for practice.

**Contributing**

- Improvements, fixes, and lesson enhancements are welcome. Please open issues or PRs.
- Keep changes focused per PR (one lesson / one feature / one fix).

**Contact / Feedback**

- For questions or feedback, open an issue in this repo or contact the course maintainers.
