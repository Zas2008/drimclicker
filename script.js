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
        generator13: {
        id: "generator13",
        name: "🌍 Planet",
        emoji: "🌍",
        baseCost: 1e14,
        costMultiplier: 6.15,
        baseEffect: 1.6e9,
        owned: 0,
        category: "generators",
        description: "An entire planet working for you"
    },
    generator14: {
        id: "generator14",
        name: "☀️ Star",
        emoji: "☀️",
        baseCost: 1e15,
        costMultiplier: 11.15,
        baseEffect: 1.6e10,
        owned: 0,
        category: "generators",
        description: "Harness stellar energy"
    },
    generator15: {
        id: "generator15",
        name: "🌌 Galaxy",
        emoji: "🌌",
        baseCost: 1e16,
        costMultiplier: 16.15,
        baseEffect: 1.6e11,
        owned: 0,
        category: "generators",
        description: "A galaxy of Drim production"
    },
    generator16: {
        id: "generator16",
        name: "🌀 Quasar",
        emoji: "🌀",
        baseCost: 1e17,
        costMultiplier: 21.15,
        baseEffect: 1.6e12,
        owned: 0,
        category: "generators",
        description: "Active galactic nucleus power"
    },
    generator17: {
        id: "generator17",
        name: "👁️ Beholder",
        emoji: "👁️",
        baseCost: 1e18,
        costMultiplier: 26.15,
        baseEffect: 1.6e13,
        owned: 0,
        category: "generators",
        description: "All-seeing eye of production"
    },
    generator18: {
        id: "generator18",
        name: "♾️ Infinity",
        emoji: "♾️",
        baseCost: 1e19,
        costMultiplier: 31.15,
        baseEffect: 1.6e14,
        owned: 0,
        category: "generators",
        description: "Infinite production potential"
    },
    generator19: {
        id: "generator19",
        name: "💫 Nebula",
        emoji: "💫",
        baseCost: 1e20,
        costMultiplier: 36.15,
        baseEffect: 1.6e15,
        owned: 0,
        category: "generators",
        description: "Stellar nursery of Drims"
    },
    generator20: {
        id: "generator20",
        name: "⚡ Zeus",
        emoji: "⚡",
        baseCost: 1e21,
        costMultiplier: 41.15,
        baseEffect: 1.6e16,
        owned: 0,
        category: "generators",
        description: "Godly production"
    },
    generator21: {
        id: "generator21",
        name: "🧿 Eldritch",
        emoji: "🧿",
        baseCost: 1e22,
        costMultiplier: 46.15,
        baseEffect: 1.6e17,
        owned: 0,
        category: "generators",
        description: "Unknowable production methods"
    },
    generator22: {
        id: "generator22",
        name: "🕰️ Chronos",
        emoji: "🕰️",
        baseCost: 1e23,
        costMultiplier: 51.15,
        baseEffect: 1.6e18,
        owned: 0,
        category: "generators",
        description: "Time itself produces for you"
    },
    generator23: {
        id: "generator23",
        name: "🌑 Dark Matter",
        emoji: "🌑",
        baseCost: 1e24,
        costMultiplier: 56.15,
        baseEffect: 1.6e19,
        owned: 0,
        category: "generators",
        description: "Invisible cosmic production"
    },
    generator24: {
        id: "generator24",
        name: "💥 Big Bang",
        emoji: "💥",
        baseCost: 1e25,
        costMultiplier: 61.15,
        baseEffect: 1.6e20,
        owned: 0,
        category: "generators",
        description: "Creation event production"
    },
    generator25: {
        id: "generator25",
        name: "🧬 DNA",
        emoji: "🧬",
        baseCost: 1e26,
        costMultiplier: 66.15,
        baseEffect: 1.6e21,
        owned: 0,
        category: "generators",
        description: "Biological production at scale"
    },
    generator26: {
        id: "generator26",
        name: "🖥️ Quantum Computer",
        emoji: "🖥️",
        baseCost: 1e27,
        costMultiplier: 71.15,
        baseEffect: 1.6e22,
        owned: 0,
        category: "generators",
        description: "Qubits working overtime"
    },
    generator27: {
        id: "generator27",
        name: "🧪 Singularity",
        emoji: "🧪",
        baseCost: 1e28,
        costMultiplier: 76.15,
        baseEffect: 1.6e23,
        owned: 0,
        category: "generators",
        description: "Technological explosion"
    },
    generator28: {
        id: "generator28",
        name: "📡 Dyson Sphere",
        emoji: "📡",
        baseCost: 1e29,
        costMultiplier: 81.15,
        baseEffect: 1.6e24,
        owned: 0,
        category: "generators",
        description: "Stellar energy harnessed"
    },
    generator29: {
        id: "generator29",
        name: "🛡️ Shield",
        emoji: "🛡️",
        baseCost: 1e30,
        costMultiplier: 86.15,
        baseEffect: 1.6e25,
        owned: 0,
        category: "generators",
        description: "Protective production"
    },
    generator30: {
        id: "generator30",
        name: "🎆 Firework",
        emoji: "🎆",
        baseCost: 1e31,
        costMultiplier: 91.15,
        baseEffect: 1.6e26,
        owned: 0,
        category: "generators",
        description: "Explosive production"
    },
    generator31: {
        id: "generator31",
        name: "🪐 Ring World",
        emoji: "🪐",
        baseCost: 1e32,
        costMultiplier: 96.15,
        baseEffect: 1.6e27,
        owned: 0,
        category: "generators",
        description: "Megastructure production"
    },
    generator32: {
        id: "generator32",
        name: "🔮 Oracle",
        emoji: "🔮",
        baseCost: 1e33,
        costMultiplier: 101.15,
        baseEffect: 1.6e28,
        owned: 0,
        category: "generators",
        description: "Sees future production"
    },
    generator33: {
        id: "generator33",
        name: "🏰 Castle",
        emoji: "🏰",
        baseCost: 1e34,
        costMultiplier: 106.15,
        baseEffect: 1.6e29,
        owned: 0,
        category: "generators",
        description: "Medieval production"
    },
    generator34: {
        id: "generator34",
        name: "🗿 Moai",
        emoji: "🗿",
        baseCost: 1e35,
        costMultiplier: 111.15,
        baseEffect: 1.6e30,
        owned: 0,
        category: "generators",
        description: "Ancient production"
    },
    generator35: {
        id: "generator35",
        name: "🧙 Wizard",
        emoji: "🧙",
        baseCost: 1e36,
        costMultiplier: 116.15,
        baseEffect: 1.6e31,
        owned: 0,
        category: "generators",
        description: "Magical production"
    },
    generator36: {
        id: "generator36",
        name: "🦄 Unicorn",
        emoji: "🦄",
        baseCost: 1e37,
        costMultiplier: 121.15,
        baseEffect: 1.6e32,
        owned: 0,
        category: "generators",
        description: "Mythical production"
    },
    generator37: {
        id: "generator37",
        name: "🐉 Dragon",
        emoji: "🐉",
        baseCost: 1e38,
        costMultiplier: 126.15,
        baseEffect: 1.6e33,
        owned: 0,
        category: "generators",
        description: "Legendary production"
    },
    generator38: {
        id: "generator38",
        name: "🏺 Amphora",
        emoji: "🏺",
        baseCost: 1e39,
        costMultiplier: 131.15,
        baseEffect: 1.6e34,
        owned: 0,
        category: "generators",
        description: "Ancient storage production"
    },
    generator39: {
        id: "generator39",
        name: "⚔️ Excalibur",
        emoji: "⚔️",
        baseCost: 1e40,
        costMultiplier: 136.15,
        baseEffect: 1.6e35,
        owned: 0,
        category: "generators",
        description: "Legendary sword production"
    },
    generator40: {
        id: "generator40",
        name: "🧭 Compass",
        emoji: "🧭",
        baseCost: 1e41,
        costMultiplier: 141.15,
        baseEffect: 1.6e36,
        owned: 0,
        category: "generators",
        description: "Guided production"
    },
    generator41: {
        id: "generator41",
        name: "🛡️ Aegis",
        emoji: "🛡️",
        baseCost: 1e42,
        costMultiplier: 146.15,
        baseEffect: 1.6e37,
        owned: 0,
        category: "generators",
        description: "Divine protection production"
    },
    generator42: {
        id: "generator42",
        name: "🏹 Artemis",
        emoji: "🏹",
        baseCost: 1e43,
        costMultiplier: 151.15,
        baseEffect: 1.6e38,
        owned: 0,
        category: "generators",
        description: "Huntress production"
    },
    generator43: {
        id: "generator43",
        name: "🔱 Poseidon",
        emoji: "🔱",
        baseCost: 1e44,
        costMultiplier: 156.15,
        baseEffect: 1.6e39,
        owned: 0,
        category: "generators",
        description: "Oceanic production"
    },
    generator44: {
        id: "generator44",
        name: "⚡ Thor",
        emoji: "⚡",
        baseCost: 1e45,
        costMultiplier: 161.15,
        baseEffect: 1.6e40,
        owned: 0,
        category: "generators",
        description: "Thunderous production"
    },
    generator45: {
        id: "generator45",
        name: "☘️ Shamrock",
        emoji: "☘️",
        baseCost: 1e46,
        costMultiplier: 166.15,
        baseEffect: 1.6e41,
        owned: 0,
        category: "generators",
        description: "Lucky production"
    },
    generator46: {
        id: "generator46",
        name: "🎭 Mask",
        emoji: "🎭",
        baseCost: 1e47,
        costMultiplier: 171.15,
        baseEffect: 1.6e42,
        owned: 0,
        category: "generators",
        description: "Dramatic production"
    },
    generator47: {
        id: "generator47",
        name: "🎪 Circus",
        emoji: "🎪",
        baseCost: 1e48,
        costMultiplier: 176.15,
        baseEffect: 1.6e43,
        owned: 0,
        category: "generators",
        description: "Entertaining production"
    },
    generator48: {
        id: "generator48",
        name: "🎲 Dice",
        emoji: "🎲",
        baseCost: 1e49,
        costMultiplier: 181.15,
        baseEffect: 1.6e44,
        owned: 0,
        category: "generators",
        description: "Random production"
    },
    generator49: {
        id: "generator49",
        name: "🃏 Joker",
        emoji: "🃏",
        baseCost: 1e50,
        costMultiplier: 186.15,
        baseEffect: 1.6e45,
        owned: 0,
        category: "generators",
        description: "Wild production"
    },
    generator50: {
        id: "generator50",
        name: "🎰 Slot Machine",
        emoji: "🎰",
        baseCost: 1e51,
        costMultiplier: 191.15,
        baseEffect: 1.6e46,
        owned: 0,
        category: "generators",
        description: "Jackpot production"
    },
    generator51: {
        id: "generator51",
        name: "🏆 Trophy",
        emoji: "🏆",
        baseCost: 1e52,
        costMultiplier: 196.15,
        baseEffect: 1.6e47,
        owned: 0,
        category: "generators",
        description: "Winning production"
    },
    generator52: {
        id: "generator52",
        name: "🎖️ Medal",
        emoji: "🎖️",
        baseCost: 1e53,
        costMultiplier: 201.15,
        baseEffect: 1.6e48,
        owned: 0,
        category: "generators",
        description: "Honorable production"
    },
    generator53: {
        id: "generator53",
        name: "🏅 Ribbon",
        emoji: "🏅",
        baseCost: 1e54,
        costMultiplier: 206.15,
        baseEffect: 1.6e49,
        owned: 0,
        category: "generators",
        description: "Decorative production"
    },
    generator54: {
        id: "generator54",
        name: "🎯 Dart",
        emoji: "🎯",
        baseCost: 1e55,
        costMultiplier: 211.15,
        baseEffect: 1.6e50,
        owned: 0,
        category: "generators",
        description: "Precise production"
    },
    generator55: {
        id: "generator55",
        name: "🪀 Yo-Yo",
        emoji: "🪀",
        baseCost: 1e56,
        costMultiplier: 216.15,
        baseEffect: 1.6e51,
        owned: 0,
        category: "generators",
        description: "Oscillating production"
    },
    generator56: {
        id: "generator56",
        name: "🪁 Kite",
        emoji: "🪁",
        baseCost: 1e57,
        costMultiplier: 221.15,
        baseEffect: 1.6e52,
        owned: 0,
        category: "generators",
        description: "Soaring production"
    },
    generator57: {
        id: "generator57",
        name: "🧵 Thread",
        emoji: "🧵",
        baseCost: 1e58,
        costMultiplier: 226.15,
        baseEffect: 1.6e53,
        owned: 0,
        category: "generators",
        description: "Woven production"
    },
    generator58: {
        id: "generator58",
        name: "🧶 Yarn",
        emoji: "🧶",
        baseCost: 1e59,
        costMultiplier: 231.15,
        baseEffect: 1.6e54,
        owned: 0,
        category: "generators",
        description: "Knitted production"
    },
    generator59: {
        id: "generator59",
        name: "🪡 Needle",
        emoji: "🪡",
        baseCost: 1e60,
        costMultiplier: 236.15,
        baseEffect: 1.6e55,
        owned: 0,
        category: "generators",
        description: "Pointed production"
    },
    generator60: {
        id: "generator60",
        name: "🧥 Coat",
        emoji: "🧥",
        baseCost: 1e61,
        costMultiplier: 241.15,
        baseEffect: 1.6e56,
        owned: 0,
        category: "generators",
        description: "Warm production"
    },
    generator61: {
        id: "generator61",
        name: "👑 Crown",
        emoji: "👑",
        baseCost: 1e62,
        costMultiplier: 246.15,
        baseEffect: 1.6e57,
        owned: 0,
        category: "generators",
        description: "Royal production"
    },
    generator62: {
        id: "generator62",
        name: "🎩 Hat",
        emoji: "🎩",
        baseCost: 1e63,
        costMultiplier: 251.15,
        baseEffect: 1.6e58,
        owned: 0,
        category: "generators",
        description: "Classy production"
    },
    generator63: {
        id: "generator63",
        name: "👒 Bonnet",
        emoji: "👒",
        baseCost: 1e64,
        costMultiplier: 256.15,
        baseEffect: 1.6e59,
        owned: 0,
        category: "generators",
        description: "Fancy production"
    },
    generator64: {
        id: "generator64",
        name: "🎓 Graduation",
        emoji: "🎓",
        baseCost: 1e65,
        costMultiplier: 261.15,
        baseEffect: 1.6e60,
        owned: 0,
        category: "generators",
        description: "Educated production"
    },
    generator65: {
        id: "generator65",
        name: "🧢 Cap",
        emoji: "🧢",
        baseCost: 1e66,
        costMultiplier: 266.15,
        baseEffect: 1.6e61,
        owned: 0,
        category: "generators",
        description: "Casual production"
    },
    generator66: {
        id: "generator66",
        name: "⛑️ Helmet",
        emoji: "⛑️",
        baseCost: 1e67,
        costMultiplier: 271.15,
        baseEffect: 1.6e62,
        owned: 0,
        category: "generators",
        description: "Protected production"
    },
    generator67: {
        id: "generator67",
        name: "📿 Prayer",
        emoji: "📿",
        baseCost: 1e68,
        costMultiplier: 276.15,
        baseEffect: 1.6e63,
        owned: 0,
        category: "generators",
        description: "Spiritual production"
    },
    generator68: {
        id: "generator68",
        name: "💍 Ring",
        emoji: "💍",
        baseCost: 1e69,
        costMultiplier: 281.15,
        baseEffect: 1.6e64,
        owned: 0,
        category: "generators",
        description: "Committed production"
    },
    generator69: {
        id: "generator69",
        name: "🌹 Rose",
        emoji: "🌹",
        baseCost: 1e70,
        costMultiplier: 286.15,
        baseEffect: 1.6e65,
        owned: 0,
        category: "generators",
        description: "Romantic production"
    },
    generator70: {
        id: "generator70",
        name: "🥀 Wilted",
        emoji: "🥀",
        baseCost: 1e71,
        costMultiplier: 291.15,
        baseEffect: 1.6e66,
        owned: 0,
        category: "generators",
        description: "Fading production"
    },
    generator71: {
        id: "generator71",
        name: "🌺 Hibiscus",
        emoji: "🌺",
        baseCost: 1e72,
        costMultiplier: 296.15,
        baseEffect: 1.6e67,
        owned: 0,
        category: "generators",
        description: "Tropical production"
    },
    generator72: {
        id: "generator72",
        name: "🌻 Sunflower",
        emoji: "🌻",
        baseCost: 1e73,
        costMultiplier: 301.15,
        baseEffect: 1.6e68,
        owned: 0,
        category: "generators",
        description: "Solar production"
    },
    generator73: {
        id: "generator73",
        name: "🌼 Blossom",
        emoji: "🌼",
        baseCost: 1e74,
        costMultiplier: 306.15,
        baseEffect: 1.6e69,
        owned: 0,
        category: "generators",
        description: "Flowering production"
    },
    generator74: {
        id: "generator74",
        name: "🌸 Cherry",
        emoji: "🌸",
        baseCost: 1e75,
        costMultiplier: 311.15,
        baseEffect: 1.6e70,
        owned: 0,
        category: "generators",
        description: "Delicate production"
    },
    generator75: {
        id: "generator75",
        name: "💮 White",
        emoji: "💮",
        baseCost: 1e76,
        costMultiplier: 316.15,
        baseEffect: 1.6e71,
        owned: 0,
        category: "generators",
        description: "Pure production"
    },
    generator76: {
        id: "generator76",
        name: "🏵️ Rosette",
        emoji: "🏵️",
        baseCost: 1e77,
        costMultiplier: 321.15,
        baseEffect: 1.6e72,
        owned: 0,
        category: "generators",
        description: "Decorative production"
    },
    generator77: {
        id: "generator77",
        name: "🌵 Cactus",
        emoji: "🌵",
        baseCost: 1e78,
        costMultiplier: 326.15,
        baseEffect: 1.6e73,
        owned: 0,
        category: "generators",
        description: "Prickly production"
    },
    generator78: {
        id: "generator78",
        name: "🎄 Tree",
        emoji: "🎄",
        baseCost: 1e79,
        costMultiplier: 331.15,
        baseEffect: 1.6e74,
        owned: 0,
        category: "generators",
        description: "Festive production"
    },
    generator79: {
        id: "generator79",
        name: "🌲 Evergreen",
        emoji: "🌲",
        baseCost: 1e80,
        costMultiplier: 336.15,
        baseEffect: 1.6e75,
        owned: 0,
        category: "generators",
        description: "Perennial production"
    },
    generator80: {
        id: "generator80",
        name: "🌳 Deciduous",
        emoji: "🌳",
        baseCost: 1e81,
        costMultiplier: 341.15,
        baseEffect: 1.6e76,
        owned: 0,
        category: "generators",
        description: "Seasonal production"
    },
    generator81: {
        id: "generator81",
        name: "🌴 Palm",
        emoji: "🌴",
        baseCost: 1e82,
        costMultiplier: 346.15,
        baseEffect: 1.6e77,
        owned: 0,
        category: "generators",
        description: "Tropical production"
    },
    generator82: {
        id: "generator82",
        name: "🌱 Seedling",
        emoji: "🌱",
        baseCost: 1e83,
        costMultiplier: 351.15,
        baseEffect: 1.6e78,
        owned: 0,
        category: "generators",
        description: "Growing production"
    },
    generator83: {
        id: "generator83",
        name: "🍀 Clover",
        emoji: "🍀",
        baseCost: 1e84,
        costMultiplier: 356.15,
        baseEffect: 1.6e79,
        owned: 0,
        category: "generators",
        description: "Lucky production"
    },
    generator84: {
        id: "generator84",
        name: "🍁 Maple",
        emoji: "🍁",
        baseCost: 1e85,
        costMultiplier: 361.15,
        baseEffect: 1.6e80,
        owned: 0,
        category: "generators",
        description: "Canadian production"
    },
    generator85: {
        id: "generator85",
        name: "🍂 Fallen",
        emoji: "🍂",
        baseCost: 1e86,
        costMultiplier: 366.15,
        baseEffect: 1.6e81,
        owned: 0,
        category: "generators",
        description: "Autumnal production"
    },
    generator86: {
        id: "generator86",
        name: "🍃 Leaf",
        emoji: "🍃",
        baseCost: 1e87,
        costMultiplier: 371.15,
        baseEffect: 1.6e82,
        owned: 0,
        category: "generators",
        description: "Fluttering production"
    },
    generator87: {
        id: "generator87",
        name: "🍇 Grapes",
        emoji: "🍇",
        baseCost: 1e88,
        costMultiplier: 376.15,
        baseEffect: 1.6e83,
        owned: 0,
        category: "generators",
        description: "Vineyard production"
    },
    generator88: {
        id: "generator88",
        name: "🍈 Melon",
        emoji: "🍈",
        baseCost: 1e89,
        costMultiplier: 381.15,
        baseEffect: 1.6e84,
        owned: 0,
        category: "generators",
        description: "Juicy production"
    },
    generator89: {
        id: "generator89",
        name: "🍉 Watermelon",
        emoji: "🍉",
        baseCost: 1e90,
        costMultiplier: 386.15,
        baseEffect: 1.6e85,
        owned: 0,
        category: "generators",
        description: "Refreshing production"
    },
    generator90: {
        id: "generator90",
        name: "🍊 Orange",
        emoji: "🍊",
        baseCost: 1e91,
        costMultiplier: 391.15,
        baseEffect: 1.6e86,
        owned: 0,
        category: "generators",
        description: "Citrus production"
    },
    generator91: {
        id: "generator91",
        name: "🍋 Lemon",
        emoji: "🍋",
        baseCost: 1e92,
        costMultiplier: 396.15,
        baseEffect: 1.6e87,
        owned: 0,
        category: "generators",
        description: "Sour production"
    },
    generator92: {
        id: "generator92",
        name: "🍌 Banana",
        emoji: "🍌",
        baseCost: 1e93,
        costMultiplier: 401.15,
        baseEffect: 1.6e88,
        owned: 0,
        category: "generators",
        description: "Potassium production"
    },
    generator93: {
        id: "generator93",
        name: "🍍 Pineapple",
        emoji: "🍍",
        baseCost: 1e94,
        costMultiplier: 406.15,
        baseEffect: 1.6e89,
        owned: 0,
        category: "generators",
        description: "Spiky production"
    },
    generator94: {
        id: "generator94",
        name: "🥭 Mango",
        emoji: "🥭",
        baseCost: 1e95,
        costMultiplier: 411.15,
        baseEffect: 1.6e90,
        owned: 0,
        category: "generators",
        description: "Tropical production"
    },
    generator95: {
        id: "generator95",
        name: "🍎 Apple",
        emoji: "🍎",
        baseCost: 1e96,
        costMultiplier: 416.15,
        baseEffect: 1.6e91,
        owned: 0,
        category: "generators",
        description: "Fruity production"
    },
    generator96: {
        id: "generator96",
        name: "🍏 Pear",
        emoji: "🍏",
        baseCost: 1e97,
        costMultiplier: 421.15,
        baseEffect: 1.6e92,
        owned: 0,
        category: "generators",
        description: "Green production"
    },
    generator97: {
        id: "generator97",
        name: "🍐 Peach",
        emoji: "🍐",
        baseCost: 1e98,
        costMultiplier: 426.15,
        baseEffect: 1.6e93,
        owned: 0,
        category: "generators",
        description: "Fuzzy production"
    },
    multiplier1: {
        id: "multiplier1",
        name: "✨ Polish",
        emoji: "✨",
        baseCost: 100,
        costMultiplier: 1500000000000,
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
        costMultiplier: 15000000000000,
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
        costMultiplier: 150000000000000,
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
        costMultiplier: 1500000000000000,
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
        costMultiplier: 15000000000000000,
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
        costMultiplier: 2000000000000,
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
        costMultiplier: 20000000000000,
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
        costMultiplier: 200000000000000,
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
        costMultiplier: 2000000000000000,
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
        costMultiplier: 20000000000000000,
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
        costMultiplier: 150,
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
        costMultiplier: 1500,
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
        costMultiplier: 15000,
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
        costMultiplier: 150000,
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
        costMultiplier: 1500000,
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
