module.exports = {
  globDirectory: ".",
  globPatterns: ["**/*.{png,xml,ico,html,gif,jpg,svg,json,txt,webmanifest,js}"],
  globIgnores: ["**/screenshot.png", "node_modules/**", "package*.json"],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: "sw.js",
};

