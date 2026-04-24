// Highlight menu page
(function highlightMenu() {
  const path = window.location.pathname.split("/").pop();
  const menuLinks = document.querySelectorAll('.main-nav a');
  menuLinks.forEach(link => {
    if(path === "" && link.getAttribute("href").includes("index.html")) link.classList.add("active");
    else if (link.getAttribute("href") === path) link.classList.add("active");
  });
}());

// Mock: servizi array
const servizi = [
  { titolo: "Lezioni individuali", descr: "Percorsi personalizzati per ogni atleta, partendo da livello e obiettivi individuali. Metodo AFT e monitoraggio costante." },
  { titolo: "Lezioni di gruppo", descr: "Allenamenti collettivi per trarre il massimo dall’interazione: ritmo, transizioni e decision making." },
  { titolo: "Born to Fly — Portieri", descr: "Preparazione specifica per portieri: tecnica, situazioni reali e personalità in campo." },
  { titolo: "SpeedLab", descr: "Allenamenti per sviluppare velocità, biomeccanica della corsa e spinta muscolare." },
  { titolo: "RecoveryLab", descr: "Percorso post-infortunio seguito dal nostro fisioterapista, per un rientro in sicurezza." },
  { titolo: "Screening Atletico", descr: "Test fisici completi, valutazioni posture e performance, con report personalizzati." }
];
function renderServizi() {
  const serviziList = document.querySelector('.services-list');
  if(!serviziList) return;
  serviziList.innerHTML = servizi.map(s => `
    <div class="service-card">
      <h3>${s.titolo}</h3>
      <p>${s.descr}</p>
    </div>
  `).join('');
}

// Mock: staff array (puoi estendere con dati reali/foto)
const staff = [
  {
    nome: "Donato Rossi",
    ruolo: "Responsabile Tecnico",
    competenze: "UEFA B, Scienze Motorie",
    foto: "donato-rossi.jpg"
  },
  {
    nome: "Greta Verdi",
    ruolo: "Preparatore Atletico",
    competenze: "UEFA C, Scienze Motorie",
    foto: "greta-verdi.jpg"
  },
  {
    nome: "Luca Bianchi",
    ruolo: "Allenatore Portieri",
    competenze: "Allenatore portieri certificato, UEFA C",
    foto: "luca-bianchi.jpg"
  }
];
function renderStaff() {
  const staffList = document.querySelector('.staff-list');
  if(!staffList) return;
  staffList.innerHTML = staff.map(p =>
    `<div class="staff-card">
      <img src="${p.foto}" alt="Foto di ${p.nome}">
      <div class="staff-name">${p.nome}</div>
      <div class="staff-role">${p.ruolo}</div>
      <div class="staff-skills">${p.competenze}</div>
    </div>`
  ).join('');
}

// Inizializzazione pagine dinamiche
document.addEventListener('DOMContentLoaded', function() {
  renderServizi();
  renderStaff();
});
