(function () {
  const savedTheme = localStorage.getItem('siteTheme') || 'dark';
  document.documentElement.dataset.theme = savedTheme;

  const themeStyle = document.createElement('style');
  themeStyle.textContent = `
    html[data-theme="light"] {
      --itau-orange: #ff6200 !important;
      --itau-orange-hover: #e05500 !important;
      --itau-orange-light: #fff0e8 !important;
      --itau-dark: #1a1a1a !important;
      --itau-gray: #f5f5f5 !important;
      --itau-gray-light: #fafafa !important;
      --itau-border: #e8e8e8 !important;
      --itau-muted: #6b6b6b !important;
      --itau-white: #ffffff !important;
    }

    html[data-theme="dark"] {
      --itau-orange: #ff6200 !important;
      --itau-orange-hover: #e05500 !important;
      --itau-orange-light: #321900 !important;
      --itau-dark: #ffffff !important;
      --itau-gray: #000000 !important;
      --itau-gray-light: #171717 !important;
      --itau-border: #333333 !important;
      --itau-muted: #b5b5b5 !important;
      --itau-white: #000000 !important;
    }
  `;
  document.head.appendChild(themeStyle);

  function updateTheme(theme) {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('siteTheme', nextTheme);

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.checked = nextTheme === 'light';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    updateTheme(savedTheme);
    themeToggle.addEventListener('change', function () {
      updateTheme(themeToggle.checked ? 'light' : 'dark');
    });
  });
})();
