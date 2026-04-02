# Manohar Jangid Portfolio

A personal portfolio website for Manohar Jangid, a Software Test Engineer. Built as a React single-page application (SPA).

## Tech Stack

- **Frontend:** React 16 with Redux state management
- **Routing:** React Router v5
- **Styling:** SCSS (Sass) with PostCSS/Autoprefixer
- **Bundler:** Webpack 4 with Babel 7
- **Dev Server:** webpack-dev-server

## Project Structure

```
src/
  index.js          - App entry point
  index.html        - HTML template
  js/
    components/     - React components (About, Posts, Projects, Contact)
    hocs/           - Higher-Order Components (with-preloader)
    services/       - Data fetching (posts, projects)
    store/          - Redux store, actions, reducers
    utils/          - Helper utilities
  scss/             - Global styles, variables, mixins
  assets/           - Images, icons, static JSON data
config/
  development.json  - Dev config (API endpoints)
  production.json   - Prod config (API endpoints)
docs/               - Build output (used for GitHub Pages / static deployment)
```

## Development

- **Start dev server:** `npm start` (runs on port 5000)
- **Build for production:** `npm run build`
- Data is served from local JSON files in `src/assets/json/`

## Replit Setup Notes

- Dev server runs on `0.0.0.0:5000` with `disableHostCheck: true` for Replit proxy compatibility
- `chokidar@3` installed explicitly to fix webpack file-watching on this environment
- Deployed as a static site (build output in `docs/`)
