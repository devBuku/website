const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

function setTheme(theme) {
  root.dataset.theme = theme;
  toggle.textContent = theme === 'dark' ? 'Light theme' : 'Dark theme';
  toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  toggle.setAttribute('aria-pressed', String(theme === 'light'));
  root.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#171918' : '#f4f1ea');
}

setTheme(storedTheme || preferredTheme);
toggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', nextTheme);
  setTheme(nextTheme);
});
