const fs = require('fs');
const strip = s => (s || '').replace(/^["']|["']$/g, '').trim();
fs.writeFileSync('config.js', `window.CONFIG = {
  HERE_API_KEY:   ${JSON.stringify(strip(process.env.HERE_API_KEY))},
  GOOGLE_API_KEY: ${JSON.stringify(strip(process.env.GOOGLE_API_KEY))},
  TOMTOM_API_KEY: ${JSON.stringify(strip(process.env.TOMTOM_API_KEY))},
};`);
