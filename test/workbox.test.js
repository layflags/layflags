const workboxBuild = require('workbox-build');
const config = require('../workbox-config.js');

(async () => {
  try {
    await workboxBuild.generateSW(config);
    console.log('generateSW completed successfully');
  } catch (err) {
    console.error('generateSW failed', err);
    process.exitCode = 1;
  }
})();
