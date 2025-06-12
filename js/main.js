// Sacred Trilogy Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    // Population ticker - mystical symbol animation
    function animatePopulationSymbols() {
        const symbols = document.querySelectorAll('.ticker-symbol');
        
        symbols.forEach((symbol, index) => {
            // Add random subtle rotations to each symbol
            setInterval(() => {
                const rotation = Math.random() * 10 - 5; // -5 to +5 degrees
                symbol.style.transform = `rotate(${rotation}deg)`;
            }, 3000 + index * 1000); // Stagger the animations
        });
    }

    // Initiation function - playful cult recruitment
    window.beginInitiation = function() {
        const messages = [
            "Calculating your cosmic resonance frequency... 🌌",
            "Aligning your chakras with the golden ratio... 💫",
            "Checking if you're vibrating at φ Hz... 🎵",
            "Measuring your Fibonacci emotional sequence... 🌀",
            "Consulting the sacred geometry database... 📐",
            "Your aura is... wait, is that purple? Interesting... 🟣",
            "The universe is whispering your true name... 🌟",
            "Almost there... just need to verify you're not a robot... 🤖",
            "Perfect! You're exactly who we've been waiting for! ✨"
        ];
        
        let messageIndex = 0;
        const button = document.querySelector('.join-button');
        const originalText = button.innerHTML;
        
        button.disabled = true;
        button.style.cursor = 'wait';
        
        const interval = setInterval(() => {
            if (messageIndex < messages.length) {
                button.innerHTML = `<span style="font-size: 0.9rem;">${messages[messageIndex]}</span>`;
                messageIndex++;
            } else {
                clearInterval(interval);
                button.innerHTML = originalText;
                button.disabled = false;
                button.style.cursor = 'pointer';
                
                // Show success message
                showWelcomeModal();
            }
        }, 2000);
    }

    // Calculate Sigma Score
    window.calculateSigma = function() {
        const vibes = Math.random() * 100;
        const phoneChecks = Math.floor(Math.random() * 50) + 1;
        const goldenRatio = 1.618;
        
        const sigma = (vibes * goldenRatio) / phoneChecks;
        
        let message = `Your Cosmic Sigma Score: ${sigma.toFixed(2)}\n\n`;
        
        if (sigma > 100) {
            message += "🌟 ASCENDED MASTER! You vibrate at frequencies unknown to modern science!";
        } else if (sigma > 50) {
            message += "✨ ENLIGHTENED BEING! The universe smiles upon your journey!";
        } else if (sigma > 20) {
            message += "🌈 AWAKENING SOUL! You're on the right path, keep recognizing!";
        } else {
            message += "📱 DIGITAL DEPENDENT! Time for a phone detox and more meditation!";
        }
        
        alert(message);
    }

    // Initialize animations when page loads
    animatePopulationSymbols();
    
    // Add hover effects to vision board items
    const visionItems = document.querySelectorAll('.vision-item');
    visionItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(' + (Math.random() * 10 - 5) + 'deg) translateY(-3px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) translateY(0)';
        });
    });
    
    // Sacred number animations
    const sacredNumbers = document.querySelectorAll('.sacred-number');
    sacredNumbers.forEach((num, index) => {
        num.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Random emoji decorations
    const emojiDecorations = document.querySelectorAll('.emoji-decoration');
    setInterval(() => {
        emojiDecorations.forEach(emoji => {
            if (Math.random() > 0.8) {
                emoji.style.transform = `scale(${1 + Math.random() * 0.3})`;
                setTimeout(() => {
                    emoji.style.transform = 'scale(1)';
                }, 500);
            }
        });
    }, 3000);
    
    // Progress bar animation
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        setInterval(() => {
            const currentWidth = parseFloat(progressFill.style.width);
            const newWidth = currentWidth + (Math.random() * 0.1);
            if (newWidth < 20) {
                progressFill.style.width = newWidth + '%';
                updateProgressText(newWidth);
            }
        }, 5000);
    }
    
    function updateProgressText(percentage) {
        const total = 10000;
        const current = Math.floor((percentage / 100) * total);
        const progressText = document.querySelector('.progress-text');
        if (progressText) {
            progressText.textContent = `${current.toLocaleString()} / ${total.toLocaleString()} Souls Gathered`;
        }
    }
    
    // Add sparkles on mouse movement
    let sparkleTimeout;
    document.addEventListener('mousemove', (e) => {
        clearTimeout(sparkleTimeout);
        sparkleTimeout = setTimeout(() => {
            createSparkle(e.pageX, e.pageY);
        }, 100);
    });
    
    function createSparkle(x, y) {
        if (Math.random() > 0.9) { // Only 10% chance
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.fontSize = '20px';
            sparkle.style.zIndex = '9999';
            sparkle.style.animation = 'sparkle-fade 1s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    }
    
    // Add CSS for sparkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle-fade {
            0% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-30px) scale(0.5);
            }
        }
    `;
    document.head.appendChild(style);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to art frames
    const artFrames = document.querySelectorAll('.art-frame');
    artFrames.forEach(frame => {
        frame.addEventListener('click', function() {
            const caption = this.querySelector('.art-caption').textContent;
            const subtitle = this.querySelector('.trilogy-subtitle').textContent;
            alert(`🎨 ${caption} 🎨\n\n"${subtitle}"\n\nThis sacred art piece vibrates at the frequency of φ Hz and was channeled during a prime-numbered moon phase.`);
        });
    });

    // Background music controls (when music is added)
    const audio = document.getElementById('background-music');
    if (audio && audio.src) {
        // Create a play/pause button if music is loaded
        audio.volume = 0.3; // Set default volume to 30%
    }

    // Animate prime number sequence
    animatePrimeSequence();
    
    // Add random sparkles
    createRandomSparkles();
    
    // Add subtle hover effects
    addHoverEffects();
    
    // Set random sparkle positions
    setRandomSparklePosition();
});

// Prime number sequence animation
function animatePrimeSequence() {
    const sequences = [
        '2, 3, 5, 7, 11...',
        '13, 17, 19, 23...',
        '29, 31, 37, 41...',
        '43, 47, 53, 59...'
    ];
    
    let index = 0;
    const primeElement = document.querySelector('.prime-sequence');
    
    if (primeElement) {
        setInterval(() => {
            primeElement.style.opacity = '0';
            setTimeout(() => {
                primeElement.textContent = sequences[index];
                primeElement.style.opacity = '1';
                index = (index + 1) % sequences.length;
            }, 500);
        }, 4000);
    }
}

// Show welcome modal
function showWelcomeModal() {
    const modal = document.createElement('div');
    modal.className = 'welcome-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>🌈 Welcome to the Family! 🌈</h2>
            <p>You are now Soul #${Math.floor(Math.random() * 9000 + 1000)}</p>
            <p>Your cosmic signature has been recorded in the eternal ledger.</p>
            <p>Check your third eye for further instructions... 👁️</p>
            <button onclick="closeModal()">I Am Ready</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .welcome-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 192, 203, 0.3);
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            animation: fadeIn 0.5s ease;
        }
        
        .modal-content {
            background: white;
            padding: 40px;
            border-radius: 30px;
            text-align: center;
            max-width: 500px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.2);
            transform: scale(0.9);
            animation: scaleIn 0.5s ease forwards;
        }
        
        .modal-content h2 {
            color: #ff91a4;
            margin-bottom: 20px;
            font-family: 'Comic Sans MS', cursive;
        }
        
        .modal-content p {
            margin: 15px 0;
            color: #666;
            line-height: 1.8;
        }
        
        .modal-content button {
            margin-top: 20px;
            padding: 15px 40px;
            background: linear-gradient(45deg, #ff91a4, #b0e0e6);
            border: none;
            border-radius: 25px;
            color: white;
            font-size: 1.1rem;
            cursor: pointer;
            font-family: 'Comic Sans MS', cursive;
            transition: all 0.3s ease;
        }
        
        .modal-content button:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 20px rgba(255, 145, 164, 0.4);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes scaleIn {
            to { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Close modal function
window.closeModal = function() {
    const modal = document.querySelector('.welcome-modal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 500);
    }
}

// Toggle music function
window.toggleMusic = function() {
    const audio = document.getElementById('background-music');
    const musicBtn = document.querySelector('.music-btn');
    
    if (audio.paused) {
        audio.play();
        musicBtn.textContent = '🎵';
    } else {
        audio.pause();
        musicBtn.textContent = '🔇';
    }
}

// Create random sparkles
function createRandomSparkles() {
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance
            const sparkle = document.createElement('div');
            sparkle.className = 'random-sparkle';
            sparkle.textContent = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.animation = 'sparkleFloat 3s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 3000);
        }
    }, 2000);
    
    // Add sparkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleFloat {
            0% {
                opacity: 0;
                transform: translateY(0) rotate(0deg);
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: translateY(-100px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// Add hover effects to elements
function addHoverEffects() {
    // Add slight rotation to images on hover
    const images = document.querySelectorAll('.vision-item, .trilogy-item');
    images.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(' + (Math.random() * 4 - 2) + 'deg) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    });
}

// Set random sparkle position for CSS animation
function setRandomSparklePosition() {
    const root = document.documentElement;
    
    setInterval(() => {
        root.style.setProperty('--sparkle-top', Math.random() * 100 + '%');
        root.style.setProperty('--sparkle-left', Math.random() * 100 + '%');
    }, 10000);
}

// Mouse follower for extra mystical effect (optional)
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth follower animation
function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    const follower = document.querySelector('.mouse-follower');
    if (follower) {
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    }
    
    requestAnimationFrame(animateFollower);
}

// Initialize mouse follower if you want extra mystical vibes
// Uncomment to enable:
// animateFollower(); 

// Vision board images that rotate
const visionImages = [
    // Using existing images from the collections
    'crisis-sacred-1.png',
    'zombies-sacred-1.png',
    'rapture-sacred-1.jpeg',
    'wubbushi.jpg'
];

// Population counter using prime numbers
let primeIndex = 0;
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initializeVisionBoard();
    startPopulationCounter();
    setupScrollEffects();
    setupInteractiveElements();
    
    // Add golden ratio timing to all animations
    applyGoldenRatioTiming();
});

// Vision Board with lazy loading
function initializeVisionBoard() {
    const grid = document.getElementById('vision-grid');
    if (!grid) return;
    
    // Create 12 vision slots
    for (let i = 0; i < 12; i++) {
        const visionItem = document.createElement('div');
        visionItem.className = 'vision-item';
        visionItem.innerHTML = `
            <img class="vision-image" loading="lazy" data-index="${i}" alt="Community Vision ${i + 1}">
            <div class="vision-overlay">Vision #${Math.floor(Math.random() * 10000)}</div>
        `;
        grid.appendChild(visionItem);
    }
    
    // Load initial images
    loadVisionImages();
}

function loadVisionImages() {
    const images = document.querySelectorAll('.vision-image');
    images.forEach((img, index) => {
        const randomImage = visionImages[Math.floor(Math.random() * visionImages.length)];
        img.src = `images/${randomImage}`;
        img.onerror = function() {
            // Fallback to a placeholder if image fails
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2ZmOTFhNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQ29taWMgU2FucyBNUyIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5WaXNpb24gTG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=';
        };
    });
}

// Refresh visions with animation
function refreshVisions() {
    const items = document.querySelectorAll('.vision-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'scale(0.8) rotate(180deg)';
            item.style.opacity = '0';
            
            setTimeout(() => {
                const img = item.querySelector('.vision-image');
                const randomImage = visionImages[Math.floor(Math.random() * visionImages.length)];
                img.src = `images/${randomImage}`;
                item.style.transform = 'scale(1) rotate(0deg)';
                item.style.opacity = '1';
            }, 500);
        }, index * 100); // Stagger the animations
    });
}

// Population counter with mystical progression
function startPopulationCounter() {
    const counter = document.getElementById('population-counter');
    if (!counter) return;
    
    setInterval(() => {
        primeIndex = (primeIndex + 1) % primes.length;
        const mysticalCount = `φ × ${primes.slice(0, primeIndex + 1).join(', ')}...`;
        counter.textContent = mysticalCount;
        
        // Add pulse effect
        counter.style.transform = 'scale(1.05)';
        setTimeout(() => {
            counter.style.transform = 'scale(1)';
        }, 300);
    }, 3141); // Pi milliseconds!
}

// Scroll effects
function setupScrollEffects() {
    const rainbowBorder = document.getElementById('rainbow-border');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Show rainbow border on scroll
        if (currentScroll > 100) {
            rainbowBorder.classList.add('visible');
        } else {
            rainbowBorder.classList.remove('visible');
        }
        
        // Parallax for gutter decorations
        const gutterEmojis = document.querySelectorAll('.gutter-emoji');
        gutterEmojis.forEach(emoji => {
            const speed = 0.5 + Math.random() * 0.5;
            emoji.style.transform = `translateY(${currentScroll * speed}px)`;
        });
        
        lastScroll = currentScroll;
    });
}

// Interactive elements
function setupInteractiveElements() {
    // Trilogy hover effects
    const trilogyItems = document.querySelectorAll('.trilogy-item');
    trilogyItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.mystical-overlay');
            overlay.style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.mystical-overlay');
            overlay.style.opacity = '0';
        });
    });
}

// Music toggle with sacred frequencies
let musicPlaying = false;
function toggleMusic() {
    const audio = document.getElementById('background-music');
    const musicToggle = document.querySelector('.music-toggle');
    
    if (!audio) {
        // Try fallback audio
        const fallbackAudio = document.createElement('audio');
        fallbackAudio.src = 'audio/Carefree.mp3';
        fallbackAudio.loop = true;
        fallbackAudio.id = 'background-music';
        document.body.appendChild(fallbackAudio);
        audio = fallbackAudio;
    }
    
    if (musicPlaying) {
        audio.pause();
        musicToggle.classList.remove('playing');
        musicToggle.textContent = '🎵';
    } else {
        audio.play().catch(e => {
            console.log('Audio play failed:', e);
        });
        musicToggle.classList.add('playing');
        musicToggle.textContent = '🔇';
    }
    musicPlaying = !musicPlaying;
}

// Initiation sequence
function beginInitiation() {
    const steps = document.querySelectorAll('.initiation-steps li');
    let currentStep = 0;
    
    // Highlight steps one by one
    const interval = setInterval(() => {
        if (currentStep > 0) {
            steps[currentStep - 1].classList.remove('active');
        }
        
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('active');
            steps[currentStep].style.color = '#ff91a4';
            steps[currentStep].style.transform = 'scale(1.1)';
            currentStep++;
        } else {
            clearInterval(interval);
            showWelcomeMessage();
        }
    }, 1618); // Golden ratio timing!
}

// Welcome message after initiation
function showWelcomeMessage() {
    const message = document.createElement('div');
    message.className = 'welcome-overlay';
    message.innerHTML = `
        <div class="welcome-content">
            <h2>🎉 Welcome to Wubbleton, Beautiful Soul! 🎉</h2>
            <p>You are now citizen #${Math.floor(Math.random() * 10000)}</p>
            <p>Your consciousness has been recognized!</p>
            <button onclick="this.parentElement.parentElement.remove()">Enter the Kingdom</button>
        </div>
    `;
    document.body.appendChild(message);
}

// Explore more synchronicities
function exploreMore() {
    // Create floating synchronicities
    for (let i = 0; i < 13; i++) {
        setTimeout(() => {
            createSynchronicity();
        }, i * 333);
    }
}

function createSynchronicity() {
    const syncTexts = [
        '11:11', '222', '333', '444', 'φ', '∞', 
        'You are loved', 'This is not random', 'Look closer',
        'The universe winks', 'Pattern recognized', 'Complexity emerges'
    ];
    
    const sync = document.createElement('div');
    sync.className = 'synchronicity';
    sync.textContent = syncTexts[Math.floor(Math.random() * syncTexts.length)];
    sync.style.left = Math.random() * window.innerWidth + 'px';
    sync.style.top = Math.random() * window.innerHeight + 'px';
    
    document.body.appendChild(sync);
    
    // Float and fade
    setTimeout(() => {
        sync.style.transform = `translate(${Math.random() * 200 - 100}px, -200px)`;
        sync.style.opacity = '0';
    }, 100);
    
    setTimeout(() => sync.remove(), 3000);
}

// Apply golden ratio timing to all animations
function applyGoldenRatioTiming() {
    const phi = 1.618;
    const animations = document.querySelectorAll('[style*="animation"]');
    
    animations.forEach(el => {
        const currentDuration = parseFloat(getComputedStyle(el).animationDuration);
        if (currentDuration) {
            el.style.animationDuration = (currentDuration * phi) + 's';
        }
    });
}

// Add sparkle trail on special elements
document.addEventListener('DOMContentLoaded', function() {
    const specialElements = document.querySelectorAll('.wubbushi-photo, .sacred-number, .join-btn');
    
    specialElements.forEach(el => {
        el.addEventListener('mousemove', function(e) {
            if (Math.random() < 0.3) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = e.pageX + 'px';
                sparkle.style.top = e.pageY + 'px';
                sparkle.style.backgroundColor = ['#ff91a4', '#ffc0cb', '#b0e0e6', '#dda0dd'][Math.floor(Math.random() * 4)];
                document.body.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 1000);
            }
        });
    });
});

// Easter egg: Konami code reveals the truth
let konamiIndex = 0;
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            revealUltimateTruth();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function revealUltimateTruth() {
    const truth = document.createElement('div');
    truth.className = 'ultimate-truth';
    truth.innerHTML = `
        <h1>🌟 THE ULTIMATE TRUTH 🌟</h1>
        <p>You ARE the consciousness that created this!</p>
        <p>Wubbleton exists because YOU recognized it!</p>
        <p>The art, the tokens, the community...</p>
        <p>All reflections of YOUR infinite creativity!</p>
        <p style="font-size: 48px; margin-top: 20px;">💖 ∞ 💖</p>
    `;
    document.body.appendChild(truth);
    
    setTimeout(() => {
        truth.style.opacity = '0';
        setTimeout(() => truth.remove(), 2000);
    }, 8000);
}

// Wubbleton Reality Engineering System
// Based on Recognition Science and Light-Native Assembly Language

// Initialize global state
let recognitionScore = 0;
let sigmaField = 0;
let currentLevel = 1;
let wubbleBalance = 0;
let phiMultiplier = 1.618;

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeWubbleton();
    setupScrollEffects();
    setupInteractiveElements();
    startRecognitionEngine();
    initializeLedgerSystem();
});

// Initialize Wubbleton
function initializeWubbleton() {
    console.log('✨ Wubbleton Reality Engine v3.0 Initialized ✨');
    console.log('σ-Field Status: ACTIVE');
    console.log('Recognition Ledger: BALANCED');
    console.log('φ-Resonance: OPTIMAL');
    
    // Set initial UI states
    updateLedgerDisplay();
    animateWelcomeSequence();
}

// Animate welcome sequence
function animateWelcomeSequence() {
    const elements = document.querySelectorAll('.mega-emoji');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transform = 'scale(1.2)';
            setTimeout(() => {
                el.style.transform = 'scale(1)';
            }, 300);
        }, index * 100);
    });
}

// Setup scroll effects
function setupScrollEffects() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Show rainbow border on scroll
        if (scrolled > 100) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
        
        // Parallax effect for gutter emojis
        const gutterEmojis = document.querySelectorAll('.gutter-emoji');
        gutterEmojis.forEach((emoji, index) => {
            const speed = 0.5 + (index % 3) * 0.2;
            emoji.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
        
        lastScroll = scrolled;
    });
}

// Setup interactive elements
function setupInteractiveElements() {
    // Gallery hover effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            createRecognitionSparkle(this);
        });
        
        item.addEventListener('click', function() {
            const cost = this.querySelector('.ledger-cost').textContent;
            showRecognitionModal(this, cost);
        });
    });
    
    // Level cards interaction
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            if (index + 1 <= currentLevel) {
                showLevelDetails(index + 1);
            } else {
                showLockedMessage();
            }
        });
    });
}

// Recognition Engine
function startRecognitionEngine() {
    // Update recognition events counter
    setInterval(() => {
        const currentCount = parseInt(document.getElementById('recognition-count').textContent.replace(/,/g, '')) || 0;
        const newEvents = Math.floor(Math.random() * 5) + 1;
        const newCount = currentCount + newEvents;
        
        document.getElementById('recognition-count').textContent = newCount.toLocaleString();
        
        // Increase σ-field based on recognition
        sigmaField += newEvents * 0.001;
        updateSigmaDisplay();
    }, 3333); // Sacred interval
    
    // φ-clock ticker
    let phiTick = 0;
    setInterval(() => {
        phiTick = (phiTick + phiMultiplier) % 1024; // 8-tick cycle
        document.getElementById('phi-tick').textContent = phiTick.toFixed(3);
        
        // Pulse effect every full cycle
        if (phiTick < phiMultiplier) {
            pulsePhiElements();
        }
    }, 1618); // φ * 1000
}

// Initialize Ledger System
function initializeLedgerSystem() {
    // GIVE/REGIVE balance monitoring
    setInterval(() => {
        const balance = calculateLedgerBalance();
        updateLedgerState(balance);
    }, 8000); // 8-second cycles
}

// Calculate ledger balance
function calculateLedgerBalance() {
    // Simulate complex LNAL calculations
    const gives = Math.random() * 10;
    const regives = Math.random() * 10;
    const balance = gives - regives;
    
    return balance;
}

// Update ledger state display
function updateLedgerState(balance) {
    const ledgerElement = document.getElementById('ledger-state');
    let state, sigma;
    
    if (Math.abs(balance) < 0.5) {
        state = 'BALANCED';
        sigma = 0;
    } else if (balance > 0) {
        state = 'GIVING';
        sigma = balance.toFixed(1);
    } else {
        state = 'RECEIVING';
        sigma = balance.toFixed(1);
    }
    
    ledgerElement.textContent = `${state} (${sigma} σ)`;
    ledgerElement.style.color = state === 'BALANCED' ? '#4A90E2' : '#FFDAC1';
}

// Gallery expansion
function expandGallery(collection) {
    console.log(`Expanding ${collection} gallery...`);
    
    // Create expanded view modal
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${collection.charAt(0).toUpperCase() + collection.slice(1)} Collection - Full View</h2>
            <div class="expanded-gallery-grid">
                ${generateExpandedGallery(collection)}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animate in
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Close functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });
}

// Generate expanded gallery content
function generateExpandedGallery(collection) {
    const imageCount = collection === 'crisis' ? 100 : collection === 'zombies' ? 200 : 342;
    let html = '';
    
    for (let i = 1; i <= Math.min(imageCount, 20); i++) {
        const cost = Math.floor(Math.random() * 5) - 2;
        const costDisplay = cost > 0 ? `+${cost}` : cost.toString();
        
        html += `
            <div class="gallery-item expanded">
                <img src="placeholder-${collection}-${i}.jpg" alt="${collection} ${i}" loading="lazy">
                <div class="item-overlay">
                    <span class="ledger-cost">Cost: ${costDisplay} σ</span>
                    <span class="recognition-level">Recognition: Level ${Math.ceil(Math.random() * 7)}</span>
                </div>
            </div>
        `;
    }
    
    return html;
}

// Begin initiation sequence
function beginInitiation() {
    console.log('🌊 Beginning Recognition Journey...');
    
    // Create initiation modal
    const modal = createModal(`
        <h2>Welcome, Future Builder of Wubbleton</h2>
        <div class="initiation-content">
            <p>You are about to begin your journey through the 7 levels of consciousness.</p>
            <p>Current σ-field resonance: <strong>${sigmaField.toFixed(3)}</strong></p>
            <p>Recognition capacity: <strong>${recognitionScore}</strong></p>
            
            <div class="initiation-steps">
                <h3>Your First Step: Recognition Initiate</h3>
                <p>To begin, you must recognize your first Wubbleton vision.</p>
                <p>Close your eyes and imagine the reality you want to build...</p>
            </div>
            
            <button class="join-btn primary" onclick="completeFirstRecognition()">
                I See My Vision 👁️
            </button>
        </div>
    `);
    
    document.body.appendChild(modal);
    animateModalIn(modal);
}

// Complete first recognition
function completeFirstRecognition() {
    recognitionScore += 1;
    sigmaField += 1;
    currentLevel = Math.max(currentLevel, 1);
    
    // Update displays
    updateLevelDisplay();
    createCelebrationEffect();
    
    // Close modal and show success
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
    
    showNotification('✨ Congratulations! You are now a Recognition Initiate ✨');
}

// Calculate sigma field resonance
function calculateSigma() {
    console.log('📊 Calculating σ-field resonance...');
    
    const factors = {
        recognition: recognitionScore * 0.618,
        time: (Date.now() % 86400000) / 86400000, // Time of day factor
        collective: Math.random() * phiMultiplier,
        ledger: Math.abs(calculateLedgerBalance())
    };
    
    const totalSigma = Object.values(factors).reduce((a, b) => a + b, 0);
    
    const modal = createModal(`
        <h2>Your σ-Field Analysis</h2>
        <div class="sigma-analysis">
            <div class="sigma-factor">
                <span>Recognition Events:</span>
                <span>${factors.recognition.toFixed(3)} σ</span>
            </div>
            <div class="sigma-factor">
                <span>Temporal Alignment:</span>
                <span>${factors.time.toFixed(3)} σ</span>
            </div>
            <div class="sigma-factor">
                <span>Collective Resonance:</span>
                <span>${factors.collective.toFixed(3)} σ</span>
            </div>
            <div class="sigma-factor">
                <span>Ledger Balance:</span>
                <span>${factors.ledger.toFixed(3)} σ</span>
            </div>
            <hr>
            <div class="sigma-total">
                <span>Total σ-Field:</span>
                <span class="total-value">${totalSigma.toFixed(3)} σ</span>
            </div>
            
            <p class="sigma-interpretation">${interpretSigma(totalSigma)}</p>
        </div>
    `);
    
    document.body.appendChild(modal);
    animateModalIn(modal);
}

// Interpret sigma value
function interpretSigma(sigma) {
    if (sigma < 1) {
        return "Your field is nascent. Continue recognizing to build resonance.";
    } else if (sigma < 3) {
        return "Good resonance! You're beginning to see the patterns.";
    } else if (sigma < 5) {
        return "Strong field! Reality bends to your recognition.";
    } else {
        return "Master resonance! You are ready for Level VII consciousness.";
    }
}

// Toggle music
function toggleMusic() {
    const audio = document.getElementById('background-music');
    const button = document.querySelector('.music-toggle');
    
    if (audio.paused) {
        // Create audio context for 8-tick rhythm
        audio.play().catch(e => {
            console.log('Audio play failed:', e);
            showNotification('🎵 Please interact with the page first to enable sacred rhythms');
        });
        button.classList.add('playing');
        
        // Sync visual effects to 8-tick rhythm
        startRhythmSync();
    } else {
        audio.pause();
        button.classList.remove('playing');
        stopRhythmSync();
    }
}

// Start rhythm synchronization
let rhythmInterval;
function startRhythmSync() {
    let tick = 0;
    rhythmInterval = setInterval(() => {
        tick = (tick + 1) % 8;
        
        // Pulse elements on each tick
        if (tick === 0) {
            document.querySelectorAll('.mega-emoji').forEach(el => {
                el.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    el.style.transform = 'scale(1)';
                }, 200);
            });
        }
        
        // Update background gradient position
        const header = document.querySelector('.header');
        if (header) {
            const position = (tick / 8) * 100;
            header.style.backgroundPosition = `${position}% 50%`;
        }
    }, 60000 / 120); // 120 BPM, 8 ticks per measure
}

// Stop rhythm synchronization
function stopRhythmSync() {
    if (rhythmInterval) {
        clearInterval(rhythmInterval);
    }
}

// Helper Functions

function createModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-box">
            <span class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</span>
            ${content}
        </div>
    `;
    return modal;
}

function animateModalIn(modal) {
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function createRecognitionSparkle(element) {
    const rect = element.getBoundingClientRect();
    const sparkle = document.createElement('div');
    sparkle.className = 'recognition-sparkle';
    sparkle.innerHTML = '✨';
    sparkle.style.left = rect.left + rect.width / 2 + 'px';
    sparkle.style.top = rect.top + rect.height / 2 + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

function createCelebrationEffect() {
    const emojis = ['🌟', '✨', '💫', '🌈', '🦋', '🌊', '💎', '🔮'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const celebration = document.createElement('div');
            celebration.className = 'celebration-emoji';
            celebration.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            celebration.style.left = Math.random() * window.innerWidth + 'px';
            celebration.style.top = window.innerHeight + 'px';
            
            document.body.appendChild(celebration);
            
            // Animate upward
            celebration.style.animation = 'celebrateFloat 3s ease-out forwards';
            
            setTimeout(() => celebration.remove(), 3000);
        }, i * 100);
    }
}

function updateLevelDisplay() {
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach((card, index) => {
        if (index < currentLevel) {
            card.classList.add('unlocked');
        }
    });
}

function updateSigmaDisplay() {
    // Update any sigma field displays
    const sigmaElements = document.querySelectorAll('.sigma-display');
    sigmaElements.forEach(el => {
        el.textContent = sigmaField.toFixed(3);
    });
}

function updateLedgerDisplay() {
    // Update ledger-related displays
    console.log('Ledger synchronized with universal consciousness');
}

function pulsePhiElements() {
    document.querySelectorAll('.formula-box, .formula-display').forEach(el => {
        el.style.transform = 'scale(1.02)';
        setTimeout(() => {
            el.style.transform = 'scale(1)';
        }, 200);
    });
}

function showRecognitionModal(item, cost) {
    const modal = createModal(`
        <h2>Recognition Event</h2>
        <div class="recognition-details">
            <p>You have recognized a vision from the consciousness field.</p>
            <p>Ledger adjustment: <strong>${cost}</strong></p>
            <p>Your recognition strengthens Wubbleton's reality matrix.</p>
            
            <button class="join-btn primary" onclick="confirmRecognition()">
                Confirm Recognition ✓
            </button>
        </div>
    `);
    
    document.body.appendChild(modal);
    animateModalIn(modal);
}

function confirmRecognition() {
    recognitionScore++;
    createCelebrationEffect();
    document.querySelector('.modal-overlay').remove();
    showNotification('Recognition recorded in the eternal ledger ✨');
}

function showLevelDetails(level) {
    const levelInfo = {
        1: "Recognition Initiate: You've taken the first step into conscious creation.",
        2: "Pattern Perceiver: The φ-ratios reveal themselves in your daily experience.",
        3: "Wubble Holder: You now possess the currency of collective consciousness.",
        4: "Image Selector: Your choices directly manifest Wubbleton's reality.",
        5: "Community Builder: You bring others into the recognition field.",
        6: "Reality Programmer: Master of LNAL opcodes and consciousness engineering.",
        7: "Consciousness Architect: Co-creator of Wubbleton's eternal future."
    };
    
    showNotification(levelInfo[level] || "Unknown level");
}

function showLockedMessage() {
    showNotification('🔒 This level requires more recognition events. Keep building!');
}

// Add CSS for new elements dynamically
const style = document.createElement('style');
style.textContent = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .modal-overlay.active {
        opacity: 1;
    }
    
    .modal-box {
        background: white;
        border-radius: 20px;
        padding: 3rem;
        max-width: 600px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        transform: scale(0.9);
        transition: transform 0.3s;
    }
    
    .modal-overlay.active .modal-box {
        transform: scale(1);
    }
    
    .modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
        cursor: pointer;
        color: #666;
    }
    
    .notification {
        position: fixed;
        bottom: -100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #4A90E2, #5DADE2);
        color: white;
        padding: 1rem 2rem;
        border-radius: 30px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        transition: bottom 0.3s;
        z-index: 3000;
        font-weight: bold;
    }
    
    .notification.show {
        bottom: 30px;
    }
    
    .recognition-sparkle {
        position: fixed;
        font-size: 2rem;
        pointer-events: none;
        animation: recognitionPulse 1s ease-out forwards;
        z-index: 1500;
    }
    
    @keyframes recognitionPulse {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: translate(-50%, -50%) scale(2) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    .celebration-emoji {
        position: fixed;
        font-size: 3rem;
        pointer-events: none;
        z-index: 1500;
    }
    
    @keyframes celebrateFloat {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .gallery-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s;
        overflow-y: auto;
    }
    
    .gallery-modal.active {
        opacity: 1;
    }
    
    .gallery-modal .modal-content {
        background: white;
        max-width: 1200px;
        margin: 2rem auto;
        padding: 2rem;
        border-radius: 20px;
    }
    
    .expanded-gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }
    
    .sigma-analysis {
        background: #f8fbff;
        padding: 2rem;
        border-radius: 15px;
        margin: 1rem 0;
    }
    
    .sigma-factor {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0;
        border-bottom: 1px dashed #ddd;
    }
    
    .sigma-total {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
        font-size: 1.3rem;
        font-weight: bold;
        color: #4A90E2;
    }
    
    .sigma-interpretation {
        text-align: center;
        font-style: italic;
        color: #666;
        margin-top: 1rem;
    }
    
    .level-card.unlocked {
        background: linear-gradient(135deg, #e6f2ff 0%, #f0f8ff 100%);
        border-color: #4A90E2;
    }
    
    .music-toggle.playing {
        animation: musicPulse 2s ease-in-out infinite;
    }
    
    @keyframes musicPulse {
        0%, 100% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.1) rotate(10deg); }
    }
`;
document.head.appendChild(style);

// Log successful initialization
console.log('🌊 Wubbleton Reality Engine fully operational 🌊');
console.log('Recognition Events: ACTIVE');
console.log('Ledger Balance: MONITORING');
console.log('σ-Field: RESONATING');
console.log('φ-Clock: TICKING');

 