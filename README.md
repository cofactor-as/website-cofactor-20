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

The workflow packages the website pages, the Hamar 2026 Dynagrid presentation, their CSS and JavaScript files, and `assets/`. The unfinished `klimamonitor.html` page is not linked or published. Repository instructions and setup documentation are not part of the published website. No custom domain or production site changes are configured.

## Preview behavior

- Norwegian is the default; the header switches to English without reloading.
- Contact enquiries are submitted to Formspree at `https://formspree.io/f/maeodrzd`, including from local previews. The form uses AJAX with a native POST fallback; no API key is needed.
- Configure the receiving inbox and spam protection in the Formspree dashboard. After deployment, send a real test enquiry and confirm receipt in both Formspree and the inbox. Local simulated checks do not verify delivery.
- Chart data and dispatch are illustrative, not a live optimizer.
- Figtree loads from Google Fonts; the remaining website assets are local.

## Privacy information

`personvern.html` provides concise Norwegian and English privacy information, with contact at post@cofactor.no. Retention is based on the need to handle and follow up an enquiry. The earlier suggested 12-month and 30-day limits are not adopted promises or statutory requirements.

Practical follow-up for Cofactor:

- Regularly review enquiries and delete email, Formspree submissions and working copies when follow-up is no longer needed. Document any necessary project, legal-retention or legal-claim exception. Confirm how providers handle deletion and backups; an archive visibility limit is not proof of deletion.
- Identify the receiving email provider, limit access and enable two-factor authentication. Check applicable data-processing agreements and international-transfer safeguards for Formspree and other providers. No account settings or executed agreements have been verified by this code change.
- Document the legitimate-interest assessment for enquiries. Use the contract basis only when the individual personally requests steps towards a contract with them.
- Handle rights requests through post@cofactor.no and normally respond within one month. Keep the notice aligned with actual routines and service changes.

Reference guidance: https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/om-behandlingsgrunnlag/ and https://formspree.io/security/.

## Social-sharing preview

The homepage includes Open Graph and large-image card metadata. The preview uses
`assets/cofactor-social-preview.png` (1200 × 627), with editable artwork at
`linkedin/social-preview.svg`. Rebuild with `python3 linkedin/build-social-preview.py`
(requires Figtree and rsvg-convert). The deployment already includes the PNG through assets/.

Share metadata uses the current GitHub Pages project URL and Norwegian copy.
If moving to a custom domain, update the absolute `og:url`, `og:image`, and
`twitter:image` URLs. The browser language switch does not change this default
sharing image. After deploying, use https://www.linkedin.com/post-inspector/
to check and refresh the preview. Localhost cannot be fetched by LinkedIn.

## Dynagrid customer presentation

Open `dynagrid-presentasjon-hamar-2026.html` directly (no homepage navigation link). Eight slides target 13 minutes plus 2 minutes for discussion: introduction 1 min, team 1 min, example challenge 1 min, interactive energy demo 3 min, optimisation story 2 min, product overview 2 min, process 2 min, closing 1 min. The product overview uses four simplified interface illustrations for load analysis, new demand, the measure register and measure optimisation. The illustrations contain no customer data.

Use previous/next, the slide picker, or arrow/PageUp/PageDown keys when focus is outside interactive controls. Home/End jump to the first/last slide. Fullscreen is available where supported. The language selector switches Norwegian/English. Direct slide links use `#slide-4`, for example. On smaller screens the slide can scroll; the interactive demo remains available in the presentation.

Slide 5 explains automated data collection, shared peaks, individual measures and coordinated optimisation. Real screenshots and a documented customer scenario can be added later. The energy demo is illustrative and uses a snapshot of the homepage model in `presentation-demo.js`; it is not connected to Dynagrid or customer data. All five process steps are shown together on slide 6.

The workflow publishes the presentation files alongside the website. An unlinked page is still public when deployed; `noindex` is not access control.
