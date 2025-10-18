// ---------- Sample Data ----------
const players = [
  {name:"Eric Mwangi", position:"Forward", nationality:"Kenyan", goals:12, assists:5, appearances:20},
  {name:"James Otieno", position:"Midfielder", nationality:"Kenyan", goals:4, assists:10, appearances:21},
  {name:"David Okoth", position:"Defender", nationality:"Kenyan", goals:1, assists:2, appearances:22},
  {name:"Joseph Karanja", position:"Goalkeeper", nationality:"Kenyan", goals:0, assists:0, appearances:22},
];

const fixtures = [
  {opponent:"Tusker FC", date:"2025-10-25", result:"2-1 W"},
  {opponent:"Gor Mahia", date:"2025-11-01", result:"1-3 L"},
  {opponent:"Mathare United", date:"2025-11-08", result:"2-2 D"},
];

const staff = [
  {name:"Coach: Peter Njuguna", role:"Head Coach"},
  {name:"Medic: Susan Kariuki", role:"Physiotherapist"},
  {name:"Scout: Michael Odhiambo", role:"Scout"}
];

const merch = [
  {name:"Home Jersey", price:"KES 3500", img:"assets/merch/jersey1.jpg"},
  {name:"Scarf", price:"KES 1200", img:"assets/merch/scarf1.jpg"},
  {name:"Cap", price:"KES 800", img:"assets/merch/cap1.jpg"},
];

// ---------- Squad Grid ----------
function loadPlayers() {
  const grid = document.getElementById("playerGrid");
  if(!grid) return;
  grid.innerHTML = "";
  let filtered = players;

  const search = document.getElementById("searchPlayer")?.value.toLowerCase();
  const pos = document.getElementById("positionFilter")?.value;
  const nat = document.getElementById("nationalityFilter")?.value;

  if(search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
  if(pos) filtered = filtered.filter(p => p.position === pos);
  if(nat) filtered = filtered.filter(p => p.nationality === nat);

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "feature-card";
    card.innerHTML = `<h4>${p.name}</h4><p>${p.position} - ${p.nationality}</p><p>Goals:${p.goals} Assists:${p.assists}</p>`;
    grid.appendChild(card);
  });
}

document.getElementById("searchPlayer")?.addEventListener("input", loadPlayers);
document.getElementById("positionFilter")?.addEventListener("change", loadPlayers);
document.getElementById("nationalityFilter")?.addEventListener("change", loadPlayers);
window.addEventListener("load", loadPlayers);

// ---------- Fixtures ----------
function loadFixtures() {
  const grid = document.getElementById("fixturesList");
  if(!grid) return;
  grid.innerHTML = "";
  fixtures.forEach(f => {
    const card = document.createElement("div");
    card.className = "feature-card";
    card.innerHTML = `<h4>${f.opponent}</h4><p>${f.date}</p><p>Result: ${f.result}</p>`;
    grid.appendChild(card);
  });
}
window.addEventListener("load", loadFixtures);

// ---------- Staff ----------
function loadStaff() {
  const grid = document.getElementById("staffGrid");
  if(!grid) return;
  grid.innerHTML = "";
  staff.forEach(s => {
    const card = document.createElement("div");
    card.className = "feature-card";
    card.innerHTML = `<h4>${s.name}</h4><p>${s.role}</p>`;
    grid.appendChild(card);
  });
}
window.addEventListener("load", loadStaff);

// ---------- Merchandise ----------
function loadMerch() {
  const grid = document.getElementById("merchGrid");
  if(!grid) return;
  grid.innerHTML = "";
  merch.forEach(m => {
    const card = document.createElement("div");
    card.className = "feature-card";
    card.innerHTML = `<img src="${m.img}" alt="${m.name}"><h4>${m.name}</h4><p>${m.price}</p>`;
    grid.appendChild(card);
  });
}
window.addEventListener("load", loadMerch);

// ---------- Polls ----------
function vote(player) {
  const result = document.getElementById("pollResult");
  result.textContent = `You voted for ${player}!`;
}

// ---------- Charts ----------
function loadCharts() {
  const playerChartCanvas = document.getElementById("playerChart");
  if(playerChartCanvas){
    new Chart(playerChartCanvas,{
      type:'bar',
      data:{
        labels: players.map(p=>p.name),
        datasets:[{label:'Goals', data:players.map(p=>p.goals), backgroundColor:'#45a29e'}]
      }
    });
  }

  const teamChartCanvas = document.getElementById("teamChart");
  if(teamChartCanvas){
    new Chart(teamChartCanvas,{
      type:'pie',
      data:{
        labels:['Wins','Draws','Losses'],
        datasets:[{label:'Team Performance', data:[10,5,3], backgroundColor:['#66fcf1','#1f2833','#0b0c10']}]
      }
    });
  }
}
window.addEventListener("load", loadCharts);
