# Replit Refactor Plan - Steps to Complete

## 1. File Deletions (Platform-specific)
- [ ] Delete: `.replit`, `replit.md`, `manohar18-me.conf`
- [ ] Delete dir: `config/` (dev/prod configs → standardize to local JSON)
- [ ] Delete: `Dockerfile`

## 2. package.json Updates
- [ ] Update "start" script: Standard webpack-dev-server (remove fuser/Replit port kill)
- [ ] Add "dev": "npm start"
- [ ] Add "serve": "serve docs -s -l 3000" for static preview

## 3. Services Simplification
- [ ] Edit `projects.service.js`, `posts.service.js`: Use relative /assets/json/ paths directly (remove CONFIG dependency)

## 4. webpack.config.js Cleanups
- [ ] Remove Replit devServer: host '0.0.0.0', disableHostCheck
- [ ] Keep core config intact

## 5. Docs & Git
- [ ] Update README.md: Remove Replit notes
- [ ] git add/commit/push all

## Follow-up
- Test `npm install && npm start` works
- Build `npm run build` → docs/ static site
- Ready for Vercel/Netlify/GitHub Pages

**Status: Plan ready for execution.**

