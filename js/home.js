const modules=[
  {folder:"Modulo 1 - Cantidades Fisicas",title:"Cantidades Físicas",desc:"Vectores, Operaciones, Cifras Significativas.",icon:"units",color:"#06B6D4"},
  {folder:"Modulo 2 - Cinemática",title:"Cinemática",desc:"Movimiento en 1D, 2D y circular.",icon:"tiempo",color:"#2563EB"},
  {folder:"Modulo 3 - Dinámica",title:"Dinámica",desc:"Leyes de Newton y fuerzas.",icon:"masa",color:"#DC2626"},
  {folder:"Modulo 4 - Energía Trabajo y Potencia",title:"Energía · Trabajo · Potencia",desc:"Teorema W–E y potencia mecánica.",icon:"energia",color:"#10B981"},
  {folder:"Modulo 5 - Momentum Lineal",title:"Momentum Lineal",desc:"Impulso, choques y C.M.",icon:"momentum",color:"#6366F1"},
  {folder:"Modulo 6 - Gravitación",title:"Gravitación",desc:"Gravitación Universal, Kepler y órbitas.",icon:"gravity",color:"#1D4ED8"},
  {folder:"Modulo 7 - Electromagnetismo",title:"Electromagnetismo",desc:"Electrostática, Electrodinámica, Magnetismo y circuitos.",icon:"carga",color:"#0EA5E9"},
  {folder:"Modulo 8 - Materia",title:"Materia",desc:"Estados, Fluidos, Temperatura, Calor",icon:"materia",color:"#F59E0B"}
];

/* ---------- Icon factory ---------- */
function iconSVG(name,c){const p=`width=\"44\" height=\"44\" fill=\"none\" stroke=\"${c}\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"`;switch(name){case'units':return`<svg ${p}><circle cx="9" cy="9" r="4"/><circle cx="19" cy="19" r="4"/><path d="M13 13l4 4"/><path d="M5 9h8"/></svg>`;case'tiempo':return`<svg ${p}><circle cx="14" cy="14" r="10"/><path d="M14 8v6l4 2"/></svg>`;case'masa':return`<svg ${p}><path d="M4 20h16"/><path d="M6 20l3-12h6l3 12"/><circle cx="12" cy="6" r="3"/></svg>`;case'energia':return`<svg ${p}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`;case'momentum':return`<svg ${p}><path d="M4 12h12"/><path d="M12 8l4 4-4 4"/><circle cx="6" cy="12" r="3"/></svg>`;case'gravity':return`<svg ${p}><circle cx="14" cy="14" r="9"/><path d="M14 8v6l3 3"/></svg>`;case'carga':return`<svg ${p}><circle cx="14" cy="14" r="9"/><path d="M14 10v8"/><path d="M10 14h8"/></svg>`;case'materia':return`<svg ${p}><path d="M4 18v-4a6 6 0 1 1 12 0v4"/><circle cx="10" cy="18" r="4"/></svg>`;default:return`<svg ${p}><circle cx="14" cy="14" r="10"/></svg>`}}

/* ---------- Render cards ---------- */
function render(){const grid=document.getElementById('grid');modules.forEach(m=>{const a=document.createElement('a');a.href=`./${encodeURIComponent(m.folder)}/index.html`;a.className='card';a.style.setProperty('border-top',`6px solid ${m.color}`);a.innerHTML=`${iconSVG(m.icon,m.color)}<h2>${m.title}</h2><p>${m.desc}</p>`;grid.appendChild(a)})}

/* ---------- Theme toggle ---------- */
const btn=document.getElementById('toggleTheme');function setTheme(mode){document.documentElement.setAttribute('data-theme',mode);btn.textContent=mode==='light'?'🌙':'☀️';localStorage.setItem('dojoTheme',mode)}btn.addEventListener('click',()=>{setTheme(document.documentElement.getAttribute('data-theme')==='light'?'dark':'light')});(()=>{const saved=localStorage.getItem('dojoTheme');if(saved)setTheme(saved)})();

render();
