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

 