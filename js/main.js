// RETRO 8-BIT WUBBLETON - BRUTALIST EDITION

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
    loadHeroImages();
    loadCollectionPreview();
    initGlitchEffects();
    initPixelCursor();
    initSmoothScroll();
    initRetroSounds();
});

// Load hero images - 9 in brutal grid
function loadHeroImages() {
    const heroGrid = document.getElementById('heroGrid');
    if (!heroGrid) return;
    
    // Pick 9 random images
    const shuffled = [...wubbletonImages].sort(() => Math.random() - 0.5);
    const selectedImages = shuffled.slice(0, 9);
    
    selectedImages.forEach((img, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${img}`;
        imgElement.alt = `Wubbleton Soul ${index + 1}`;
        imgElement.loading = 'lazy';
        
        // Add random rotation for chaos
        const rotation = (Math.random() - 0.5) * 10;
        imgElement.style.setProperty('--rotate', `${rotation}deg`);
        
        heroGrid.appendChild(imgElement);
    });
}

// Load collection preview - brutal grid
function loadCollectionPreview() {
    const collectionGrid = document.getElementById('collectionGrid');
    if (!collectionGrid) return;
    
    // Show 12 pieces
    const shuffled = [...wubbletonImages].sort(() => Math.random() - 0.5);
    const previewImages = shuffled.slice(0, 12);
    
    previewImages.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'collection-item pixel-border';
        
        // Random rotation for each item
        const rotation = (Math.random() - 0.5) * 5;
        item.style.setProperty('--rotate', `${rotation}deg`);
        
        item.innerHTML = `
            <img src="images/${img}" alt="Soul #${index + 1000}" loading="lazy">
            <div class="collection-info">
                <div class="collection-number">#${index + 1000}</div>
                <div class="collection-title">SOUL ${index + 1000}</div>
            </div>
        `;
        
        collectionGrid.appendChild(item);
    });
}

// Enhanced glitch effects
function initGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        // Random glitch intervals
        setInterval(() => {
            if (Math.random() > 0.95) {
                element.style.animation = 'none';
                setTimeout(() => {
                    element.style.animation = '';
                }, 100);
            }
        }, 3000);
    });
}

// Pixel cursor effect
function initPixelCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'pixel-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 16px;
        height: 16px;
        background: #00FF00;
        pointer-events: none;
        z-index: 10000;
        image-rendering: pixelated;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Pixelated cursor movement
    setInterval(() => {
        // Snap to 8px grid
        cursorX = Math.floor(mouseX / 8) * 8;
        cursorY = Math.floor(mouseY / 8) * 8;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
    }, 50);
}

// Harsh scroll (no smoothing)
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Instant jump with small random offset
                const offset = (Math.random() - 0.5) * 20;
                window.scrollTo({
                    top: target.offsetTop - 100 + offset,
                    behavior: 'auto' // No smooth scrolling - brutal cuts
                });
            }
        });
    });
}

// Retro sound effects
function initRetroSounds() {
    // Create audio context for 8-bit sounds
    let audioContext;
    
    function playBeep(frequency = 440, duration = 50) {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'square'; // 8-bit square wave
        oscillator.frequency.value = frequency;
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration / 1000);
    }
    
    // Add click sounds to buttons and links
    document.querySelectorAll('button, a').forEach(element => {
        element.addEventListener('mouseenter', () => {
            playBeep(800, 30);
        });
        
        element.addEventListener('click', () => {
            playBeep(400, 50);
        });
    });
}

// Random pixel artifacts
setInterval(() => {
    if (Math.random() > 0.98) {
        const artifact = document.createElement('div');
        artifact.style.cssText = `
            position: fixed;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            width: ${Math.random() * 100 + 50}px;
            height: 8px;
            background: ${Math.random() > 0.5 ? '#00FF00' : '#FF00FF'};
            z-index: 9999;
            pointer-events: none;
            image-rendering: pixelated;
        `;
        document.body.appendChild(artifact);
        
        setTimeout(() => {
            artifact.remove();
        }, 100);
    }
}, 1000);

// Terminal typing effect for manifesto
const manifestoContent = document.querySelector('.manifesto-content');
if (manifestoContent) {
    const originalText = manifestoContent.innerHTML;
    manifestoContent.innerHTML = '';
    manifestoContent.style.minHeight = '400px';
    
    // Type out content on scroll into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                manifestoContent.innerHTML = originalText;
                manifestoContent.classList.add('typing-effect');
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(manifestoContent);
}

// Konami code easter egg
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.classList.add('matrix-mode');
        setTimeout(() => {
            document.body.classList.remove('matrix-mode');
        }, 5000);
    }
});

// Add matrix mode styles
const style = document.createElement('style');
style.textContent = `
    .matrix-mode * {
        color: #00FF00 !important;
        background: #000000 !important;
        font-family: 'Courier New', monospace !important;
    }
    
    .typing-effect {
        animation: typing 2s steps(40, end);
    }
    
    @keyframes typing {
        from { width: 0; }
        to { width: 100%; }
    }
`;
document.head.appendChild(style);

console.log(`
█ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ 
█                                       █
█  W U B B L E T O N   A W A K E N S   █
█                                       █
█  Where consciousness finds itself     █
█  after the digital rapture          █
█                                       █
█ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ 
`); 