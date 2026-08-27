# DevPath — Programming Learning Roadmap

DevPath is a static, interactive learning roadmap designed to make a self-taught programming path easier to follow.

The roadmap follows this general progression:

**Computer Science → Linux → Algorithms & Data Structures → Web Fundamentals → Backend Roadmap → Java → Spring Boot + SQL → Git/GitHub + Docker**

## Features

- Fully English interface
- Interactive roadmap with per-topic checklists
- Overall and per-stage progress tracking
- Progress saved with `localStorage`
- “Continue where I left off” shortcut
- Filter roadmap by all / to do / completed
- Curated study resources
- Project milestones for hands-on practice
- Dark and light themes
- Responsive layout
- No framework, account, database or build step
- Ready for GitHub Pages

## Run locally

You can open `index.html` directly or run a local HTTP server.

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Add these files to the repository.
3. Push them to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select `main` and `/ (root)`.
7. Save.

## Project structure

```text
dev-roadmap/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Notes

Progress is stored only in the visitor's browser. Clearing browser storage or opening the site on a different device will not sync progress.
