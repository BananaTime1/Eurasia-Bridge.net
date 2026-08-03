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

## 3. Live regional news with photos  ✅ code ready
The homepage "News" section shows the latest Iran / Kazakhstan / CIS corridor
headlines **with a photo for each**, and refreshes itself automatically (re-checks
every few minutes while the page is open). To switch it on:

1. Get a **free** API key at **https://gnews.io** (sign up → copy your key).
2. Open `google-sheet.gs` and paste it in:  `var GNEWS_API_KEY = "your-key";`
   (The key lives here, on Google's servers — never in the website — so no one can
   steal it from your page source.)
3. Make sure `NEWS_ENDPOINT` in `app.js` is set to the **same** Web App URL as the
   form (step 1 above). One deployment powers the form, the listings, and the news.

That's it. Until a key is set, the section falls back to a free Google-News headline
feed (no photos). Note: live news needs the **hosted** site (https), not a local file.
GNews covers English and Russian; the Persian page shows the English feed.

## 4. Cargo listings + "Add cargo"  ✅ code ready
The Cargo page has an **"Add cargo"** button: anyone can submit a lot with photos,
weight, description, direction and origin. Nothing appears publicly until **you
approve it**, so there's no spam risk.

How it works once the Apps Script (section 1) is deployed and `LISTINGS_ENDPOINT`
in `app.js` is set to its Web App URL (same URL as the form):

1. A visitor fills the "Add cargo" form. Photos are shrunk in their browser and sent
   to your Apps Script, which saves them to a **"Eurasia Bridge Cargo"** folder in your
   Google Drive and adds a row to the **"Listings"** sheet tab with **Status = pending**.
2. **To publish a lot:** open the Listings tab and change its **Status** cell from
   `pending` to `approved`. It now shows on the site (the page refreshes the list on
   load). To hide one again, change Status back to anything else.
3. Columns are created automatically on the first submission:
   `Timestamp · Status · Dir · Name · Weight · Description · Origin · MOQ · Barter · Images · Lang`.

The demo/placeholder cargo has been removed, so the page shows a clean "no cargo yet"
message until your first approved lot.

**Getting notified:** if you set `NOTIFY_EMAIL` (section 1 / step 6), you also get an
email on every new cargo submission — with the details and a link straight to the sheet
so you can review and approve it. The same setting emails you on every enquiry from the
contact form. So one address = alerts for both inquiries and cargo posts.

---
Languages: RU is default; EN/FA via the switcher. Accent: amber `#E89A3C`.
Headline font Manrope, body Onest, Persian Vazirmatn.
