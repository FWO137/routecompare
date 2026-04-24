const fs = require('fs');
fs.writeFileSync('config.js', `const CONFIG = {
  HERE_API_KEY:   "${process.env.HERE_API_KEY   || ''}",
  GOOGLE_API_KEY: "${process.env.GOOGLE_API_KEY || ''}",
  TOMTOM_API_KEY: "${process.env.TOMTOM_API_KEY || ''}",
};`);
