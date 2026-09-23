function detectLang() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get('lang');
  if (q && LANGS.includes(q)) return q;
  try {
    const saved = localStorage.getItem('legal-lang');
    if (saved && LANGS.includes(saved)) return saved;
  } catch (e) {}
  const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return LANGS.includes(nav) ? nav : 'en';
}

function setLang(lang) {
  try {
    localStorage.setItem('legal-lang', lang);
  } catch (e) {}
  render(lang);
}

function renderSwitch(lang) {
  const el = document.getElementById('lang-switch');
  el.innerHTML = '';
  LANGS.forEach((l) => {
    const btn = document.createElement('button');
    btn.textContent = LANG_NAMES[l];
    if (l === lang) btn.classList.add('active');
    btn.addEventListener('click', () => setLang(l));
    el.appendChild(btn);
  });
}

function renderBlock(block, lang) {
  if (block.type === 'p') {
    const p = document.createElement('p');
    p.textContent = tr(block.text, lang);
    return p;
  }
  if (block.type === 'ul') {
    const ul = document.createElement('ul');
    block.items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = tr(item, lang);
      ul.appendChild(li);
    });
    return ul;
  }
  return document.createTextNode('');
}

function render(lang) {
  document.documentElement.lang = lang;
  document.title = tr(DOC.title, lang) + ' — Culinary Randomizer';

  document.getElementById('doc-icon').textContent = DOC.icon;
  document.getElementById('doc-title').textContent = tr(DOC.title, lang);

  renderSwitch(lang);

  const card = document.getElementById('card');
  card.innerHTML = '';
  DOC.sections.forEach((section) => {
    const h2 = document.createElement('h2');
    h2.textContent = tr(section.title, lang);
    card.appendChild(h2);
    section.blocks.forEach((block) => {
      card.appendChild(renderBlock(block, lang));
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  render(detectLang());
});
