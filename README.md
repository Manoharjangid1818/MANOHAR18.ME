# Manohar Rajotiya Portfolio

Personal portfolio website for Manohar Rajotiya, Software Test Engineer.

## Tech Stack

- React 16 + Redux
- React Router v5
- SCSS + PostCSS
- Webpack 4 + Babel 7

## Local Development

1. `npm install`
2. `npm start` → http://localhost:3000
3. `npm run build` → static build in `docs/`
4. `npm run serve` → preview build on port 3000

## Deployment

- **GitHub Pages**: Push `docs/` branch or use GitHub Actions
- **Vercel/Netlify**: Connect repo, set build `npm run build`, output `docs`
- Static-friendly SPA with client-side routing.

## Project Structure

```
src/
├── index.js       - Entry point
├── js/
│   ├── components/ - Routes (About, Projects, Posts, Contact)
│   ├── store/      - Redux
│   └── services/   - Data fetchers (static JSON)
├── scss/           - Styles
└── assets/         - JSON data, icons/images
docs/                 - Build output
```

No external APIs - fully static/self-contained.

