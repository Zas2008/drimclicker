const game = {
    currency: 0,
    totalCurrency: 0,
    rebirths: 0,
    rebirthPoints: 0,
    lastTick: Date.now(),
    dps: 0,
    upgrades: {},
    rebirthUpgrades: {},
    shopItems: {},
    inventory: [],
    version: 1
};

const upgrades = {
    generator1: { id: "generator1", name: "👷 Worker", emoji: "👷", baseCost: 10, costMultiplier: 1.15, baseEffect: 0.1, owned: 0, category: "generators", description: "A basic worker that generates Drims" },
    generator2: { id: "generator2", name: "🏭 Factory", emoji: "🏭", baseCost: 100, costMultiplier: 1.15, baseEffect: 1, owned: 0, category: "generators", description: "Produces Drims at a steady rate" },
    generator3: { id: "generator3", name: "🏦 Bank", emoji: "🏦", baseCost: 1100, costMultiplier: 1.15, baseEffect: 8, owned: 0, category: "generators", description: "Generates Drims with interest" },
    generator4: { id: "generator4", name: "🚀 Rocket", emoji: "🚀", baseCost: 12000, costMultiplier: 1.15, baseEffect: 47, owned: 0, category: "generators", description: "Space-age Drim generation" },
    generator5: { id: "generator5", name: "🛸 UFO", emoji: "🛸", baseCost: 130000, costMultiplier: 1.15, baseEffect: 260, owned: 0, category: "generators", description: "Alien technology for Drim production" },
    generator6: { id: "generator6", name: "🌌 Wormhole", emoji: "🌌", baseCost: 1.4e6, costMultiplier: 1.15, baseEffect: 1400, owned: 0, category: "generators", description: "Harness the power of spacetime" },
    generator7: { id: "generator7", name: "⚛️ Atom", emoji: "⚛️", baseCost: 2e7, costMultiplier: 1.15, baseEffect: 7800, owned: 0, category: "generators", description: "Quantum Drim generation" },
    generator8: { id: "generator8", name: "🧠 AI", emoji: "🧠", baseCost: 3.3e8, costMultiplier: 1.15, baseEffect: 44000, owned: 0, category: "generators", description: "Artificial Intelligence optimizing Drims" },
    generator9: { id: "generator9", name: "🕳️ Black Hole", emoji: "🕳️", baseCost: 5.1e9, costMultiplier: 1.15, baseEffect: 260000, owned: 0, category: "generators", description: "Infinite density of Drims" },
    generator10: { id: "generator10", name: "🌠 Cosmic", emoji: "🌠", baseCost: 7.5e10, costMultiplier: 1.15, baseEffect: 1.6e6, owned: 0, category: "generators", description: "Harness the power of the cosmos" },
    generator11: { id: "generator11", name: "🌍 Planet", emoji: "🌍", baseCost: 1e12, costMultiplier: 1.15, baseEffect: 1e7, owned: 0, category: "generators", description: "A whole planet generating Drims" },
    generator12: { id: "generator12", name: "☀️ Star", emoji: "☀️", baseCost: 1e13, costMultiplier: 1.15, baseEffect: 8e7, owned: 0, category: "generators", description: "Stellar Drim production" },
    generator13: { id: "generator13", name: "🌙 Moon", emoji: "🌙", baseCost: 1e14, costMultiplier: 1.15, baseEffect: 6e8, owned: 0, category: "generators", description: "Lunar Drim mining" },
    generator14: { id: "generator14", name: "🪐 Saturn", emoji: "🪐", baseCost: 1e15, costMultiplier: 1.15, baseEffect: 4.5e9, owned: 0, category: "generators", description: "Ringed planet Drim factory" },
    generator15: { id: "generator15", name: "🌀 Galaxy", emoji: "🌀", baseCost: 1e16, costMultiplier: 1.15, baseEffect: 3.2e10, owned: 0, category: "generators", description: "Galactic Drim production" },
    multiplier1: { id: "multiplier1", name: "📈 Boost", emoji: "📈", baseCost: 1000, costMultiplier: 1, baseEffect: 0.1, owned: 0, category: "multipliers", description: "Permanently increases all generator output by 10%" },
    multiplier2: { id: "multiplier2", name: "🚀 Thruster", emoji: "🚀", baseCost: 5000, costMultiplier: 1, baseEffect: 0.25, owned: 0, category: "multipliers", description: "Permanently increases all generator output by 25%" },
    multiplier3: { id: "multiplier3", name: "⚡ Surge", emoji: "⚡", baseCost: 25000, costMultiplier: 1, baseEffect: 0.5, owned: 0, category: "multipliers", description: "Permanently increases all generator output by 50%" },
    multiplier4: { id: "multiplier4", name: "🌌 Quantum", emoji: "🌌", baseCost: 100000, costMultiplier: 1, baseEffect: 1, owned: 0, category: "multipliers", description: "Permanently doubles all generator output" },
    special1: { id: "special1", name: "🎯 Precision", emoji: "🎯", baseCost: 500, costMultiplier: 1, baseEffect: 1, owned: 0, category: "special", description: "Clicking gives +1 more Drims (one-time)" },
    special2: { id: "special2", name: "🤲 Double", emoji: "🤲", baseCost: 5000, costMultiplier: 1, baseEffect: 2, owned: 0, category: "special", description: "Double all your current Drims (one-time)" },
    special3: { id: "special3", name: "🔁 Loop", emoji: "🔁", baseCost: 50000, costMultiplier: 1, baseEffect: 0.1, owned: 0, category: "special", description: "Generators produce +10% more Drims (one-time)" },
    special4: { id: "special4", name: "🎲 Lucky", emoji: "🎲", baseCost: 5e5, costMultiplier: 1, baseEffect: 0.05, owned: 0, category: "special", description: "+5% chance for 10x click value (one-time)" },
    special5: { id: "special5", name: "⌛ Time", emoji: "⌛", baseCost: 5e6, costMultiplier: 1, baseEffect: 0.5, owned: 0, category: "special", description: "Time flows +50% faster (one-time)" }
};

const rebirthUpgrades = {
    rb1: { id: "rb1", name: "🚀 Starter", emoji: "🚀", baseCost: 1, costMultiplier: 1.5, baseEffect: 100, owned: 0, description: "Each level gives +100 Drims when you rebirth" },
    rb2: { id: "rb2", name: "💰 Investor", emoji: "💰", baseCost: 3, costMultiplier: 1.5, baseEffect: 0.1, owned: 0, description: "Each level makes generators produce +10% more Drims" },
    rb3: { id: "rb3", name: "⚡ Energize", emoji: "⚡", baseCost: 5, costMultiplier: 1.5, baseEffect: 1, owned: 0, description: "Each level makes clicking give +1 more Drims" },
    rb4: { id: "rb4", name: "♾️ Infinite", emoji: "♾️", baseCost: 10, costMultiplier: 1.5, baseEffect: 0.01, owned: 0, description: "Each level gives +1% to all Drim production" },
    rb5: { id: "rb5", name: "🌌 Cosmic", emoji: "🌌", baseCost: 20, costMultiplier: 1.5, baseEffect: 0.05, owned: 0, description: "Each level gives +5% to all Drim production" },
    rb6: { id: "rb6", name: "🌟 Supernova", emoji: "🌟", baseCost: 50, costMultiplier: 1.5, baseEffect: 0.1, owned: 0, description: "Each level gives +10% to all Drim production" },
    rb7: { id: "rb7", name: "⚛️ Quantum", emoji: "⚛️", baseCost: 100, costMultiplier: 1.5, baseEffect: 0.2, owned: 0, description: "Each level gives +20% to all Drim production" },
    rb8: { id: "rb8", name: "🌀 Vortex", emoji: "🌀", baseCost: 200, costMultiplier: 1.5, baseEffect: 0.5, owned: 0, description: "Each level gives +50% to all Drim production" },
    rb9: { id: "rb9", name: "💥 Big Bang", emoji: "💥", baseCost: 500, costMultiplier: 1.5, baseEffect: 1, owned: 0, description: "Each level gives +100% to all Drim production" },
    rb10: { id: "rb10", name: "👑 Supreme", emoji: "👑", baseCost: 1000, costMultiplier: 1.5, baseEffect: 2, owned: 0, description: "Each level gives +200% to all Drim production" }
};

const shopItems = {
    item1: { id: "item1", name: "🍎 Apple", emoji: "🍎", baseCost: 100, description: "A shiny red apple" },
    item2: { id: "item2", name: "🍌 Banana", emoji: "🍌", baseCost: 200, description: "A yellow curved fruit" },
    item3: { id: "item3", name: "🍕 Pizza", emoji: "🍕", baseCost: 500, description: "A delicious pizza slice" },
    item4: { id: "item4", name: "🍔 Burger", emoji: "🍔", baseCost: 800, description: "A juicy hamburger" },
    item5: { id: "item5", name: "🍦 Ice Cream", emoji: "🍦", baseCost: 300, description: "Sweet frozen treat" },
    item6: { id: "item6", name: "🍩 Donut", emoji: "🍩", baseCost: 250, description: "A ring-shaped pastry" },
    item7: { id: "item7", name: "☕ Coffee", emoji: "☕", baseCost: 150, description: "Hot brewed drink" },
    item8: { id: "item8", name: "🍵 Tea", emoji: "🍵", baseCost: 120, description: "Aromatic beverage" },
    item9: { id: "item9", name: "🍺 Beer", emoji: "🍺", baseCost: 400, description: "Fermented alcoholic drink" },
    item10: { id: "item10", name: "🍷 Wine", emoji: "🍷", baseCost: 700, description: "Fermented grape juice" }
};

function getMultiplierForUpgrade(upgrade) {
    let multiplier = 1;
    
    if (game.rebirthUpgrades.rb2.owned > 0) {
        multiplier += game.rebirthUpgrades.rb2.baseEffect * game.rebirthUpgrades.rb2.owned;
    }
    
    if (game.upgrades.special3.owned > 0 && upgrade.category === "generators") {
        multiplier += game.upgrades.special3.baseEffect;
    }
    
    if (game.rebirthUpgrades.rb4.owned > 0) {
        multiplier += game.rebirthUpgrades.rb4.baseEffect * game.rebirthUpgrades.rb4.owned;
    }
    
    if (game.rebirthUpgrades.rb5.owned > 0) {
        multiplier += game.rebirthUpgrades.rb5.baseEffect * game.rebirthUpgrades.rb5.owned;
    }
    
    for (const key in game.upgrades) {
        const up = game.upgrades[key];
        if (up.category === 'multipliers' && up.owned > 0) {
            multiplier += up.baseEffect;
        }
    }
    
    return multiplier;
}

function handleClick() {
    let clickValue = 1;
    
    if (game.upgrades.special1.owned > 0) {
        clickValue += game.upgrades.special1.baseEffect;
    }
    
    if (game.rebirthUpgrades.rb3.owned > 0) {
        clickValue += game.rebirthUpgrades.rb3.baseEffect * game.rebirthUpgrades.rb3.owned;
    }
    
    if (game.upgrades.special4.owned > 0 && Math.random() < game.upgrades.special4.baseEffect) {
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

function calculateDPS() {
    let dps = 0;
    
    for (const key in game.upgrades) {
        const upgrade = game.upgrades[key];
        if (upgrade.category === 'generators' && upgrade.owned > 0) {
            const baseValue = upgrade.baseEffect * upgrade.owned;
            const multiplier = getMultiplierForUpgrade(upgrade);
            dps += baseValue * multiplier;
        }
    }
    
    if (game.upgrades.special5.owned > 0) {
        dps *= (1 + game.upgrades.special5.baseEffect);
    }
    
    game.dps = dps;
}

function formatUpgradeEffect(upgrade) {
    if (upgrade.category === 'generators') {
        const baseValue = upgrade.baseEffect;
        const multiplier = getMultiplierForUpgrade(upgrade);
        return `${formatNumber(baseValue * multiplier)}/s`;
    } else if (upgrade.category === 'multipliers') {
        return `+${(upgrade.baseEffect * 100)}% to all generators`;
    } else if (upgrade.category === 'special') {
        if (upgrade.id === 'special1') {
            return `+${upgrade.baseEffect} Drims per click`;
        } else if (upgrade.id === 'special3') {
            return `+${(upgrade.baseEffect * 100)}% to generators`;
        } else if (upgrade.id === 'special4') {
            return `${(upgrade.baseEffect * 100)}% chance for 10x`;
        } else if (upgrade.id === 'special5') {
            return `+${(upgrade.baseEffect * 100)}% speed`;
        } else {
            return `${upgrade.baseEffect}x`;
        }
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
            if (game.upgrades[key].category !== 'multipliers' && game.upgrades[key].category !== 'special') {
                game.upgrades[key].owned = 0;
            }
        }
        
        if (game.rebirthUpgrades.rb1.owned > 0) {
            game.currency = game.rebirthUpgrades.rb1.baseEffect * game.rebirthUpgrades.rb1.owned;
        }
        
        renderUpgrades();
        renderRebirthUpgrades();
        calculateDPS();
        updateUI();
    }
}

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
    
    for (const key in shopItems) {
        if (!game.shopItems[key]) {
            game.shopItems[key] = {...shopItems[key]};
        }
    }
    
    loadGame();
    game.lastTick = Date.now();
    requestAnimationFrame(gameLoop);
    calculateDPS();
    updateUI();
    renderUpgrades();
    renderRebirthUpgrades();
    renderShop();
    renderInventory();
}

function gameLoop() {
    const now = Date.now();
    const deltaTime = (now - game.lastTick) / 1000;
    
    if (deltaTime > 0) {
        const income = game.dps * deltaTime;
        game.currency += income;
        game.totalCurrency += income;
    }
    
    game.lastTick = now;
    updateUI();
    requestAnimationFrame(gameLoop);
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
    
    const shopBtn = document.createElement('button');
    shopBtn.className = 'tab-btn';
    shopBtn.setAttribute('data-tab', 'shop');
    shopBtn.textContent = 'Shop';
    shopBtn.addEventListener('click', openShop);
    document.querySelector('.tabs').appendChild(shopBtn);
    
    const inventoryBtn = document.createElement('button');
    inventoryBtn.className = 'tab-btn';
    inventoryBtn.setAttribute('data-tab', 'inventory');
    inventoryBtn.textContent = 'Inventory';
    inventoryBtn.addEventListener('click', openInventory);
    document.querySelector('.tabs').appendChild(inventoryBtn);
    
    const shopTab = document.createElement('div');
    shopTab.className = 'tab-content';
    shopTab.id = 'shop-tab';
    shopTab.innerHTML = '<div class="upgrades-grid" id="shop-container"></div>';
    document.querySelector('.upgrades-section').appendChild(shopTab);
    
    const inventoryTab = document.createElement('div');
    inventoryTab.className = 'tab-content';
    inventoryTab.id = 'inventory-tab';
    inventoryTab.innerHTML = '<div class="upgrades-grid" id="inventory-container"></div>';
    document.querySelector('.upgrades-section').appendChild(inventoryTab);
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
    
    const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned));
    
    if (game.currency < cost) {
        element.classList.add('unaffordable');
    }
    
    if ((upgrade.category === 'multipliers' || upgrade.category === 'special') && upgrade.owned > 0) {
        element.classList.add('owned');
    }
    
    element.addEventListener('click', () => purchaseUpgrade(upgrade.id));
    
    element.innerHTML = `
        <div class="upgrade-emoji">${upgrade.emoji}</div>
        <div class="upgrade-name">${upgrade.name}</div>
        <div class="upgrade-price">${formatNumber(cost)} Drims</div>
        <div class="upgrade-owned">${upgrade.category === 'multipliers' || upgrade.category === 'special' ? 
            (upgrade.owned > 0 ? 'Owned' : 'Not Owned') : `Owned: ${upgrade.owned}`}</div>
        <div class="upgrade-effect">Effect: ${formatUpgradeEffect(upgrade)}</div>
        <div class="tooltip">${upgrade.description}</div>
    `;
    
    return element;
}

function purchaseUpgrade(upgradeId) {
    const upgrade = game.upgrades[upgradeId];
    const cost = Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned));
    
    if (game.currency >= cost && (upgrade.category !== 'multipliers' && upgrade.category !== 'special' || upgrade.owned === 0)) {
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
            <div class="upgrade-effect">Effect: +${(upgrade.baseEffect * upgrade.owned * 100)}%</div>
            <div class="tooltip">${upgrade.description}</div>
        `;
        
        element.addEventListener('click', () => purchaseRebirthUpgrade(upgrade.id));
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

function renderShop() {
    const container = document.getElementById('shop-container');
    container.innerHTML = '';
    
    for (const key in game.shopItems) {
        const item = game.shopItems[key];
        const element = document.createElement('div');
        element.className = 'shop-item';
        
        if (game.currency < item.baseCost) {
            element.classList.add('unaffordable');
        }
        
        element.innerHTML = `
            <div class="item-emoji">${item.emoji}</div>
            <div class="item-name">${item.name}</div>
            <div class="item-price">${formatNumber(item.baseCost)} Drims</div>
            <div class="tooltip">${item.description}</div>
        `;
        
        element.addEventListener('click', () => purchaseShopItem(item.id));
        container.appendChild(element);
    }
}

function purchaseShopItem(itemId) {
    const item = game.shopItems[itemId];
    
    if (game.currency >= item.baseCost) {
        game.currency -= item.baseCost;
        game.inventory.push({...item});
        updateUI();
        renderInventory();
    }
}

function renderInventory() {
    const container = document.getElementById('inventory-container');
    container.innerHTML = '';
    
    if (game.inventory.length === 0) {
        container.innerHTML = '<div class="empty-inventory">Your inventory is empty</div>';
        return;
    }
    
    const groupedItems = {};
    game.inventory.forEach(item => {
        if (!groupedItems[item.id]) {
            groupedItems[item.id] = {...item, count: 0};
        }
        groupedItems[item.id].count++;
    });
    
    for (const key in groupedItems) {
        const item = groupedItems[key];
        const element = document.createElement('div');
        element.className = 'inventory-item';
        element.innerHTML = `
            <div class="item-emoji">${item.emoji}</div>
            <div class="item-name">${item.name} (x${item.count})</div>
            <div class="tooltip">${item.description}</div>
        `;
        container.appendChild(element);
    }
}

function openShop() {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    
    document.querySelector('.tab-btn[data-tab="shop"]').classList.add('active');
    document.getElementById('shop-tab').classList.add('active');
    renderShop();
}

function openInventory() {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    
    document.querySelector('.tab-btn[data-tab="inventory"]').classList.add('active');
    document.getElementById('inventory-tab').classList.add('active');
    renderInventory();
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
            multiplier *= (1 + game.rebirthUpgrades[key].baseEffect * game.rebirthUpgrades[key].owned);
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
    if (num < 1e18) return (num / 1e15).toFixed(1) + 'Qa';
    if (num < 1e21) return (num / 1e18).toFixed(1) + 'Qi';
    return (num / 1e21).toFixed(1) + 'Sx';
}

function saveGame() {
    const saveData = {
        currency: game.currency,
        totalCurrency: game.totalCurrency,
        rebirths: game.rebirths,
        rebirthPoints: game.rebirthPoints,
        upgrades: game.upgrades,
        rebirthUpgrades: game.rebirthUpgrades,
        inventory: game.inventory,
        version: game.version
    };
    
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
                game.inventory = parsed.inventory || [];
                
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

window.onload = function() {
    initGame();
    setupUI();
};
