// Game State
const game = {
    currency: 0,
    totalCurrency: 0,
    rebirths: 0,
    rebirthPoints: 0,
    lastTick: Date.now(),
    dps: 0,
    upgrades: {},
    rebirthUpgrades: {},
    version: 1
};

// Upgrade Definitions (removed multiplier category)
const upgrades = {
    // Generators
    generator1: {
        id: "generator1",
        name: "👷 Worker",
        emoji: "👷",
        baseCost: 10,
        costMultiplier: 1.15,
        baseEffect: 0.1,
        owned: 0,
        category: "generators",
        description: "A basic worker that generates Drims"
    },
    generator2: {
        id: "generator2",
        name: "🏭 Factory",
        emoji: "🏭",
        baseCost: 100,
        costMultiplier: 1.15,
        baseEffect: 1,
        owned: 0,
        category: "generators",
        description: "Produces Drims at a steady rate"
    },
    generator3: {
        id: "generator3",
        name: "🏦 Bank",
        emoji: "🏦",
        baseCost: 1100,
        costMultiplier: 1.15,
        baseEffect: 8,
        owned: 0,
        category: "generators",
        description: "Generates Drims with interest"
    },
    generator4: {
        id: "generator4",
        name: "🚀 Rocket",
        emoji: "🚀",
        baseCost: 12000,
        costMultiplier: 1.15,
        baseEffect: 47,
        owned: 0,
        category: "generators",
        description: "Space-age Drim generation"
    },
    generator5: {
        id: "generator5",
        name: "🛸 UFO",
        emoji: "🛸",
        baseCost: 130000,
        costMultiplier: 1.15,
        baseEffect: 260,
        owned: 0,
        category: "generators",
        description: "Alien technology for Drim production"
    },
    generator6: {
        id: "generator6",
        name: "🌌 Wormhole",
        emoji: "🌌",
        baseCost: 1.4e6,
        costMultiplier: 1.15,
        baseEffect: 1400,
        owned: 0,
        category: "generators",
        description: "Harness the power of spacetime"
    },
    generator7: {
        id: "generator7",
        name: "⚛️ Atom",
        emoji: "⚛️",
        baseCost: 2e7,
        costMultiplier: 1.15,
        baseEffect: 7800,
        owned: 0,
        category: "generators",
        description: "Quantum Drim generation"
    },
    generator8: {
        id: "generator8",
        name: "🧠 AI",
        emoji: "🧠",
        baseCost: 3.3e8,
        costMultiplier: 1.15,
        baseEffect: 44000,
        owned: 0,
        category: "generators",
        description: "Artificial Intelligence optimizing Drims"
    },
    generator9: {
        id: "generator9",
        name: "🕳️ Black Hole",
        emoji: "🕳️",
        baseCost: 5.1e9,
        costMultiplier: 1.15,
        baseEffect: 260000,
        owned: 0,
        category: "generators",
        description: "Infinite density of Drims"
    },
    generator10: {
        id: "generator10",
        name: "🌠 Cosmic",
        emoji: "🌠",
        baseCost: 7.5e10,
        costMultiplier: 1.15,
        baseEffect: 1.6e6,
        owned: 0,
        category: "generators",
        description: "Harness the power of the cosmos"
    },
    
    // Special Upgrades (now all additive)
    special1: {
        id: "special1",
        name: "🎯 Precision",
        emoji: "🎯",
        baseCost: 500,
        costMultiplier: 2,
        baseEffect: 1, // +1 per level
        owned: 0,
        category: "special",
        description: "Each level makes clicking give +1 more Drims"
    },
    special2: {
        id: "special2",
        name: "🤲 Double",
        emoji: "🤲",
        baseCost: 5000,
        costMultiplier: 2,
        baseEffect: 1, // Just a one-time purchase
        owned: 0,
        category: "special",
        description: "Double all your Drims (once)"
    },
    special3: {
        id: "special3",
        name: "🔁 Loop",
        emoji: "🔁",
        baseCost: 50000,
        costMultiplier: 2,
        baseEffect: 0.1, // +0.1 per generator per level
        owned: 0,
        category: "special",
        description: "Each level makes generators produce +0.1 more Drims"
    },
    special4: {
        id: "special4",
        name: "🎲 Lucky",
        emoji: "🎲",
        baseCost: 5e5,
        costMultiplier: 2,
        baseEffect: 0.05, // +5% chance per level
        owned: 0,
        category: "special",
        description: "Each level gives +5% chance for 10x click value"
    },
    special5: {
        id: "special5",
        name: "⌛ Time",
        emoji: "⌛",
        baseCost: 5e6,
        costMultiplier: 2,
        baseEffect: 0.5, // +0.5x speed per level
        owned: 0,
        category: "special",
        description: "Each level makes time flow +0.5x faster"
    }
};

// Rebirth Upgrades (all additive)
const rebirthUpgrades = {
    rb1: {
        id: "rb1",
        name: "🚀 Starter",
        emoji: "🚀",
        baseCost: 1,
        costMultiplier: 1.5,
        baseEffect: 100, // +100 starting Drims per level
        owned: 0,
        description: "Each level gives +100 Drims when you rebirth"
    },
    rb2: {
        id: "rb2",
        name: "💰 Investor",
        emoji: "💰",
        baseCost: 3,
        costMultiplier: 1.5,
        baseEffect: 0.1, // +0.1 per generator per level
        owned: 0,
        description: "Each level makes generators produce +0.1 more Drims"
    },
    rb3: {
        id: "rb3",
        name: "⚡ Energize",
        emoji: "⚡",
        baseCost: 5,
        costMultiplier: 1.5,
        baseEffect: 1, // +1 click power per level
        owned: 0,
        description: "Each level makes clicking give +1 more Drims"
    },
    rb4: {
        id: "rb4",
        name: "♾️ Infinite",
        emoji: "♾️",
        baseCost: 10,
        costMultiplier: 1.5,
        baseEffect: 0.01, // +1% to all production per level
        owned: 0,
        description: "Each level gives +1% to all Drim production"
    },
    rb5: {
        id: "rb5",
        name: "🌌 Cosmic",
        emoji: "🌌",
        baseCost: 20,
        costMultiplier: 1.5,
        baseEffect: 0.05, // +5% to all production per level
        owned: 0,
        description: "Each level gives +5% to all Drim production"
    }
};

// Get multiplier for an upgrade (now completely additive)
function getMultiplierForUpgrade(upgrade) {
    let multiplier = 1;
    
    // Apply rebirth upgrades (additive)
    if (game.rebirthUpgrades.rb2.owned > 0) {
        multiplier += game.rebirthUpgrades.rb2.baseEffect * game.rebirthUpgrades.rb2.owned;
    }
    
    // Apply special upgrades (additive)
    if (game.upgrades.special3.owned > 0 && upgrade.category === "generators") {
        multiplier += game.upgrades.special3.baseEffect * game.upgrades.special3.owned;
    }
    
    // Apply rebirth global multiplier (additive)
    if (game.rebirthUpgrades.rb4.owned > 0) {
        multiplier += game.rebirthUpgrades.rb4.baseEffect * game.rebirthUpgrades.rb4.owned;
    }
    
    // Apply cosmic boost if purchased (additive)
    if (game.rebirthUpgrades.rb5.owned > 0) {
        multiplier += game.rebirthUpgrades.rb5.baseEffect * game.rebirthUpgrades.rb5.owned;
    }
    
    return multiplier;
}

// Handle click on main emoji (updated for additive bonuses)
function handleClick() {
    let clickValue = 1;
    
    // Apply special upgrades (additive)
    if (game.upgrades.special1.owned > 0) {
        clickValue += game.upgrades.special1.baseEffect * game.upgrades.special1.owned;
    }
    
    // Apply rebirth upgrades (additive)
    if (game.rebirthUpgrades.rb3.owned > 0) {
        clickValue += game.rebirthUpgrades.rb3.baseEffect * game.rebirthUpgrades.rb3.owned;
    }
    
    // Lucky chance (additive chance)
    if (game.upgrades.special4.owned > 0 && 
        Math.random() < (game.upgrades.special4.baseEffect * game.upgrades.special4.owned)) {
        clickValue *= 10;
        createParticles(30, 'gold');
    } else {
        createParticles(10, 'white');
    }
    
    game.currency += clickValue;
    game.totalCurrency += clickValue;
    
    // Visual feedback
    const emoji = document.getElementById('click-emoji');
    emoji.style.transform = 'scale(0.95)';
    setTimeout(() => {
        emoji.style.transform = 'scale(1)';
    }, 100);
    
    updateUI();
}

// Calculate DPS (updated for additive bonuses)
function calculateDPS() {
    let dps = 0;
    
    // Add generator contributions
    for (const key in game.upgrades) {
        const upgrade = game.upgrades[key];
        if (upgrade.category === 'generators' && upgrade.owned > 0) {
            const baseValue = upgrade.baseEffect * upgrade.owned;
            const multiplier = getMultiplierForUpgrade(upgrade);
            dps += baseValue * (1 + multiplier); // Now additive
        }
    }
    
    // Apply time multiplier if purchased (still multiplicative)
    if (game.upgrades.special5.owned > 0) {
        dps *= (1 + game.upgrades.special5.baseEffect * game.upgrades.special5.owned);
    }
    
    game.dps = dps;
}

// Format upgrade effect display (updated for additive)
function formatUpgradeEffect(upgrade) {
    if (upgrade.category === 'generators') {
        const baseValue = upgrade.baseEffect;
        const multiplier = getMultiplierForUpgrade(upgrade);
        return `${formatNumber(baseValue * (1 + multiplier))}/s`;
    } else if (upgrade.category === 'special') {
        if (upgrade.id === 'special1') {
            return `+${formatNumber(upgrade.baseEffect * upgrade.owned)} Drims per click`;
        } else if (upgrade.id === 'special3') {
            return `+${formatNumber(upgrade.baseEffect * upgrade.owned)} per generator`;
        } else if (upgrade.id === 'special4') {
            return `${formatNumber(upgrade.baseEffect * upgrade.owned * 100)}% chance for 10x`;
        } else if (upgrade.id === 'special5') {
            return `+${formatNumber(upgrade.baseEffect * upgrade.owned * 100)}% speed`;
        } else {
            return `${formatNumber(upgrade.baseEffect)}x`;
        }
    }
}

// Perform rebirth (updated for additive bonuses)
function performRebirth() {
    const points = Math.floor(Math.sqrt(game.totalCurrency / 1e6));
    
    if (points < 1) {
        alert("You need at least 1,000,000 total Drims to rebirth!");
        return;
    }
    
    if (confirm(`Rebirth for ${points} points? This will reset your progress but give you permanent bonuses!`)) {
        game.rebirths++;
        game.rebirthPoints += points;
        
        // Reset game state but keep rebirth info
        game.currency = 0;
        game.totalCurrency = 0;
        game.dps = 0;
        
        // Reset upgrades
        for (const key in game.upgrades) {
            game.upgrades[key].owned = 0;
        }
        
        // Apply starter bonus if purchased (additive)
        if (game.rebirthUpgrades.rb1.owned > 0) {
            game.currency = game.rebirthUpgrades.rb1.baseEffect * game.rebirthUpgrades.rb1.owned;
        }
        
        renderUpgrades();
        renderRebirthUpgrades();
        calculateDPS();
        updateUI();
    }
}

// Initialize the game (remove multiplier tab)
function initGame() {
    // Initialize upgrades
    for (const key in upgrades) {
        if (!game.upgrades[key]) {
            game.upgrades[key] = {...upgrades[key]};
        }
    }
    
    // Initialize rebirth upgrades
    for (const key in rebirthUpgrades) {
        if (!game.rebirthUpgrades[key]) {
            game.rebirthUpgrades[key] = {...rebirthUpgrades[key]};
        }
    }
    
    // Load saved game
    loadGame();
    
    // Setup UI (remove multiplier tab button)
    document.querySelector('[data-tab="multipliers"]').remove();
    
    // Start game loop
    game.lastTick = Date.now();
    requestAnimationFrame(gameLoop);
    
    // Calculate initial DPS
    calculateDPS();
    updateUI();
    
    // Render all upgrades immediately
    renderUpgrades();
    renderRebirthUpgrades();
}

// Game loop
function gameLoop() {
    const now = Date.now();
    const deltaTime = (now - game.lastTick) / 1000;
    
    // Generate passive income
    if (deltaTime > 0) {
        const income = game.dps * deltaTime;
        game.currency += income;
        game.totalCurrency += income;
    }
    
    game.lastTick = now;
    
    // Update UI
    updateUI();
    
    // Continue the loop
    requestAnimationFrame(gameLoop);
}

// Setup UI elements
function setupUI() {
    // Click emoji
    const clickEmoji = document.getElementById('click-emoji');
    clickEmoji.addEventListener('click', handleClick);
    
    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Rebirth button
    document.getElementById('rebirth-btn').addEventListener('click', performRebirth);
    
    // Save/Reset buttons
    document.getElementById('save-btn').addEventListener('click', saveGame);
    document.getElementById('reset-btn').addEventListener('click', resetGame);
}

// Handle click on main emoji
function handleClick() {
    let clickValue = 1;
    
    // Apply special upgrades
    if (game.upgrades.special1.owned > 0) {
        clickValue *= Math.pow(game.upgrades.special1.baseEffect, game.upgrades.special1.owned);
    }
    
    // Apply rebirth upgrades (now additive)
    if (game.rebirthUpgrades.rb3.owned > 0) {
        clickValue *= (1 + game.rebirthUpgrades.rb3.baseEffect * game.rebirthUpgrades.rb3.owned);
    }
    
    // Lucky chance
    if (game.upgrades.special4.owned > 0 && Math.random() < (game.upgrades.special4.baseEffect * game.upgrades.special4.owned)) {
        clickValue *= 10;
        createParticles(30, 'gold');
    } else {
        createParticles(10, 'white');
    }
    
    game.currency += clickValue;
    game.totalCurrency += clickValue;
    
    // Visual feedback
    const emoji = document.getElementById('click-emoji');
    emoji.style.transform = 'scale(0.95)';
    setTimeout(() => {
        emoji.style.transform = 'scale(1)';
    }, 100);
    
    updateUI();
}

// Create visual particles
function createParticles(count, color) {
    const container = document.getElementById('particles-container');
    const emojiRect = document.getElementById('click-emoji').getBoundingClientRect();
    const centerX = emojiRect.left + emojiRect.width / 2;
    const centerY = emojiRect.top + emojiRect.height / 2;
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = color;
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const duration = Math.random() * 2 + 1;
        
        particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
        particle.style.opacity = '1';
        particle.style.transition = `all ${duration}s linear`;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.style.opacity = '0';
            setTimeout(() => {
                particle.remove();
            }, duration * 1000);
        }, 10);
    }
}

// Render all upgrades
function renderUpgrades() {
    // Clear containers
    document.getElementById('generators-container').innerHTML = '';
    document.getElementById('multipliers-container').innerHTML = '';
    document.getElementById('special-container').innerHTML = '';
    
    // Render each upgrade
    for (const key in game.upgrades) {
        const upgrade = game.upgrades[key];
        const containerId = `${upgrade.category}-container`;
        const container = document.getElementById(containerId);
        
        if (container) {
            const upgradeElement = createUpgradeElement(upgrade);
            container.appendChild(upgradeElement);
        }
    }
}

// Create an upgrade element
function createUpgradeElement(upgrade) {
    const element = document.createElement('div');
    element.className = 'upgrade';
    
    const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned));
    
    if (game.currency < cost) {
        element.classList.add('unaffordable');
    }
    
    element.addEventListener('click', () => purchaseUpgrade(upgrade.id));
    
    element.innerHTML = `
        <div class="upgrade-emoji">${upgrade.emoji}</div>
        <div class="upgrade-name">${upgrade.name}</div>
        <div class="upgrade-price">${formatNumber(cost)} Drims</div>
        <div class="upgrade-owned">Owned: ${upgrade.owned}</div>
        <div class="upgrade-effect">Effect: ${formatUpgradeEffect(upgrade)}</div>
        <div class="tooltip">${upgrade.description}</div>
    `;
    
    return element;
}

// Format upgrade effect display
function formatUpgradeEffect(upgrade) {
    if (upgrade.category === 'generators') {
        return `${formatNumber(upgrade.baseEffect * getMultiplierForUpgrade(upgrade))}/s`;
    } else if (upgrade.category === 'multipliers') {
        // Show additive bonus now
        const bonus = (upgrade.baseEffect - 1) * upgrade.owned;
        return `+${formatNumber(bonus)}x (${formatNumber(1 + bonus)}x total)`;
    } else {
        if (upgrade.id === 'special1' || upgrade.id === 'special3' || upgrade.id === 'special4') {
            return `${formatNumber(upgrade.baseEffect * 100)}% per level`;
        } else {
            return `${formatNumber(upgrade.baseEffect)}x`;
        }
    }
}

// Get multiplier for an upgrade (now additive for multipliers)
function getMultiplierForUpgrade(upgrade) {
    let multiplier = 1;
    
    // Apply multiplier upgrades (now additive)
    let multiplierBonus = 0;
    for (const key in game.upgrades) {
        const up = game.upgrades[key];
        if (up.category === 'multipliers' && up.owned > 0) {
            multiplierBonus += (up.baseEffect - 1) * up.owned;
        }
    }
    multiplier += multiplierBonus;
    
    // Apply rebirth upgrades (still multiplicative with other categories)
    if (game.rebirthUpgrades.rb2.owned > 0) {
        multiplier *= (1 + game.rebirthUpgrades.rb2.baseEffect * game.rebirthUpgrades.rb2.owned);
    }
    
    // Apply special upgrades (still multiplicative)
    if (game.upgrades.special3.owned > 0 && upgrade.category === 'generators') {
        multiplier *= Math.pow(game.upgrades.special3.baseEffect, game.upgrades.special3.owned);
    }
    
    // Apply rebirth global multiplier (still multiplicative)
    if (game.rebirthUpgrades.rb4.owned > 0) {
        multiplier *= (1 + game.rebirthUpgrades.rb4.baseEffect * game.rebirthUpgrades.rb4.owned);
    }
    
    // Apply cosmic boost if purchased
    if (game.rebirthUpgrades.rb5.owned > 0) {
        multiplier *= (1 + game.rebirthUpgrades.rb5.baseEffect * game.rebirthUpgrades.rb5.owned);
    }
    
    return multiplier;
}

// Purchase an upgrade
function purchaseUpgrade(upgradeId) {
    const upgrade = game.upgrades[upgradeId];
    const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned));
    
    if (game.currency >= cost) {
        game.currency -= cost;
        upgrade.owned++;
        
        // Special effects
        if (upgradeId === 'special2') {
            game.currency *= upgrade.baseEffect;
            game.totalCurrency *= upgrade.baseEffect;
        }
        
        renderUpgrades();
        calculateDPS();
        updateUI();
    }
}

// Calculate DPS
function calculateDPS() {
    let dps = 0;
    
    // Add generator contributions
    for (const key in game.upgrades) {
        const upgrade = game.upgrades[key];
        if (upgrade.category === 'generators' && upgrade.owned > 0) {
            dps += upgrade.baseEffect * upgrade.owned * getMultiplierForUpgrade(upgrade);
        }
    }
    
    // Apply time multiplier if purchased
    if (game.upgrades.special5.owned > 0) {
        dps *= Math.pow(game.upgrades.special5.baseEffect, game.upgrades.special5.owned);
    }
    
    game.dps = dps;
}

// Render rebirth upgrades (now infinite)
function renderRebirthUpgrades() {
    const container = document.getElementById('rebirth-upgrades-container');
    container.innerHTML = '';
    
    for (const key in game.rebirthUpgrades) {
        const upgrade = game.rebirthUpgrades[key];
        const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned));
        
        const element = document.createElement('div');
        element.className = 'rebirth-upgrade';
        
        if (game.rebirthPoints < cost) {
            element.classList.add('unaffordable');
        }
        
        element.innerHTML = `
            <div class="upgrade-emoji">${upgrade.emoji}</div>
            <div class="upgrade-name">${upgrade.name} (Lvl ${upgrade.owned})</div>
            <div class="upgrade-price">${formatNumber(cost)} RP</div>
            <div class="upgrade-effect">Effect: +${formatNumber(upgrade.baseEffect * upgrade.owned)}x</div>
            <div class="tooltip">${upgrade.description}</div>
        `;
        
        element.addEventListener('click', () => purchaseRebirthUpgrade(upgrade.id));
        container.appendChild(element);
    }
}

// Purchase rebirth upgrade (now infinite)
function purchaseRebirthUpgrade(upgradeId) {
    const upgrade = game.rebirthUpgrades[upgradeId];
    const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned));
    
    if (game.rebirthPoints >= cost) {
        game.rebirthPoints -= cost;
        upgrade.owned++;
        
        renderRebirthUpgrades();
        calculateDPS();
        updateUI();
    }
}

// Perform rebirth
function performRebirth() {
    const points = Math.floor(Math.sqrt(game.totalCurrency / 1e6));
    
    if (points < 1) {
        alert("You need at least 1,000,000 total Drims to rebirth!");
        return;
    }
    
    if (confirm(`Rebirth for ${points} points? This will reset your progress but give you permanent bonuses!`)) {
        game.rebirths++;
        game.rebirthPoints += points;
        
        // Reset game state but keep rebirth info
        game.currency = 0;
        game.totalCurrency = 0;
        game.dps = 0;
        
        // Reset upgrades
        for (const key in game.upgrades) {
            game.upgrades[key].owned = 0;
        }
        
        // Apply starter bonus if purchased
        if (game.rebirthUpgrades.rb1.owned > 0) {
            game.currency = 100 * (1 + game.rebirthUpgrades.rb1.baseEffect * game.rebirthUpgrades.rb1.owned);
        }
        
        renderUpgrades();
        renderRebirthUpgrades();
        calculateDPS();
        updateUI();
    }
}

// Update UI elements
function updateUI() {
    // Currency display
    document.getElementById('currency').textContent = formatNumber(game.currency);
    document.getElementById('dps').textContent = formatNumber(game.dps);
    
    // Rebirth info
    document.getElementById('rebirth-count').textContent = game.rebirths;
    document.getElementById('rebirth-points').textContent = game.rebirthPoints;
    document.getElementById('rebirth-multiplier').textContent = formatNumber(calculateRebirthMultiplier());
    document.getElementById('next-rebirth-points').textContent = formatNumber(Math.floor(Math.sqrt(game.totalCurrency / 1e6)));
    
    // Enable/disable rebirth button
    document.getElementById('rebirth-btn').disabled = Math.floor(Math.sqrt(game.totalCurrency / 1e6)) < 1;
}

// Calculate rebirth multiplier
function calculateRebirthMultiplier() {
    let multiplier = 1;
    multiplier *= 1 + Math.sqrt(game.rebirthPoints) / 10;
    
    for (const key in game.rebirthUpgrades) {
        if (game.rebirthUpgrades[key].owned > 0) {
            multiplier *= (1 + game.rebirthUpgrades[key].baseEffect * game.rebirthUpgrades[key].owned);
        }
    }
    
    return multiplier;
}

// Format large numbers
function formatNumber(num) {
    if (num < 1000) return Math.floor(num);
    if (num < 1e6) return (num / 1000).toFixed(1) + 'K';
    if (num < 1e9) return (num / 1e6).toFixed(1) + 'M';
    if (num < 1e12) return (num / 1e9).toFixed(1) + 'B';
    if (num < 1e15) return (num / 1e12).toFixed(1) + 'T';
    return (num / 1e15).toFixed(1) + 'Q';
}

// Save game
function saveGame() {
    const saveData = {
        currency: game.currency,
        totalCurrency: game.totalCurrency,
        rebirths: game.rebirths,
        rebirthPoints: game.rebirthPoints,
        upgrades: game.upgrades,
        rebirthUpgrades: game.rebirthUpgrades,
        version: game.version
    };
    
    localStorage.setItem('drimclicker_save', JSON.stringify(saveData));
    
    // Visual feedback
    const saveBtn = document.getElementById('save-btn');
    saveBtn.textContent = 'Saved!';
    setTimeout(() => {
        saveBtn.textContent = 'Save Game';
    }, 2000);
}

// Load game
function loadGame() {
    const saveData = localStorage.getItem('drimclicker_save');
    
    if (saveData) {
        try {
            const parsed = JSON.parse(saveData);
            
            if (parsed.version === game.version) {
                game.currency = parsed.currency || 0;
                game.totalCurrency = parsed.totalCurrency || 0;
                game.rebirths = parsed.rebirths || 0;
                game.rebirthPoints = parsed.rebirthPoints || 0;
                
                if (parsed.upgrades) {
                    for (const key in parsed.upgrades) {
                        if (game.upgrades[key]) {
                            game.upgrades[key].owned = parsed.upgrades[key].owned || 0;
                        }
                    }
                }
                
                if (parsed.rebirthUpgrades) {
                    for (const key in parsed.rebirthUpgrades) {
                        if (game.rebirthUpgrades[key]) {
                            game.rebirthUpgrades[key].owned = parsed.rebirthUpgrades[key].owned || 0;
                        }
                    }
                }
            }
        } catch (e) {
            console.error('Failed to load save:', e);
        }
    }
}

// Reset game
function resetGame() {
    if (confirm('Are you sure you want to reset ALL progress? This cannot be undone!')) {
        localStorage.removeItem('drimclicker_save');
        location.reload();
    }
}

// Start the game
window.onload = initGame;
