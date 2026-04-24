# RouteCompare – API Key Setup

You need three API keys to use RouteCompare. All three have free tiers sufficient for personal use. After obtaining each key, paste it into `config.js`.

---

## 1. HERE Maps API Key

**Free tier:** 1,000 requests/day

1. Go to https://platform.here.com/sign-up and create a free account.
2. After logging in, go to **Projects** → **Create Project** (give it any name).
3. Inside your project, click **REST** under "Generate credentials".
4. Click **Create API Key** — copy the key that appears.
5. Paste it as `HERE_API_KEY` in `config.js`.

---

## 2. Google Maps API Key

**Free tier:** $200 credit/month (~40,000 route requests)

1. Go to https://console.cloud.google.com and sign in.
2. Create a new project (or select an existing one).
3. In the left menu go to **APIs & Services** → **Library**.
4. Search for and enable both:
   - **Directions API**
   - **Geocoding API**
5. Go to **APIs & Services** → **Credentials** → **+ Create Credentials** → **API Key**.
6. Copy the key. For security, click **Restrict Key** and limit it to your domain.
7. Paste it as `GOOGLE_API_KEY` in `config.js`.

> **Note:** Google requires billing to be enabled on the project, but you won't be charged until you exceed the $200 free credit.

---

## 3. TomTom API Key

**Free tier:** 2,500 requests/day

1. Go to https://developer.tomtom.com/user/register and create a free account.
2. After logging in, go to **My Apps** → **Add new app**.
3. Give the app a name and enable the **Routing API** product.
4. Copy the generated API key.
5. Paste it as `TOMTOM_API_KEY` in `config.js`.

---

## Final Step

Open `config.js` in a text editor and replace the placeholder values:

```js
const CONFIG = {
  HERE_API_KEY:   "paste-your-here-key-here",
  GOOGLE_API_KEY: "paste-your-google-key-here",
  TOMTOM_API_KEY: "paste-your-tomtom-key-here",
};
```

Then open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).

> **Tip:** For the geolocation feature to work, open the file via a local web server (e.g. `python3 -m http.server 8080` in the `routecompare/` folder) rather than directly as a `file://` URL, as some browsers block geolocation on file URLs.
