const leaderboard = {
  players: {},
  maxEntries: 10,
  shareCode: '',
  shareTimeout: null
};

function initLeaderboard() {
  loadLeaderboard();
  setupLeaderboardUI();
  setupNamePrompt();
  setupAutoSave();
}

function setupNamePrompt() {
  if (!localStorage.getItem('drimPlayerName')) {
    setTimeout(() => {
      const name = prompt('Enter your name for the leaderboard:') || 'Player';
      localStorage.setItem('drimPlayerName', name.substring(0, 20));
    }, 1000);
  }
}

function setupAutoSave() {
  setInterval(() => {
    if (typeof game !== 'undefined' && localStorage.getItem('drimPlayerName')) {
      saveLocalScore();
    }
  }, 1000);
}

function saveLocalScore() {
  const playerName = localStorage.getItem('drimPlayerName');
  if (!playerName) return;

  leaderboard.players[playerName] = {
    rebirths: game.rebirths,
    totalCurrency: game.totalCurrency,
    timestamp: Date.now()
  };

  localStorage.setItem('drimLeaderboard', JSON.stringify(leaderboard.players));
}

function loadLeaderboard() {
  const saved = localStorage.getItem('drimLeaderboard');
  if (saved) leaderboard.players = JSON.parse(saved);
}

function setupLeaderboardUI() {
  const tabButton = document.createElement('button');
  tabButton.className = 'tab-btn';
  tabButton.textContent = 'Leaderboard';
  document.querySelector('.tabs').appendChild(tabButton);

  const tabContent = document.createElement('div');
  tabContent.className = 'tab-content';
  tabContent.id = 'leaderboard-tab';
  tabContent.innerHTML = `
    <h2>Leaderboard</h2>
    <div class="leaderboard-actions">
      <button id="share-btn">Share Score</button>
      <button id="import-btn">Import Score</button>
    </div>
    <div id="leaderboard-container"></div>
    <div id="share-section" style="display:none;">
      <p>Share this code with others:</p>
      <div id="share-code"></div>
      <canvas id="share-qr"></canvas>
      <button id="copy-btn">Copy Code</button>
    </div>
    <div id="import-section" style="display:none;">
      <input type="text" id="import-code" placeholder="Paste code here">
      <button id="confirm-import">Import</button>
    </div>
  `;
  document.querySelector('.tab-container').appendChild(tabContent);

  tabButton.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    tabButton.classList.add('active');
    tabContent.classList.add('active');
    updateLeaderboardDisplay();
  });

  document.getElementById('share-btn').addEventListener('click', showShareSection);
  document.getElementById('import-btn').addEventListener('click', showImportSection);
  document.getElementById('copy-btn').addEventListener('click', copyShareCode);
  document.getElementById('confirm-import').addEventListener('click', importScore);
}

function updateLeaderboardDisplay() {
  const container = document.getElementById('leaderboard-container');
  const sorted = Object.entries(leaderboard.players)
    .sort((a, b) => b[1].rebirths - a[1].rebirths || b[1].totalCurrency - a[1].totalCurrency)
    .slice(0, leaderboard.maxEntries);

  container.innerHTML = sorted.length ? '' : '<p>No scores yet!</p>';
  
  sorted.forEach(([name, data], index) => {
    const entry = document.createElement('div');
    entry.className = 'leaderboard-entry';
    if (name === localStorage.getItem('drimPlayerName')) entry.classList.add('current-player');
    entry.innerHTML = `
      <span>${index + 1}</span>
      <span>${name}</span>
      <span>${data.rebirths}</span>
      <span>${formatNumber(data.totalCurrency)}</span>
    `;
    container.appendChild(entry);
  });
}

function showShareSection() {
  generateShareCode();
  document.getElementById('share-section').style.display = 'block';
  document.getElementById('import-section').style.display = 'none';
  updateLeaderboardDisplay();
}

function showImportSection() {
  document.getElementById('share-section').style.display = 'none';
  document.getElementById('import-section').style.display = 'block';
  updateLeaderboardDisplay();
}

function generateShareCode() {
  const playerData = {
    n: localStorage.getItem('drimPlayerName'),
    r: game.rebirths,
    t: game.totalCurrency,
    v: 1
  };
  leaderboard.shareCode = btoa(JSON.stringify(playerData));
  document.getElementById('share-code').textContent = leaderboard.shareCode;
  generateQRCode(leaderboard.shareCode);
  
  if (leaderboard.shareTimeout) clearTimeout(leaderboard.shareTimeout);
  leaderboard.shareTimeout = setTimeout(() => {
    document.getElementById('share-section').style.display = 'none';
  }, 30000);
}

function generateQRCode(text) {
  const canvas = document.getElementById('share-qr');
  const size = 200;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, size, size);
  
  const cellSize = 5;
  const data = encodeURIComponent(text);
  const url = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}x${size}&margin=0`;
  
  const img = new Image();
  img.onload = () => ctx.drawImage(img, 0, 0, size, size);
  img.src = url;
}

function copyShareCode() {
  navigator.clipboard.writeText(leaderboard.shareCode);
  alert('Code copied to clipboard!');
}

function importScore() {
  const code = document.getElementById('import-code').value.trim();
  if (!code) return;

  try {
    const data = JSON.parse(atob(code));
    if (data.v !== 1) throw new Error('Invalid version');
    
    leaderboard.players[data.n] = {
      rebirths: data.r,
      totalCurrency: data.t,
      timestamp: Date.now()
    };
    
    localStorage.setItem('drimLeaderboard', JSON.stringify(leaderboard.players));
    document.getElementById('import-section').style.display = 'none';
    updateLeaderboardDisplay();
  } catch (e) {
    alert('Invalid code!');
  }
}

function addLeaderboardStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #leaderboard-container {
      margin: 15px 0;
    }
    .leaderboard-actions {
      display: flex;
      gap: 10px;
      margin: 10px 0;
    }
    .leaderboard-actions button {
      padding: 5px 10px;
    }
    .leaderboard-entry {
      display: grid;
      grid-template-columns: 30px 1fr 80px 120px;
      padding: 8px 5px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .leaderboard-entry.current-player {
      background: rgba(100,200,255,0.1);
      font-weight: bold;
    }
    #share-section, #import-section {
      margin-top: 20px;
      padding: 15px;
      background: rgba(0,0,0,0.2);
      border-radius: 8px;
    }
    #share-code {
      font-family: monospace;
      background: white;
      color: black;
      padding: 10px;
      margin: 10px 0;
      word-break: break-all;
    }
    #import-code {
      width: 100%;
      padding: 8px;
      margin: 10px 0;
    }
  `;
  document.head.appendChild(style);
}

window.addEventListener('load', () => {
  addLeaderboardStyles();
  if (typeof game !== 'undefined') initLeaderboard();
});

// this doesnt currently work i probably wont fix it.
