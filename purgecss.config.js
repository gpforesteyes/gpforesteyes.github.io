module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Language switcher styles target [data-lang] applied dynamically by JS,
  // so we explicitly preserve them from PurgeCSS removal.
  safelist: {
    standard: [/^lang-/, "toggle-container"],
    greedy: [/data-lang/],
  },
};
