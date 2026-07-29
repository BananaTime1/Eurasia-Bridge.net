# Eurasia Bridge — setup & integrations

Static multilingual (RU/EN/FA) site. No build step — just files. Below is how to
turn on the parts that need *your* accounts.

## 1. Receiving enquiries in Google Sheets  ✅ code ready
The contact form already collects Company, Email, Origin, Destination, Cargo, Message.
To have every submission land in a sheet automatically:

1. Follow the steps at the top of **`google-sheet.gs`** (create a Sheet → paste the
   script → deploy as a Web App → copy the URL).
2. Paste that URL into `app.js`:  `const SHEET_ENDPOINT = "https://script.google.com/…";`
3. Re-deploy the site.

That's it — no server needed. (If you prefer Excel/Microsoft 365 instead of Google,
the same pattern works with a Power Automate "When an HTTP request is received" flow;
ask and I'll give you that version.)

## 2. GitHub repository  ✅ repo initialised locally
This folder is now a git repo with a first commit. To put it on GitHub:

```bash
# create the repo on github.com first (e.g. "eurasia-bridge"), then:
git remote add origin https://github.com/<your-username>/eurasia-bridge.git
git branch -M main
git push -u origin main
```
(You'll be asked to sign in to GitHub the first time.)

Then you can host it **free** with **GitHub Pages**: repo → Settings → Pages →
Source: `main` / root. Your site goes live at `https://<username>.github.io/eurasia-bridge/`.
Netlify also works — connect the repo and it redeploys on every push.

## 3. Live regional news  🟡 next build
Plan: a "News" section that pulls the latest headlines about Iran, Kazakhstan and the
CIS trade corridor, auto-updating. Easiest reliable approach is free Google News RSS
through a CORS proxy — note this only works on the **hosted** site (https), not a local
file://. If you want a paid, higher-limit source (NewsAPI/GNews) I'll wire it to a key
in `app.js` (`NEWS_KEY`). I'll build this next.

## 4. Cargo listings  🟡 next build
The listings page (add/browse cargo offered on the corridor) is the next feature.
Decision needed: should listings be **hard-coded by us** (simplest), or **editable by
you from the same Google Sheet** (a "Listings" tab the site reads live)? The second is
nicer for adding cargo yourself — tell me which and I'll build it.

---
Languages: RU is default; EN/FA via the switcher. Accent: amber `#E89A3C`.
Headline font Manrope, body Onest, Persian Vazirmatn.
