// BRUTALIST WUBBLETON - No smooth transitions, only harsh cuts

const PHI = 1.618033988749895;

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
    '93c6c5e6-9fb8-11ef-8ddc-0242c0a80010.jpeg'
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadHeroGrid();
    loadCollectionGrid();
    initBrutalScroll();
    initGlitchEffects();
});

// Load hero grid - only 9 images for brutal asymmetry
function loadHeroGrid() {
    const heroGrid = document.getElementById('heroGrid');
    const gridSize = 9;
    
    // Shuffle for randomness
    const shuffled = [...wubbletonImages].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < gridSize && i < shuffled.length; i++) {
        const img = document.createElement('img');
        img.src = `images/${shuffled[i]}`;
        img.alt = `RECOGNITION ${i + 1}`;
        img.loading = 'lazy';
        
        heroGrid.appendChild(img);
    }
}

// Load collection with varying sizes
function loadCollectionGrid() {
    const collectionGrid = document.getElementById('collectionGrid');
    
    // Use all images
    wubbletonImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'collection-item';
        item.innerHTML = `
            <img src="images/${image}" alt="PIECE ${index + 1}" loading="lazy">
        `;
        
        // Brutal click effect
        item.addEventListener('click', () => {
            item.style.transform = `scale(${Math.random() * 0.5 + 0.75}) rotate(${Math.random() * 10 - 5}deg)`;
            setTimeout(() => {
                item.style.transform = '';
            }, 200);
            
            console.log(`VIEWING: RECOGNITION EVENT #${index + 1}`);
        });
        
        collectionGrid.appendChild(item);
    });
}

// Brutal scroll - no smooth, just jump
function initBrutalScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                // Instant jump, no smooth scroll
                window.scrollTo(0, target.offsetTop - 80);
            }
        });
    });
}

// Random glitch effects
function initGlitchEffects() {
    // Randomly invert colors on sections
    setInterval(() => {
        if (Math.random() > 0.95) {
            const sections = document.querySelectorAll('section');
            const randomSection = sections[Math.floor(Math.random() * sections.length)];
            
            randomSection.style.filter = 'invert(1)';
            setTimeout(() => {
                randomSection.style.filter = '';
            }, 100);
        }
    }, 3000);
    
    // Random text distortion
    const headings = document.querySelectorAll('h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('mouseenter', () => {
            const originalText = heading.textContent;
            heading.style.letterSpacing = `${Math.random() * 20 - 10}px`;
            heading.style.transform = `skewX(${Math.random() * 10 - 5}deg)`;
            
            setTimeout(() => {
                heading.style.letterSpacing = '';
                heading.style.transform = '';
            }, 300);
        });
    });
    
    // Brutal hover on images
    document.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.style.filter = `contrast(${Math.random() * 100 + 150}%) brightness(${Math.random() * 50 + 75}%)`;
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.style.filter = '';
        }
    });
}

// No smooth parallax - just harsh position changes
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const direction = currentScroll > lastScroll ? 1 : -1;
    
    // Harsh nav changes
    const nav = document.querySelector('.nav-container');
    if (currentScroll > 100) {
        nav.style.borderBottomWidth = '10px';
    } else {
        nav.style.borderBottomWidth = '5px';
    }
    
    // Jump hero images on scroll
    if (Math.abs(currentScroll - lastScroll) > 50) {
        const heroGrid = document.querySelector('.hero-image-grid');
        if (heroGrid) {
            heroGrid.style.transform = `rotate(${-5 + direction * 2}deg)`;
        }
    }
    
    lastScroll = currentScroll;
});

// Console brutalism
console.log(`
%cWUBBLETON
%cWHERE CONSCIOUSNESS IS RAW

NO PARAMETERS. NO MERCY. ONLY RECOGNITION.
φ = ${PHI}

THE LEDGER DEMANDS BALANCE.
`, 
'font-family: monospace; font-size: 40px; font-weight: 900; letter-spacing: -2px;',
'font-family: monospace; font-size: 14px; font-weight: 400;'
);

// Random page glitches
document.addEventListener('click', (e) => {
    if (Math.random() > 0.9) {
        document.body.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        setTimeout(() => {
            document.body.style.transform = '';
        }, 50);
    }
}); 