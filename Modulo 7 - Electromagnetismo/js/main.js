// main.js — Render dinámico del índice Cantidades Físicas

function iconSVG(name){
  const p = 'width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  switch(name){
    case 'vector': return `<svg ${p}><path d="M5 19L19 5"/><path d="M9 5h10v10"/></svg>`;
    case 'units': return `<svg ${p}><circle cx="9" cy="9" r="4"/><circle cx="19" cy="19" r="4"/><path d="M13 13l4 4"/><path d="M5 9h8"/></svg>`;
    case 'formula': return `<svg ${p}><path d="M4 20h5l6-16h5"/><path d="M8 12h8"/><path d="M16 20l4-4"/></svg>`;
    case 'energia': return `<svg ${p}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`;
    case 'torque': return `<svg ${p}><circle cx="14" cy="14" r="9"/><path d="M14 5v9l6 3"/></svg>`;
    case 'masa': return `<svg ${p}><path d="M4 20h16"/><path d="M6 20l3-12h6l3 12"/><circle cx="12" cy="6" r="3"/></svg>`;
    case 'longitud': return `<svg ${p}><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    case 'tiempo': return `<svg ${p}><circle cx="14" cy="14" r="10"/><path d="M14 8v6l4 2"/></svg>`;
    case 'cantidad': return `<svg ${p}><circle cx="8" cy="14" r="4"/><circle cx="18" cy="14" r="4"/><path d="M8 10V6h8v4"/></svg>`;
    case 'precision': return `<svg ${p}><circle cx="14" cy="14" r="9"/><path d="M8 14h12"/><path d="M14 8v12"/></svg>`;
    case 'friccion': return `<svg ${p}><path d="M5 19h14"/><path d="M7 15l3-8 4 8 3-6"/></svg>`; // Representación estilizada de perfiles de fuerza
    case 'tension': return `<svg ${p}><path d="M4 14h20"/><path d="M10 10l4 4-4 4"/><path d="M18 10l-4 4 4 4"/></svg>`; // Flechas opuestas
    case 'normal': return `<svg ${p}><path d="M6 20V8h12v12"/><path d="M4 20h16"/><path d="M12 8V4"/></svg>`; // Soporte + vector normal
    case 'hooke': return `<svg ${p}><path d="M6 12c0-4 6-4 6 0s6 4 6 0"/><path d="M6 16c0-4 6-4 6 0s6 4 6 0"/></svg>`; // Resorte doble
    case 'drag': return `<svg ${p}><path d="M5 12h8"/><path d="M13 8l6 4-6 4"/><path d="M5 8h4"/><path d="M5 16h4"/></svg>`; // Flecha resistencia
    case 'momentum': return `<svg ${p}><path d="M4 12h12"/><path d="M12 8l4 4-4 4"/><circle cx="6" cy="12" r="3"/></svg>`; // Flecha p con masa
    case 'impulso': return `<svg ${p}><path d="M4 18v-6a4 4 0 0 1 4-4h12"/><path d="M14 8l6 4-6 4"/></svg>`; // Flecha fuerza‑tiempo
    case 'colision': return `<svg ${p}><circle cx="9" cy="12" r="3"/><circle cx="19" cy="12" r="3"/><path d="M12 12h5"/></svg>`; // dos bolas chocando
    case 'com': return `<svg ${p}><circle cx="14" cy="14" r="9"/><circle cx="14" cy="14" r="3"/></svg>`; // CM punto dentro de disco
    case 'pendulo': return `<svg ${p}><circle cx="14" cy="17" r="3"/><path d="M14 14V6l4-2"/></svg>`; // esferas y cuerda
    case 'gravity': return `<svg ${p}><circle cx="14" cy="14" r="9"/><path d="M14 8v6l3 3"/></svg>`; // línea radial g
    case 'campo': return `<svg ${p}><circle cx="14" cy="14" r="2"/><path d="M14 2v4"/><path d="M14 22v-4"/><path d="M2 14h4"/><path d="M22 14h-4"/></svg>`; // líneas de campo
    case 'potencial': return `<svg ${p}><path d="M4 14a10 10 0 0 1 20 0"/><path d="M4 14h20"/></svg>`; // curva potencial
    case 'kepler': return `<svg ${p}><ellipse cx="14" cy="14" rx="9" ry="6"/><circle cx="18" cy="14" r="2"/></svg>`; // órbita elíptica
    case 'orbita': return `<svg ${p}><circle cx="14" cy="14" r="9"/><circle cx="23" cy="14" r="1"/><path d="M14 14L23 14"/></svg>`; // satélite escape
    case 'mixto': return `<svg ${p}><path d="M5 19h14"/><circle cx="9" cy="9" r="3"/><circle cx="19" cy="9" r="3"/></svg>`;
    case 'carga': return `<svg ${p}><circle cx="14" cy="14" r="9"/><path d="M14 10v8"/><path d="M10 14h8"/></svg>`; // símbolo + dentro de círculo
    case 'campoE': return `<svg ${p}><circle cx="14" cy="14" r="2"/><path d="M14 2v4"/><path d="M14 22v-4"/><path d="M2 14h4"/><path d="M22 14h-4"/></svg>`;
    case 'potencialE': return `<svg ${p}><path d="M4 14a10 10 0 0 1 20 0"/><path d="M4 14h20"/><path d="M14 4v20"/></svg>`;
    case 'gauss': return `<svg ${p}><rect x="5" y="5" width="18" height="18" rx="3"/><path d="M5 14h18"/><path d="M14 5v18"/></svg>`;
    case 'capacitor': return `<svg ${p}><path d="M8 4v16"/><path d="M20 4v16"/><path d="M4 10h4"/><path d="M20 10h4"/><path d="M4 14h4"/><path d="M20 14h4"/></svg>`;
    case 'corriente': return `<svg ${p}><path d="M4 14h16"/><path d="M18 10l4 4-4 4"/></svg>`;
    case 'resistencia': return `<svg ${p}><path d="M4 14h4l3-6 6 12 3-6h4"/></svg>`;
    case 'circuito': return `<svg ${p}><circle cx="7" cy="14" r="2"/><circle cx="21" cy="14" r="2"/><path d="M9 14h10"/></svg>`;
    case 'potenciaE': return `<svg ${p}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`; // reuse energia icon
    case 'magnetico': return `<svg ${p}><path d="M6 4v8a8 8 0 0 0 16 0V4"/><path d="M6 12h16"/></svg>`;
    case 'induccion': return `<svg ${p}><rect x="5" y="5" width="18" height="18" rx="3"/><path d="M12 5v18"/><path d="M22 12l-4-4"/><path d="M22 12l-4 4"/></svg>`;
    case 'mixto': return `<svg ${p}><path d="M5 19h14"/><circle cx="9" cy="9" r="3"/><circle cx="19" cy="9" r="3"/></svg>`;
    default: return `<svg ${p}><circle cx="14" cy="14" r="10"/></svg>`;
  }
}

let currentTag = "Todos";

function buildChips(){
  const chipWrap = document.getElementById('chips');
  const tags = ["Todos", ...new Set(exams.map(e => e.tag))];
  chipWrap.innerHTML = "";
  tags.forEach(tag=>{
    const el = document.createElement('button');
    el.className = 'chip' + (tag === currentTag ? ' chip--active':'');
    el.textContent = tag;
    el.setAttribute('data-tag', tag);
    el.addEventListener('click',()=>{
      currentTag = tag;
      document.querySelectorAll('.chip').forEach(c=>c.classList.remove('chip--active'));
      el.classList.add('chip--active');
      render();
    });
    chipWrap.appendChild(el);
  });
}

function render(){
  const q = document.getElementById('search').value.trim().toLowerCase();
  const grid = document.getElementById('grid');
  const filtered = exams.filter(ex =>
    (currentTag === "Todos" || ex.tag === currentTag) &&
    (ex.titulo.toLowerCase().includes(q) || ex.descripcion.toLowerCase().includes(q))
  );
  grid.innerHTML = "";
  if(!filtered.length){
    grid.innerHTML = `<div class="empty">No se encontraron exámenes con esos filtros.</div>`;
  } else {
    filtered.forEach((ex,i)=>{
      const a = document.createElement('a');
      // encodeURIComponent para soportar espacios, acentos, paréntesis, símbolos
      a.href = `./Examenes/${encodeURIComponent(ex.file)}`;
      a.className = 'card fade-in';
      a.style.animationDelay = (i * 0.05)+'s';
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

const themeBtn = document.getElementById('toggleTheme');
function applyTheme(mode){
  document.documentElement.setAttribute('data-theme', mode);
  themeBtn.textContent = (mode === 'light' ? '🌙 Modo' : '☀️ Modo');
  localStorage.setItem('themeCF', mode);
}
themeBtn.addEventListener('click',()=>{
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'light' ? 'dark' : 'light');
});
(function initTheme(){
  const saved = localStorage.getItem('themeCF');
  if(saved) applyTheme(saved);
})();

document.getElementById('search').addEventListener('input', render);

buildChips();
render();
