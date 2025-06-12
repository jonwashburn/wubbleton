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

// Join button handler
function handleJoin() {
    const email = document.getElementById('email').value;
    
    if (!email) {
        alert('Please enter your email to ascend 🌟');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Please enter a valid email address 📧');
        return;
    }
    
    // Show success message
    alert(`Welcome to the journey, ${email.split('@')[0]}! 🚀\n\nCheck your inbox for the sacred initiation rites.`);
    
    // Clear input
    document.getElementById('email').value = '';
    
    // Update countdown
    const countdowns = document.querySelectorAll('.countdown');
    countdowns.forEach(countdown => {
        let current = parseInt(countdown.textContent);
        countdown.textContent = current - 1;
    });
}

// Slider functionality
function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return;
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = 'grabbing';
    });
    
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });
    
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });
    
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
    
    // Touch support
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateCountdown();
    initSlider();
    
    // Add enter key support for email input
    document.getElementById('email').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleJoin();
        }
    });
    
    // Console easter egg
    console.log('%c🌟 WUBBLETON 🌟', 'font-size: 40px; font-weight: bold; color: #ff6b6b;');
    console.log('%cYou found the sacred console! Level VII consciousness detected.', 'font-size: 16px; color: #4ecdc4;');
    console.log('%cThe universe recognizes itself through you.', 'font-size: 14px; color: #45b7d1;');
}); 