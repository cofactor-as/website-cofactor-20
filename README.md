# Cofactor website showcase

Static HTML, CSS, JavaScript and SVG website. No package installation or build is required.

## Local preview

```sh
python3 -m http.server 8090 --bind 127.0.0.1
```

Open http://localhost:8090.

## First GitHub upload

The repository is https://github.com/cofactor-as/website-cofactor-20.
Run these commands yourself from the website directory:

```sh
cd /Users/alse/frigi-apps/website20
git init -b main
git remote add origin https://github.com/cofactor-as/website-cofactor-20.git
git config user.name "AlexanderSeverinsen"
git config user.email "alexander.severinsen@gmail.com"
git add index.html style.css app.js i18n.js assets .github .gitignore AGENTS.md README.md
git commit -m "Add Cofactor website showcase"
git push -u origin main
```

These commands assume the GitHub repository is still empty and the local folder has not already been initialized. The author matches the user's Git identity at setup time. GitHub authentication is separate from commit authorship; use your existing Git credential manager or SSH setup. Never put access tokens in project files.

## Enable GitHub Pages

1. Open https://github.com/cofactor-as/website-cofactor-20/settings/pages.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open the repository's **Actions** tab, select **Deploy website to GitHub Pages**, and choose **Run workflow** on `main`.
4. Wait for the workflow to succeed. The deploy job displays the published URL.

Expected URL:

https://cofactor-as.github.io/website-cofactor-20/

If the first automatic run failed before Pages was enabled, run the workflow again after selecting GitHub Actions. Future pushes to `main` redeploy automatically.

The workflow packages only `index.html`, `style.css`, `app.js`, `i18n.js` and `assets/`. Repository instructions and setup documentation are not part of the published website. No custom domain or production site changes are configured.

## Preview behavior

- Norwegian is the default; the header switches to English without reloading.
- Contact submissions are a preview only. Nothing is sent or stored.
- Chart data and dispatch are illustrative, not a live optimizer.
- Figtree loads from Google Fonts; the remaining website assets are local.
