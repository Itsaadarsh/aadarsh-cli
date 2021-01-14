require('@babel/register');
const showBanner = require('node-banner');

(async () => {
  await showBanner('Aadarsh', 'Modern Full Stack Developer | System Design / Open Source Enthusiast');
  require('./cli');
})();
