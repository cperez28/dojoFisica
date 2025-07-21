function iconSVG(name) {
  const p = 'width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  switch (name) {
    case 'materia':   return `<svg ${p}><path d="M4 18v-4a6 6 0 1 1 12 0v4"/><circle cx="10" cy="18" r="4"/></svg>`;
    case 'presion':   return `<svg ${p}><path d="M12 4v16"/><path d="M5 12h14"/></svg>`;
    case 'arqui':     return `<svg ${p}><path d="M4 12a8 8 0 0 0 16 0"/><path d="M4 12h16"/></svg>`;
    case 'pascal':    return `<svg ${p}><rect x="4" y="8" width="16" height="10" rx="2"/><path d="M12 8v-3"/></svg>`;
    case 'termometro':return `<svg ${p}><path d="M12 2v10"/><circle cx="12" cy="18" r="4"/></svg>`;
    case 'gas':       return `<svg ${p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`;
    case 'calor':     return `<svg ${p}><path d="M6 12h12"/><path d="M9 5l6 14"/></svg>`;
    default:          return `<svg ${p}><circle cx="14" cy="14" r="10"/></svg>`;
  }
}

let currentTag = 'Todos';

function buildChips() {
  const chipWrap = document.getElementById('chips');
  const tags = ['Todos', ...new Set(exams.map(e => e.tag))];
  chipWrap.innerHTML = '';
  tags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'chip' + (tag === currentTag ? ' chip--active' : '');
    btn.textContent = tag;
    btn.dataset.tag = tag;
    btn.addEventListener('click', () => {
      currentTag = tag;
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('chip--active'));
      btn.classList.add('chip--active');
      render();
    });
    chipWrap.appendChild(btn);
  });
}

function render() {
  const q = document.getElementById('search').value.trim().toLowerCase();
  const filtered = exams.filter(ex =>
    (currentTag === 'Todos' || ex.tag === currentTag) &&
    (ex.titulo.toLowerCase().includes(q) || ex.descripcion.toLowerCase().includes(q))
  );
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  if (!filtered.length) {
    grid.innerHTML = '<div class="empty">No se encontraron exámenes con esos filtros.</div>';
  } else {
    filtered.forEach((ex, i) => {
      const a = document.createElement('a');
      a.href = `./Examenes/${encodeURIComponent(ex.file)}`;
      a.className = 'card fade-in';
      a.style.animationDelay = (i * 0.05) + 's';
      a.setAttribute('aria-label', `Abrir examen ${ex.titulo}`);
      a.innerHTML = `
        <div class="card-header">
          <div class="icon-wrap">${iconSVG(ex.icon)}</div>
          <div>
            <h3>${ex.titulo}</h3>
            <div class="badges">
              <span class="badge level-${ex.nivel}">${ex.nivel}</span>
              <span class="badge">${ex.tag}</span>
            </div>
          </div>
        </div>
        <p>${ex.descripcion}</p>
        <div class="card-footer">
          <span>${ex.file.replace('.html','')}</span>
          <button class="open-btn" type="button" tabindex="-1">Abrir</button>
        </div>
      `;
      grid.appendChild(a);
    });
  }
  document.getElementById('count').textContent = `Mostrando ${filtered.length} de ${exams.length}`;
}

// Theme toggle
const themeBtn = document.getElementById('toggleTheme');
function applyTheme(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  themeBtn.textContent = mode === 'light' ? '🌙 Modo' : '☀️ Modo';
  localStorage.setItem('themeM', mode);
}
themeBtn.addEventListener('click', () => {
  const m = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  applyTheme(m);
});
(function() {
  const saved = localStorage.getItem('themeM');
  if (saved) applyTheme(saved);
})();

document.getElementById('search').addEventListener('input', render);

// Inicialización
buildChips();
render();
