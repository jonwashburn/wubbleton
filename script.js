// Sparkle cursor effect
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.98) {
        createSparkle(e.pageX, e.pageY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = ['✨', '🌟', '💫', '⭐', '🌸', '🦄', '🌈'][Math.floor(Math.random() * 7)];
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.position = 'absolute';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = '20px';
    sparkle.style.animation = 'float-up 2s ease-out forwards';
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 2000);
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        0% {
            opacity: 1;
            transform: translateY(0px);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px);
        }
    }
`;
document.head.appendChild(style);

// Countdown animation
function animateCountdown() {
    const countdowns = document.querySelectorAll('.countdown');
    
    setInterval(() => {
        countdowns.forEach(countdown => {
            let current = parseInt(countdown.textContent);
            if (current > 0) {
                current -= Math.floor(Math.random() * 3) + 1;
                if (current < 0) current = 0;
                countdown.textContent = current;
                
                if (current < 100) {
                    countdown.style.color = '#ff0000';
                }
            }
        });
    }, 3000);
}

// Gallery functionality
const galleryData = {
    crisis: {
        title: '🔥 The Crisis Collection 🔥',
        images: [
            '1.jpg', '100.jpg', '100d.jpg', '101.jpg', '102.jpg', '103.jpg', '104.jpg', '105d.jpg',
            '106.jpg', '109.jpg', '11.jpg', '110.jpg', '110d.jpg', '111.jpg', '112.jpg', '113.jpg',
            '114.jpg', '114b.jpg', '114c.jpg', '115.jpg'
        ]
    },
    zombies: {
        title: '🧟‍♀️ Modern Zombies Collection 🧟‍♀️',
        images: [
            '1.jpg', '10.jpg', '100.jpg', '101.jpg', '102.jpg', '103.jpg', '104.jpg', '105.jpg',
            '106.jpg', '107.jpg', '108.jpg', '109.jpg', '11.jpg', '110.jpg', '111.jpg', '112.jpg',
            '113.jpg', '114.jpg', '115.jpg', '116.jpg'
        ]
    },
    rapture: {
        title: '🌅 The Rapture Collection 🌅',
        images: [
            '1-Rapture_1.jpg', '10-Rapture_1.jpg', '100-Rapture_1.jpg', '101-Rapture_1.jpg',
            '102-Rapture_1.jpg', '103-Rapture_1.jpg', '104-Rapture_1.jpg', '105-Rapture_1.jpg',
            '106-Rapture_2.jpg', '106-Rapture_3.jpg', '107-Rapture_1.jpg', '109-Rapture_1.jpg',
            '11-Rapture_1.jpg', '110-Rapture_1.jpg', '111-Rapture_1.jpg', '112-Rapture_1.jpg',
            '113-Rapture_1.jpg', '114-Rapture_1.jpg', '115-Rapture_1.jpg', '116-Rapture_1.jpg'
        ]
    }
};

function openGallery(collection) {
    const modal = document.getElementById('galleryModal');
    const title = document.getElementById('galleryTitle');
    const grid = document.getElementById('galleryGrid');
    
    const data = galleryData[collection];
    if (!data) return;
    
    title.textContent = data.title;
    grid.innerHTML = '';
    
    data.images.forEach(imageName => {
        const img = document.createElement('img');
        img.src = `images/gallery/${collection}/${imageName}`;
        img.alt = `${collection} artwork`;
        img.onclick = () => openImageFullscreen(img.src);
        grid.appendChild(img);
    });
    
    modal.style.display = 'block';
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}

function openImageFullscreen(src) {
    const fullscreen = document.createElement('div');
    fullscreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
        max-width: 90vw;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 10px;
    `;
    
    fullscreen.appendChild(img);
    fullscreen.onclick = () => fullscreen.remove();
    document.body.appendChild(fullscreen);
}

// Easter egg functionality
let easterEggClicks = 0;
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('rainbow-text')) {
        easterEggClicks++;
        if (easterEggClicks >= 3) {
            openEasterEgg();
            easterEggClicks = 0;
        }
    }
});

function openEasterEgg() {
    document.getElementById('easterEggModal').style.display = 'block';
}

function closeEasterEgg() {
    document.getElementById('easterEggModal').style.display = 'none';
}

// Join button handler
function handleJoin() {
    const email = document.getElementById('email').value;
    
    if (!email) {
        alert('Please enter your email to ascend 🌟');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Please enter a valid cosmic email address ✨');
        return;
    }
    
    // Create sparkle explosion
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createSparkle(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            );
        }, i * 100);
    }
    
    alert(`🌈 Welcome to the family, beautiful soul! 🦄\n\nYour cosmic journey begins now. Check your email for your sacred Wubble tokens! ✨\n\nRemember: You are infinite, you are loved, you are home. 💖`);
    
    document.getElementById('email').value = '';
}

// Close modals when clicking outside
window.onclick = function(event) {
    const galleryModal = document.getElementById('galleryModal');
    const easterEggModal = document.getElementById('easterEggModal');
    
    if (event.target === galleryModal) {
        closeGallery();
    }
    if (event.target === easterEggModal) {
        closeEasterEgg();
    }
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    animateCountdown();
    
    // Add some initial sparkles
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createSparkle(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight
                );
            }, i * 500);
        }
    }, 1000);
}); 