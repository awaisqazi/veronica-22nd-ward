/**
 * Client-side EN/ES toggle. Elements carry data-i18n="dot.path" and get their
 * textContent swapped from en.json / es.json. Language persists in localStorage.
 */
import en from './en.json';
import es from './es.json';

const translations = { en, es };
const STORAGE_KEY = 'vt22-lang';

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function getCurrentLang() {
  try {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  } catch {
    return 'en';
  }
}

export function setLang(lang) {
  try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
  applyTranslations(lang);
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    const on = btn.dataset.langToggle === lang;
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-pressed', String(on));
  });
  document.dispatchEvent(new CustomEvent('vt22:langchange', { detail: { lang } }));
}

export function applyTranslations(lang) {
  const t = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = getNestedValue(t, el.dataset.i18n);
    if (value == null) return;
    if (el.tagName === 'INPUT' && el.type !== 'submit') el.placeholder = value;
    else if (el.dataset.i18nHtml !== undefined) el.innerHTML = value;
    else el.textContent = value;
  });
}

export function initI18n() {
  setLang(getCurrentLang());
  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.langToggle));
  });
}
