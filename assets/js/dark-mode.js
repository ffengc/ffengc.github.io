(function () {
  var TOGGLE_ID = 'dark-mode-toggle';
  var STORAGE_KEY = 'theme';
  var DARK = 'dark';
  var LIGHT = 'light';
  var ICON_DARK = '🌙';
  var ICON_LIGHT = '☀️';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.getElementById(TOGGLE_ID);
    if (btn) {
      btn.innerHTML = theme === DARK ? ICON_LIGHT : ICON_DARK;
      btn.title = theme === DARK ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || LIGHT;
    var next = current === DARK ? LIGHT : DARK;
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById(TOGGLE_ID);
    if (btn) {
      btn.addEventListener('click', toggleTheme);
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      });
      // Sync icon with current theme (set by the inline head script)
      var current = document.documentElement.getAttribute('data-theme') || LIGHT;
      applyTheme(current);
    }

    // Respond to OS-level theme changes if user hasn't set a manual preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? DARK : LIGHT);
      }
    });
  });
})();
