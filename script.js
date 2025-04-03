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

const upgrades = {
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
    generator11: {
        id: "generator11",
        name: "⚙️ ZAS",
        emoji: "⚙️",
        baseCost: 10e11,
        costMultiplier: 1.15,
        baseEffect: 1.6e7,
        owned: 0,
        category: "generators",
        description: "me"
    },
        generator12: {
        id: "generator12",
        name: "👷 Chinese Guy",
        emoji: "👷",
        baseCost: 10e12,
        costMultiplier: 1.15,
        baseEffect: 1.6e8,
        owned: 0,
        category: "generators",
        description: "They are good at working."
    },
    multiplier1: {
        id: "multiplier1",
        name: "✨ Polish",
        emoji: "✨",
        baseCost: 100,
        costMultiplier: 1500,
        baseEffect: 1.5,
        owned: 0,
        category: "multipliers",
        description: "Makes everything shine brighter (1.5x multiplier)"
    },
    multiplier2: {
        id: "multiplier2",
        name: "🔮 Magic",
        emoji: "🔮",
        baseCost: 1000,
        costMultiplier: 15000,
        baseEffect: 2,
        owned: 0,
        category: "multipliers",
        description: "Magical boost to all generators (2x multiplier)"
    },
    multiplier3: {
        id: "multiplier3",
        name: "⚡ Boost",
        emoji: "⚡",
        baseCost: 10000,
        costMultiplier: 150000,
        baseEffect: 3,
        owned: 0,
        category: "multipliers",
        description: "Electrifying speed boost (3x multiplier)"
    },
    multiplier4: {
        id: "multiplier4",
        name: "💎 Diamond",
        emoji: "💎",
        baseCost: 1e5,
        costMultiplier: 1500000,
        baseEffect: 5,
        owned: 0,
        category: "multipliers",
        description: "Diamond-hard efficiency (5x multiplier)"
    },
    multiplier5: {
        id: "multiplier5",
        name: "🦄 Unicorn",
        emoji: "🦄",
        baseCost: 1e6,
        costMultiplier: 15000000,
        baseEffect: 8,
        owned: 0,
        category: "multipliers",
        description: "Mythical production boost (8x multiplier)"
    },
    special1: {
        id: "special1",
        name: "🎯 Precision",
        emoji: "🎯",
        baseCost: 500,
        costMultiplier: 2000,
        baseEffect: 2,
        owned: 0,
        category: "special",
        description: "Clicking gives 2x more Drims"
    },
    special2: {
        id: "special2",
        name: "🤲 Double",
        emoji: "🤲",
        baseCost: 5000,
        costMultiplier: 20000,
        baseEffect: 2,
        owned: 0,
        category: "special",
        description: "Double all your Drims (once)"
    },
    special3: {
        id: "special3",
        name: "🔁 Loop",
        emoji: "🔁",
        baseCost: 50000,
        costMultiplier: 200000,
        baseEffect: 1.1,
        owned: 0,
        category: "special",
        description: "Generators generate 10% more"
    },
    special4: {
        id: "special4",
        name: "🎲 Lucky",
        emoji: "🎲",
        baseCost: 5e5,
        costMultiplier: 2000000,
        baseEffect: 0.1,
        owned: 0,
        category: "special",
        description: "10% chance for 10x click value"
    },
    special5: {
        id: "special5",
        name: "⌛ Time",
        emoji: "⌛",
        baseCost: 5e6,
        costMultiplier: 20000000,
        baseEffect: 2,
        owned: 0,
        category: "special",
        description: "Time flows faster (2x game speed)"
    }
};

const rebirthUpgrades = {
    rb1: {
        id: "rb1",
        name: "🚀 Starter",
        emoji: "🚀",
        baseCost: 1,
        costMultiplier: 1.5,
        baseEffect: 2,
        owned: 0,
        description: "Start with 2x multiplier after rebirth (1.5x per level)",
        purchased: false
    },
    rb2: {
        id: "rb2",
        name: "💰 Investor",
        emoji: "💰",
        baseCost: 3,
        costMultiplier: 1.5,
        baseEffect: 1.5,
        owned: 0,
        description: "All generators produce 1.5x more (1.5x per level)",
        purchased: false
    },
    rb3: {
        id: "rb3",
        name: "⚡ Energize",
        emoji: "⚡",
        baseCost: 5,
        costMultiplier: 1.5,
        baseEffect: 2,
        owned: 0,
        description: "Click power is 2x stronger (1.5x per level)",
        purchased: false
    },
    rb4: {
        id: "rb4",
        name: "♾️ Infinite",
        emoji: "♾️",
        baseCost: 10,
        costMultiplier: 1.5,
        baseEffect: 1.2,
        owned: 0,
        description: "Permanent 1.2x to all multipliers (1.5x per level)",
        purchased: false
    },
    rb5: {
        id: "rb5",
        name: "🌌 Cosmic",
        emoji: "🌌",
        baseCost: 20,
        costMultiplier: 1.5,
        baseEffect: 1.5,
        owned: 0,
        description: "Unlock cosmic generators (1.5x boost per level)",
        purchased: false
    }
};

function initGame() {
    for (const key in upgrades) {
        if (!game.upgrades[key]) {
            game.upgrades[key] = {...upgrades[key]};
        }
    }
    
    for (const key in rebirthUpgrades) {
        if (!game.rebirthUpgrades[key]) {
            game.rebirthUpgrades[key] = {...rebirthUpgrades[key]};
        }
    }
    
    loadGame();
    setupUI();
    game.lastTick = Date.now();
    requestAnimationFrame(gameLoop);
    calculateDPS();
    updateUI();
    renderUpgrades();
    renderRebirthUpgrades();
    setInterval(saveGame, 60000);
}

function gameLoop() {
    const now = Date.now();
    const deltaTime = (now - game.lastTick) / 1000;
    
    if (deltaTime > 0) {
        const income = game.dps * deltaTime;
        game.currency += income;
        game.totalCurrency += income;
        updateUpgradeAffordability();
    }
    
    game.lastTick = now;
    updateUI();
    requestAnimationFrame(gameLoop);
}

function updateUpgradeAffordability() {
    const upgradeElements = document.querySelectorAll('.upgrade');
    upgradeElements.forEach(element => {
        const upgradeId = element.getAttribute('data-id');
        if (upgradeId) {
            const upgrade = game.upgrades[upgradeId];
            const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned));
            if (game.currency >= cost) {
                element.classList.remove('unaffordable');
            } else {
                element.classList.add('unaffordable');
            }
        }
    });

    const rebirthElements = document.querySelectorAll('.rebirth-upgrade');
    rebirthElements.forEach(element => {
        const upgradeId = element.getAttribute('data-id');
        if (upgradeId) {
            const upgrade = game.rebirthUpgrades[upgradeId];
            const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned));
            if (game.rebirthPoints >= cost && !upgrade.purchased) {
                element.classList.remove('unaffordable');
            } else {
                element.classList.add('unaffordable');
            }
        }
    });
}

function setupUI() {
    const clickEmoji = document.getElementById('click-emoji');
    clickEmoji.addEventListener('click', handleClick);
    
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
    
    document.getElementById('rebirth-btn').addEventListener('click', performRebirth);
    document.getElementById('save-btn').addEventListener('click', saveGame);
    document.getElementById('reset-btn').addEventListener('click', resetGame);
}

function handleClick() {
    let clickValue = 1;
    
    if (game.upgrades.special1.owned > 0) {
        clickValue *= Math.pow(game.upgrades.special1.baseEffect, game.upgrades.special1.owned);
    }
    
    if (game.rebirthUpgrades.rb3.owned > 0) {
        clickValue *= Math.pow(game.rebirthUpgrades.rb3.baseEffect, game.rebirthUpgrades.rb3.owned);
    }
    
    if (game.upgrades.special4.owned > 0 && Math.random() < (game.upgrades.special4.baseEffect * game.upgrades.special4.owned)) {
        clickValue *= 10;
        createParticles(30, 'gold');
    } else {
        createParticles(10, 'white');
    }
    
    game.currency += clickValue;
    game.totalCurrency += clickValue;
    
    const emoji = document.getElementById('click-emoji');
    emoji.style.transform = 'scale(0.95)';
    setTimeout(() => {
        emoji.style.transform = 'scale(1)';
    }, 100);
    
    updateUI();
}

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

function renderUpgrades() {
    document.getElementById('generators-container').innerHTML = '';
    document.getElementById('multipliers-container').innerHTML = '';
    document.getElementById('special-container').innerHTML = '';
    
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

function createUpgradeElement(upgrade) {
    const element = document.createElement('div');
    element.className = 'upgrade';
    element.setAttribute('data-id', upgrade.id);
    
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

function formatUpgradeEffect(upgrade) {
    if (upgrade.category === 'generators') {
        return `${formatNumber(upgrade.baseEffect * getMultiplierForUpgrade(upgrade))}/s`;
    } else if (upgrade.category === 'multipliers') {
        return `${formatNumber(upgrade.baseEffect)}x`;
    } else {
        if (upgrade.id === 'special1' || upgrade.id === 'special3' || upgrade.id === 'special4') {
            return `${formatNumber(upgrade.baseEffect * 100)}% per level`;
        } else {
            return `${formatNumber(upgrade.baseEffect)}x`;
        }
    }
}

function getMultiplierForUpgrade(upgrade) {
    let multiplier = 1;
    
    for (const key in game.upgrades) {
        const up = game.upgrades[key];
        if (up.category === 'multipliers' && up.owned > 0) {
            multiplier *= Math.pow(up.baseEffect, up.owned);
        }
    }
    
    if (game.rebirthUpgrades.rb2.owned > 0) {
        multiplier *= Math.pow(game.rebirthUpgrades.rb2.baseEffect, game.rebirthUpgrades.rb2.owned);
    }
    
    if (game.upgrades.special3.owned > 0 && upgrade.category === 'generators') {
        multiplier *= Math.pow(game.upgrades.special3.baseEffect, game.upgrades.special3.owned);
    }
    
    if (game.rebirthUpgrades.rb4.owned > 0) {
        multiplier *= Math.pow(game.rebirthUpgrades.rb4.baseEffect, game.rebirthUpgrades.rb4.owned);
    }
    
    return multiplier;
}

function purchaseUpgrade(upgradeId) {
    const upgrade = game.upgrades[upgradeId];
    const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned));
    
    if (game.currency >= cost) {
        game.currency -= cost;
        upgrade.owned++;
        
        if (upgradeId === 'special2') {
            game.currency *= upgrade.baseEffect;
            game.totalCurrency *= upgrade.baseEffect;
        }
        
        renderUpgrades();
        calculateDPS();
        updateUI();
    }
}

function calculateDPS() {
    let dps = 0;
    
    for (const key in game.upgrades) {
        const upgrade = game.upgrades[key];
        if (upgrade.category === 'generators' && upgrade.owned > 0) {
            dps += upgrade.baseEffect * upgrade.owned * getMultiplierForUpgrade(upgrade);
        }
    }
    
    if (game.upgrades.special5.owned > 0) {
        dps *= Math.pow(game.upgrades.special5.baseEffect, game.upgrades.special5.owned);
    }
    
    game.dps = dps;
}

function renderRebirthUpgrades() {
    const container = document.getElementById('rebirth-upgrades-container');
    container.innerHTML = '';
    
    for (const key in game.rebirthUpgrades) {
        const upgrade = game.rebirthUpgrades[key];
        const element = document.createElement('div');
        element.className = 'rebirth-upgrade';
        element.setAttribute('data-id', upgrade.id);
        
        const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned));
        
        if (game.rebirthPoints < cost || upgrade.purchased) {
            element.classList.add('unaffordable');
        }
        
        element.addEventListener('click', () => purchaseRebirthUpgrade(upgrade.id));
        
        if (upgrade.owned > 0) {
            element.innerHTML = `
                <div class="upgrade-emoji">${upgrade.emoji}</div>
                <div class="upgrade-name">${upgrade.name}</div>
                <div class="upgrade-level">Level: ${upgrade.owned}</div>
                <div class="upgrade-effect">Effect: ${formatNumber(Math.pow(upgrade.baseEffect, upgrade.owned))}x</div>
                <div class="upgrade-next-cost">Next Level: ${formatNumber(cost)} RP</div>
                <div class="tooltip">${upgrade.description}</div>
            `;
        } else {
            element.innerHTML = `
                <div class="upgrade-emoji">${upgrade.emoji}</div>
                <div class="upgrade-name">${upgrade.name}</div>
                <div class="upgrade-price">${formatNumber(cost)} RP</div>
                <div class="upgrade-effect">Effect: ${formatNumber(upgrade.baseEffect)}x</div>
                <div class="tooltip">${upgrade.description}</div>
            `;
        }
        
        container.appendChild(element);
    }
}

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

function performRebirth() {
    const points = Math.floor(Math.sqrt(game.totalCurrency / 1e6));
    
    if (points < 1) {
        alert("You need at least 1,000,000 total Drims to rebirth!");
        return;
    }
    
    if (confirm(`Rebirth for ${points} points? This will reset your progress but give you permanent bonuses!`)) {
        game.rebirths++;
        game.rebirthPoints += points;
        game.currency = 0;
        game.totalCurrency = 0;
        game.dps = 0;
        
        for (const key in game.upgrades) {
            game.upgrades[key].owned = 0;
        }
        
        if (game.rebirthUpgrades.rb1.owned > 0) {
            game.currency = 100 * Math.pow(game.rebirthUpgrades.rb1.baseEffect, game.rebirthUpgrades.rb1.owned);
        }
        
        renderUpgrades();
        renderRebirthUpgrades();
        calculateDPS();
        updateUI();
    }
}

function updateUI() {
    document.getElementById('currency').textContent = formatNumber(game.currency);
    document.getElementById('dps').textContent = formatNumber(game.dps);
    document.getElementById('rebirth-count').textContent = game.rebirths;
    document.getElementById('rebirth-points').textContent = game.rebirthPoints;
    document.getElementById('rebirth-multiplier').textContent = formatNumber(calculateRebirthMultiplier());
    document.getElementById('next-rebirth-points').textContent = formatNumber(Math.floor(Math.sqrt(game.totalCurrency / 1e6)));
    document.getElementById('rebirth-btn').disabled = Math.floor(Math.sqrt(game.totalCurrency / 1e6)) < 1;
}

function calculateRebirthMultiplier() {
    let multiplier = 1;
    multiplier *= 1 + Math.sqrt(game.rebirthPoints) / 10;
    
    for (const key in game.rebirthUpgrades) {
        if (game.rebirthUpgrades[key].owned > 0) {
            multiplier *= Math.pow(game.rebirthUpgrades[key].baseEffect, game.rebirthUpgrades[key].owned);
        }
    }
    
    return multiplier;
}

function formatNumber(num) {
    if (num < 1000) return Math.floor(num);
    if (num < 1e6) return (num / 1000).toFixed(1) + 'K';
    if (num < 1e9) return (num / 1e6).toFixed(1) + 'M';
    if (num < 1e12) return (num / 1e9).toFixed(1) + 'B';
    if (num < 1e15) return (num / 1e12).toFixed(1) + 'T';
    return (num / 1e15).toFixed(1) + 'Q';
}

function saveGame() {
    const saveData = {
        currency: game.currency,
        totalCurrency: game.totalCurrency,
        rebirths: game.rebirths,
        rebirthPoints: game.rebirthPoints,
        upgrades: game.upgrades,
        rebirthUpgrades: {},
        version: game.version
    };
    
    for (const key in game.rebirthUpgrades) {
        saveData.rebirthUpgrades[key] = {
            owned: game.rebirthUpgrades[key].owned
        };
    }
    
    localStorage.setItem('drimclicker_save', JSON.stringify(saveData));
    
    const saveBtn = document.getElementById('save-btn');
    saveBtn.textContent = 'Saved!';
    setTimeout(() => {
        saveBtn.textContent = 'Save Game';
    }, 2000);
}

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

function resetGame() {
    if (confirm('Are you sure you want to reset ALL progress? This cannot be undone!')) {
        localStorage.removeItem('drimclicker_save');
        location.reload();
    }
}

window.onload = initGame;
