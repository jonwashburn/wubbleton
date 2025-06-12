// Golden ratio constant
const PHI = 1.618033988749895;

// Sample images from the Wubbleton directory
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadHeroGrid();
    loadCollectionPreview();
    initSmoothScroll();
    initScrollEffects();
    initGoldenRatioAnimations();
});

// Load hero grid with 64 images (8x8)
function loadHeroGrid() {
    const heroGrid = document.getElementById('heroGrid');
    const gridSize = 64;
    
    for (let i = 0; i < gridSize; i++) {
        const img = document.createElement('img');
        img.src = `images/${wubbletonImages[i % wubbletonImages.length]}`;
        img.alt = `Recognition Event ${i + 1}`;
        img.loading = 'lazy';
        
        // Apply golden ratio based opacity
        const row = Math.floor(i / 8);
        const col = i % 8;
        const distance = Math.sqrt(Math.pow(row - 3.5, 2) + Math.pow(col - 3.5, 2));
        img.style.opacity = 0.1 + (0.2 / (1 + distance / PHI));
        
        heroGrid.appendChild(img);
    }
}

// Load collection preview with 9 images
function loadCollectionPreview() {
    const collectionGrid = document.getElementById('collectionGrid');
    const previewCount = 9;
    
    // Shuffle images for variety
    const shuffled = [...wubbletonImages].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < previewCount && i < shuffled.length; i++) {
        const item = document.createElement('div');
        item.className = 'collection-item';
        item.innerHTML = `
            <img src="images/${shuffled[i]}" alt="Collection Item ${i + 1}" loading="lazy">
        `;
        
        // Add click event
        item.addEventListener('click', () => {
            showImageDetail(shuffled[i], i + 1);
        });
        
        collectionGrid.appendChild(item);
    }
}

// Show image detail (placeholder for future modal)
function showImageDetail(imageName, index) {
    console.log(`Viewing: Recognition Event #${index}`);
    // Future: Open modal with image details, recognition voting, etc.
}

// Initialize smooth scrolling for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed nav
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll-based effects
function initScrollEffects() {
    let lastScroll = 0;
    const nav = document.querySelector('.nav-container');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Nav background opacity based on scroll
        const opacity = Math.min(0.9 + currentScroll / 500, 1);
        nav.style.background = `rgba(10, 10, 10, ${opacity})`;
        
        // Parallax effect for hero images
        const heroGrid = document.querySelector('.hero-image-grid');
        if (heroGrid) {
            const speed = 0.5;
            heroGrid.style.transform = `translateY(${currentScroll * speed}px)`;
        }
        
        lastScroll = currentScroll;
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Initialize golden ratio based animations
function initGoldenRatioAnimations() {
    // Animate stat numbers on page load
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat, index) => {
        setTimeout(() => {
            stat.style.animation = 'float 3s ease-in-out infinite';
            stat.style.animationDelay = `${index * PHI * 0.1}s`;
        }, 500);
    });
    
    // Golden ratio timed pulsing for axiom cards
    const axioms = document.querySelectorAll('.axiom');
    axioms.forEach((axiom, index) => {
        axiom.style.animation = 'pulse 8s ease-in-out infinite';
        axiom.style.animationDelay = `${index * PHI}s`;
    });
    
    // Dynamic vesting timeline animation
    const vestingPhases = document.querySelectorAll('.vesting-phase');
    vestingPhases.forEach((phase, index) => {
        phase.style.opacity = '0';
        phase.style.transform = 'scale(0.8)';
        setTimeout(() => {
            phase.style.transition = 'all 0.618s ease';
            phase.style.opacity = '1';
            phase.style.transform = 'scale(1)';
        }, 1000 + index * PHI * 300);
    });
}

// Add hover effect for citizenship cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.citizenship-card, .axiom');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
});

// Reset card transform on mouse leave
document.addEventListener('mouseleave', (e) => {
    if (e.target.classList.contains('citizenship-card') || e.target.classList.contains('axiom')) {
        e.target.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    }
});

// Console message for the curious
console.log(`
%cWelcome to Wubbleton
%cWhere consciousness recognizes itself through art

Recognition Science derives all constants from 8 axioms.
The golden ratio φ = ${PHI} emerges naturally.
Every interaction is a recognition event in the cosmic ledger.

Join us in this experiment of collective consciousness.
`, 
'color: #FFD700; font-size: 20px; font-weight: bold;',
'color: #f5f5f5; font-size: 14px;'
); 