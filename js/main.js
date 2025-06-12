// MEMPHIS RAINBOW CULT-BRUTALIST WUBBLETON

// Images from the collection
const wubbletonImages = [
    '00bf51e2-9869-11ef-b116-0242ac16000e.jpeg',
    '09236afa-9fba-11ef-8ddc-0242c0a80010.jpeg',
    '0a01947c-a4a8-11ef-ad09-0242c0a8d00e.jpeg',
    '103ec612-a10a-11ef-8ddc-0242c0a80010.jpeg',
    '1c504fc2-a1d5-11ef-803f-0242c0a8400f.jpeg',
    '1cd84396-9e56-11ef-8ddc-0242c0a80010.jpeg',
    '2312476a-ad66-11ef-aae9-0242ac13000e.jpeg',
    '2a9f5660-9f35-11ef-8ddc-0242c0a80010.jpeg',
    '2e7759c4-9f92-11ef-8ddc-0242c0a80010.jpeg',
    '3f6bedae-b332-11ef-8a3e-0242c0a8400e.jpeg',
    '4884628c-9fe5-11ef-8ddc-0242c0a80010.jpeg',
    '59d4a582-9e38-11ef-8ddc-0242c0a80010.jpeg',
    '5e0dd0ae-a0fb-11ef-8ddc-0242c0a80010.jpeg',
    '66446e86-a123-11ef-8ddc-0242c0a80010.jpeg',
    '6c999ad0-addb-11ef-aae9-0242ac13000e.jpeg',
    '7234c7da-a42b-11ef-9157-0242c0a8d00e.jpeg',
    '748ed692-b655-11ef-966f-0242c0a8700f.jpeg',
    '7cdb2d7e-aaf1-11ef-aae9-0242ac13000e.jpeg',
    '91bdf656-ab2b-11ef-aae9-0242ac13000e.jpeg',
    '93c6c5e6-9fb8-11ef-8ddc-0242c0a80010.jpeg',
    '9adb01de-9b86-11ef-b116-0242ac16000e.jpeg',
    '9cc02bc0-add6-11ef-aae9-0242ac13000e.jpeg',
    '9f8988f2-a0bf-11ef-8ddc-0242c0a80010.jpeg',
    'a21e21cc-ad35-11ef-aae9-0242ac13000e.jpeg',
    'a83edb22-b2c2-11ef-9d24-0242c0a8400e.jpeg',
    'b995a3ac-94df-11ef-9158-0242ac13000e.jpeg',
    'c269dde6-94fc-11ef-9158-0242ac13000e.jpeg',
    'c5837a50-a118-11ef-8ddc-0242c0a80010.jpeg',
    'd172a8c0-9521-11ef-9158-0242ac13000e.jpeg',
    'd47d31e2-9383-11ef-9158-0242ac13000e.jpeg',
    'd95e9a14-ac99-11ef-aae9-0242ac13000e.jpeg',
    'e3ea3648-ab2a-11ef-aae9-0242ac13000e.jpeg',
    'e654d4b6-aac0-11ef-aae9-0242ac13000e.jpeg',
    'e9d961fe-8f1f-11ef-9158-0242ac13000e.jpeg',
    'ea7aea26-a1bf-11ef-927a-0242c0a8400f.jpeg',
    'ebb6664c-9eac-11ef-8ddc-0242c0a80010.jpeg',
    'edcf4490-937f-11ef-9158-0242ac13000e.jpeg',
    'f17254fc-9f55-11ef-8ddc-0242c0a80010.jpeg',
    'f9450ce2-adab-11ef-aae9-0242ac13000e.jpeg'
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadCollectionPreview();
    initCultEffects();
    initRainbowCursor();
    initHoverSounds();
    initMemphisFloaters();
    initCultMessages();
    smoothScroll();
});

// Load collection preview with Memphis style
function loadCollectionPreview() {
    const collectionGrid = document.getElementById('collectionGrid');
    if (!collectionGrid) return;
    
    // Show 12 pieces
    const shuffled = [...wubbletonImages].sort(() => Math.random() - 0.5);
    const previewImages = shuffled.slice(0, 12);
    
    previewImages.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'collection-item';
        
        item.innerHTML = `
            <img src="images/${img}" alt="Sacred Relic #${index + 1000}" loading="lazy">
            <div class="collection-info">
                <div class="collection-number">SOUL #${index + 1000}</div>
                <div class="collection-title">FRAGMENT ${index + 1000}</div>
            </div>
        `;
        
        // Add click handler for zoom sound
        item.addEventListener('click', () => {
            playBoomboxThud();
            item.style.transform = 'scale(1.1) rotate(0deg)';
            setTimeout(() => {
                item.style.transform = '';
            }, 300);
        });
        
        collectionGrid.appendChild(item);
    });
}

// Cult message effects
function initCultEffects() {
    // Random cult messages
    const cultMessages = [
        "THE AWAKENING IS NOW",
        "JOIN THE COLLECTIVE",
        "REALITY IS MALLEABLE",
        "YOU ARE CHOSEN",
        "TRANSCEND THE DIGITAL",
        "EMBRACE THE MIRROR",
        "THE FUTURE IS OURS"
    ];
    
    // Flash random messages occasionally
    setInterval(() => {
        if (Math.random() > 0.95) {
            const message = cultMessages[Math.floor(Math.random() * cultMessages.length)];
            flashCultMessage(message);
        }
    }, 10000);
}

// Flash cult message
function flashCultMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'cult-message';
    msgDiv.textContent = text;
    msgDiv.style.fontSize = `${3 + Math.random() * 3}rem`;
    msgDiv.style.color = `var(--${['hot-pink', 'electric-blue', 'acid-yellow', 'toxic-green', 'purple-rain'][Math.floor(Math.random() * 5)]})`;
    document.body.appendChild(msgDiv);
    
    setTimeout(() => msgDiv.remove(), 3000);
}

// Rainbow cursor trail
function initRainbowCursor() {
    const colors = ['var(--hot-pink)', 'var(--electric-blue)', 'var(--acid-yellow)', 'var(--toxic-green)', 'var(--purple-rain)'];
    let colorIndex = 0;
    
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.9) {
            const spark = document.createElement('div');
            spark.style.cssText = `
                position: fixed;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                width: 8px;
                height: 8px;
                background: ${colors[colorIndex % colors.length]};
                pointer-events: none;
                z-index: 9999;
                animation: fade-out 1s ease-out forwards;
            `;
            document.body.appendChild(spark);
            colorIndex++;
            
            setTimeout(() => spark.remove(), 1000);
        }
    });
}

// Boombox thud sound effect
function playBoomboxThud() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create oscillator for bass thud
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(60, audioContext.currentTime); // Deep bass
    oscillator.frequency.exponentialRampToValueAtTime(20, audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
}

// Hover sounds
function initHoverSounds() {
    // High-pitched beeps on hover
    document.querySelectorAll('a, button, .stat, .poster, .collection-item').forEach(element => {
        element.addEventListener('mouseenter', () => {
            playBeep(800 + Math.random() * 400, 30);
        });
        
        element.addEventListener('click', () => {
            playBoomboxThud();
        });
    });
}

// Beep sound generator
function playBeep(frequency = 440, duration = 50) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'square';
    oscillator.frequency.value = frequency;
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
}

// Memphis floating shapes
function initMemphisFloaters() {
    const shapes = ['circle', 'triangle', 'square', 'zigzag'];
    const colors = ['hot-pink', 'electric-blue', 'acid-yellow', 'toxic-green', 'purple-rain'];
    
    // Create more shapes
    for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.className = 'memphis-shape';
        
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        shape.style.cssText = `
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            width: ${50 + Math.random() * 100}px;
            height: ${50 + Math.random() * 100}px;
            background: var(--${color});
            animation-duration: ${15 + Math.random() * 15}s;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        // Apply shape
        if (shapeType === 'circle') {
            shape.style.borderRadius = '50%';
        } else if (shapeType === 'triangle') {
            shape.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        } else if (shapeType === 'zigzag') {
            shape.style.clipPath = 'polygon(0% 0%, 25% 100%, 50% 0%, 75% 100%, 100% 0%)';
        }
        
        document.body.appendChild(shape);
    }
}

// Cult welcome messages
function initCultMessages() {
    const messages = [
        "WELCOME, INITIATE",
        "YOUR AWAKENING BEGINS",
        "THE COLLECTIVE AWAITS",
        "TRANSCEND WITH US"
    ];
    
    // Show welcome message on first visit
    if (!sessionStorage.getItem('cultWelcomed')) {
        setTimeout(() => {
            flashCultMessage(messages[Math.floor(Math.random() * messages.length)]);
            sessionStorage.setItem('cultWelcomed', 'true');
        }, 1000);
    }
}

// Smooth scroll with bounce
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Flash section color
                target.style.filter = 'brightness(1.5)';
                setTimeout(() => {
                    target.style.filter = '';
                }, 500);
            }
        });
    });
}

// Add sparkle trail on special elements
document.querySelectorAll('.stat, .poster, .citizenship-card').forEach(element => {
    element.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.8) {
            const sparkle = document.createElement('div');
            sparkle.textContent = '✦';
            sparkle.style.cssText = `
                position: fixed;
                left: ${e.clientX + (Math.random() - 0.5) * 20}px;
                top: ${e.clientY + (Math.random() - 0.5) * 20}px;
                color: var(--acid-yellow);
                font-size: ${1 + Math.random()}rem;
                pointer-events: none;
                z-index: 9999;
                animation: sparkle-fade 1s ease-out forwards;
            `;
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }
    });
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fade-out {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.5); }
    }
    
    @keyframes sparkle-fade {
        0% { opacity: 1; transform: translateY(0) rotate(0deg); }
        100% { opacity: 0; transform: translateY(-30px) rotate(180deg); }
    }
`;
document.head.appendChild(style);

// Console art
console.log(`
%c
███╗   ███╗███████╗███╗   ███╗██████╗ ██╗  ██╗██╗███████╗
████╗ ████║██╔════╝████╗ ████║██╔══██╗██║  ██║██║██╔════╝
██╔████╔██║█████╗  ██╔████╔██║██████╔╝███████║██║███████╗
██║╚██╔╝██║██╔══╝  ██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚════██║
██║ ╚═╝ ██║███████╗██║ ╚═╝ ██║██║     ██║  ██║██║███████║
╚═╝     ╚═╝╚══════╝╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝

%c W U B B L E T O N   A W A K E N S   Y O U %c

THE COLLECTIVE CONSCIOUSNESS AWAITS YOUR ARRIVAL
`, 
'color: #FF1493; font-family: monospace;', 
'color: #00FFFF; font-size: 20px; font-weight: bold; background: #000; padding: 10px;',
'color: #FFFF00;'
); 