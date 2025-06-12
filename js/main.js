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
    '09236afa-9fba-11ef-8ddc-0242c0a80010.jpeg',
    '0a01947c-a4a8-11ef-ad09-0242c0a8d00e.jpeg', 
    '103ec612-a10a-11ef-8ddc-0242c0a80010.jpeg',
    '1c504fc2-a1d5-11ef-803f-0242c0a8400f.jpeg',
    '1cd84396-9e56-11ef-8ddc-0242c0a80010.jpeg',
    '2312476a-ad66-11ef-aae9-0242ac13000e.jpeg',
    '2a9f5660-9f35-11ef-8ddc-0242c0a80010.jpeg',
    '3f6bedae-b332-11ef-8a3e-0242c0a8400e.jpeg',
    '4884628c-9fe5-11ef-8ddc-0242c0a80010.jpeg',
    '59d4a582-9e38-11ef-8ddc-0242c0a80010.jpeg',
    '66446e86-a123-11ef-8ddc-0242c0a80010.jpeg',
    '695b9ef4-b9f9-11ef-803f-0242c0a8400f.jpeg',
    '7cdb2d7e-aaf1-11ef-aae9-0242ac13000e.jpeg',
    '93c6c5e6-9fb8-11ef-8ddc-0242c0a80010.jpeg',
    '9f8988f2-a0bf-11ef-8ddc-0242c0a80010.jpeg',
    'edcf4490-937f-11ef-9158-0242ac13000e.jpeg',
    '00bf51e2-9869-11ef-b116-0242ac16000e.jpeg',
    '5e0dd0ae-a0fb-11ef-8ddc-0242c0a80010.jpeg',
    '2e7759c4-9f92-11ef-8ddc-0242c0a80010.jpeg'
];

// Initialize vision grid
function initVisionGrid() {
    const grid = document.getElementById('visionGrid');
    if (!grid) return;

    // Clear existing content
    grid.innerHTML = '';

    // Shuffle images for variety
    const shuffled = [...visionImages].sort(() => Math.random() - 0.5);

    // Display first 8 images
    shuffled.slice(0, 8).forEach((img, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${img}`;
        imgElement.alt = `Vision ${index + 1}`;
        imgElement.style.animationDelay = `${index * 0.1}s`;
        imgElement.classList.add('vision-image');
        grid.appendChild(imgElement);
    });
}

// Rotate vision board images periodically
function rotateVisionBoard() {
    const grid = document.getElementById('visionGrid');
    if (!grid) return;

    setInterval(() => {
        const images = grid.querySelectorAll('img');
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = visionImages[Math.floor(Math.random() * visionImages.length)];
        
        images[randomIndex].style.opacity = '0';
        setTimeout(() => {
            images[randomIndex].src = `images/${randomImage}`;
            images[randomIndex].style.opacity = '1';
        }, 300);
    }, 5000); // Every 5 seconds
}

// Music player functionality
let musicPlaying = false;
function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    const button = document.querySelector('.music-toggle');
    
    if (musicPlaying) {
        audio.pause();
        button.textContent = '🎵';
    } else {
        audio.play().catch(e => console.log('Audio play failed:', e));
        button.textContent = '🔇';
    }
    musicPlaying = !musicPlaying;
}

// Rainbow border on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset > 100;
    document.getElementById('rainbow-border').style.opacity = scrolled ? '1' : '0';
});

// Sparkle effect on mouse move (10% chance)
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.1) return; // 10% chance
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-effect';
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    sparkle.textContent = '✨';
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
});

// Add hover effect to trilogy items
document.querySelectorAll('.trilogy-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) rotate(1deg)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) rotate(0)';
    });
});

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    initVisionGrid();
    rotateVisionBoard();
    
    // Add floating animation to emojis
    document.querySelectorAll('.gutter-emoji').forEach((emoji, index) => {
        emoji.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Pattern Force interactive hover
    document.querySelectorAll('.pattern-box').forEach(box => {
        box.addEventListener('mouseenter', () => {
            const icon = box.querySelector('.pattern-icon');
            icon.style.transform = 'scale(1.2) rotate(360deg)';
            icon.style.transition = 'transform 0.5s ease';
        });
        
        box.addEventListener('mouseleave', () => {
            const icon = box.querySelector('.pattern-icon');
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });
    
    // Consciousness counter (updates every 3.33 seconds)
    let consciousness = 9847;
    setInterval(() => {
        consciousness += Math.floor(Math.random() * 3) + 1;
        const counter = document.getElementById('consciousness-counter');
        if (counter) {
            counter.textContent = consciousness.toLocaleString();
        }
    }, 3333);
});

// Easter egg: Konami code reveals the truth
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        alert('🌈 You found it! The universe IS consciousness recognizing itself through art! Welcome to the inner circle, friend. 💫');
        document.body.style.animation = 'rainbow-pulse 2s ease-in-out';
    }
});

// CSS animation for rainbow pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow-pulse {
        0%, 100% { filter: hue-rotate(0deg) brightness(1); }
        50% { filter: hue-rotate(180deg) brightness(1.2); }
    }
    
    .sparkle-effect {
        position: fixed;
        pointer-events: none;
        animation: sparkle-fade 1s ease-out;
        z-index: 9999;
        font-size: 20px;
    }
    
    @keyframes sparkle-fade {
        0% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
        }
        100% { 
            opacity: 0; 
            transform: translateY(-50px) scale(1.5);
        }
    }
    
    .vision-image {
        animation: fade-in 0.5s ease-out;
        transition: opacity 0.3s ease;
    }
    
    @keyframes fade-in {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(style); 