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
            transform: translateY(0) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Countdown animation
function animateCountdown() {
    const numbers = document.querySelectorAll('.rainbow-number');
    const soulCount = numbers[1]; // The middle number (souls awakened)
    
    if (soulCount) {
        setInterval(() => {
            let current = parseInt(soulCount.textContent);
            if (current < 9999) {
                current += Math.floor(Math.random() * 3) + 1;
                if (current > 9999) current = 9999;
                soulCount.textContent = current.toLocaleString();
                
                // Add rainbow flash
                soulCount.style.animation = 'none';
                setTimeout(() => {
                    soulCount.style.animation = 'rainbow 2s ease-in-out';
                }, 10);
            }
        }, 5000);
    }
}

// Join button handler with love
function handleJoin() {
    const email = document.getElementById('email').value;
    
    if (!email) {
        showLoveMessage('Please share your email with us, beautiful soul 💖');
        return;
    }
    
    if (!email.includes('@')) {
        showLoveMessage('Your email needs an @ symbol, dear one 🌸');
        return;
    }
    
    // Show success message
    showLoveMessage(`Welcome home, ${email.split('@')[0]}! 🌈✨\n\nYour journey to collective consciousness begins now.\nCheck your inbox for a message filled with love and light. 💌`);
    
    // Clear input
    document.getElementById('email').value = '';
    
    // Update countdown
    const loveMessage = document.querySelector('.love-message');
    if (loveMessage) {
        let remaining = parseInt(loveMessage.textContent.match(/\d+/)[0]);
        remaining--;
        loveMessage.innerHTML = `💖 Only ${remaining} sacred spaces remain 💖`;
    }
}

// Show love messages instead of alerts
function showLoveMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ff6b6b, #feca57);
        color: white;
        padding: 40px;
        border-radius: 30px;
        font-size: 24px;
        text-align: center;
        z-index: 10000;
        max-width: 500px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        font-family: 'Kalam', cursive;
    `;
    messageDiv.innerHTML = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.transition = 'opacity 1s ease';
        messageDiv.style.opacity = '0';
        setTimeout(() => messageDiv.remove(), 1000);
    }, 4000);
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

// Wisdom carousel functionality
let currentWisdom = 0;
const wisdomCards = [
    {
        text: "If a tree falls in the forest and no one posts about it on social media, did you even experience nature?",
        author: "Wubbushi, during Morning Meditation"
    },
    {
        text: "The only thing standing between you and enlightenment is probably your student loans. But mostly your ego. But definitely also the loans.",
        author: "Wubbushi, Financial Consciousness Workshop"
    },
    {
        text: "We are all one consciousness experiencing itself subjectively. Except Dave. Dave's just here for the tax benefits.",
        author: "Wubbushi, Community Meeting"
    },
    {
        text: "Your third eye is like a smartphone camera - it works better when you clean the lens with organic kale juice.",
        author: "Wubbushi, Nutrition Seminar"
    },
    {
        text: "Manifestation is just Amazon Prime for the universe, but with worse delivery times and no tracking number.",
        author: "Wubbushi, Abundance Workshop"
    },
    {
        text: "The difference between a cult and a consciousness collective is mostly just better graphic design and kombucha on tap.",
        author: "Wubbushi, Marketing Meeting"
    }
];

function updateWisdomDisplay() {
    const card = document.querySelector('.wisdom-card');
    if (card) {
        const wisdom = wisdomCards[currentWisdom];
        card.querySelector('.wisdom-text').textContent = wisdom.text;
        card.querySelector('footer').textContent = `- ${wisdom.author}`;
        
        // Add fade animation
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.opacity = '1';
        }, 100);
    }
}

function nextWisdom() {
    currentWisdom = (currentWisdom + 1) % wisdomCards.length;
    updateWisdomDisplay();
}

function previousWisdom() {
    currentWisdom = (currentWisdom - 1 + wisdomCards.length) % wisdomCards.length;
    updateWisdomDisplay();
}

// Quiz functionality
let currentQuestion = 0;
let quizScore = 0;
const quizQuestions = [
    {
        question: "You wake up at 3 AM. Your first thought is:",
        options: {
            A: "Time for shadow work!",
            B: "The universe is calling me",
            C: "I need to pee",
            D: "Is this the simulation glitching?"
        }
    },
    {
        question: "Your ideal breakfast consists of:",
        options: {
            A: "Activated charcoal smoothie with intentions",
            B: "Whatever the earth provides",
            C: "Coffee. Just coffee.",
            D: "The tears of my enemies (kidding! ...mostly)"
        }
    },
    {
        question: "When someone says 'good vibes only', you:",
        options: {
            A: "Immediately sage the area",
            B: "Check their aura for authenticity",
            C: "Slowly back away",
            D: "Ask if bad vibes get a participation trophy"
        }
    },
    {
        question: "Your spirit animal is:",
        options: {
            A: "A phoenix rising from organic ashes",
            B: "All animals are my spirit animal",
            C: "My cat, who judges me daily",
            D: "A WiFi router with full bars"
        }
    },
    {
        question: "The meaning of life is:",
        options: {
            A: "To transcend the illusion of separation",
            B: "42, obviously",
            C: "To find good parking",
            D: "Whatever Wubbushi says it is"
        }
    }
];

function displayQuestion() {
    const questionDiv = document.getElementById('quiz-question');
    const optionsDiv = document.getElementById('quiz-options');
    
    if (currentQuestion < quizQuestions.length) {
        const q = quizQuestions[currentQuestion];
        questionDiv.innerHTML = `
            <h3>Question ${currentQuestion + 1} of ${quizQuestions.length}:</h3>
            <p>${q.question}</p>
        `;
        
        optionsDiv.innerHTML = Object.entries(q.options).map(([key, value]) => 
            `<button onclick="answerQuiz('${key}')" class="quiz-button">${key}) ${value}</button>`
        ).join('');
    }
}

function answerQuiz(answer) {
    // Award points based on answer
    const points = {
        A: 4,  // Maximum enlightenment
        B: 3,  // Pretty woke
        C: 1,  // Still asleep but honest
        D: 2   // Self-aware skeptic
    };
    
    quizScore += points[answer];
    currentQuestion++;
    
    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    const resultDiv = document.getElementById('quiz-result');
    const scoreSpan = document.getElementById('wubble-score');
    const messageP = document.getElementById('wubble-message');
    
    document.getElementById('quiz-options').style.display = 'none';
    document.getElementById('quiz-question').style.display = 'none';
    resultDiv.style.display = 'block';
    
    const maxScore = quizQuestions.length * 4;
    const percentage = (quizScore / maxScore) * 100;
    
    scoreSpan.textContent = `${quizScore}/${maxScore}`;
    
    if (percentage >= 80) {
        messageP.textContent = "OMG! You're basically already enlightened! Your chakras are so aligned they have their own WiFi network. Welcome home, cosmic warrior!";
    } else if (percentage >= 60) {
        messageP.textContent = "You're vibrating at a beautiful frequency! With just a little more kombucha and crystal healing, you'll be ready for full consciousness merger.";
    } else if (percentage >= 40) {
        messageP.textContent = "Your potential is showing! You might still eat gluten and believe in 'time', but we can work with that. Baby steps to enlightenment!";
    } else {
        messageP.textContent = "You're perfectly imperfect! Your skepticism is just your ego protecting you from infinite joy. Come for a weekend retreat and we'll fix that right up!";
    }
}

function retakeQuiz() {
    currentQuestion = 0;
    quizScore = 0;
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-question').style.display = 'block';
    document.getElementById('quiz-options').style.display = 'block';
    displayQuestion();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateCountdown();
    initSlider();
    initParallax();
    updateWisdomDisplay();
    displayQuestion();
    
    // Add enter key support for email input
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleJoin();
            }
        });
    }
    
    // Smooth scroll for all sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Console easter egg
    console.log('%c🌈 Welcome to Wubbleton, Beautiful Soul! 🦄', 'font-size: 30px; font-weight: bold; background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
    console.log('%c✨ You found our secret garden! ✨', 'font-size: 20px; color: #ff6b6b;');
    console.log('%cThe universe brought you here for a reason... 💖', 'font-size: 16px; color: #a29bfe;');
    console.log('%cYour consciousness level: ∞', 'font-size: 18px; color: #5f27cd; font-weight: bold;');
});

// Parallax scrolling effect
function initParallax() {
    // Check if mobile device
    const isMobile = window.innerWidth <= 768;
    
    // Don't initialize parallax on mobile
    if (isMobile) {
        return;
    }
    
    const bigImages = document.querySelectorAll('.big-image');
    const overlayTexts = document.querySelectorAll('.overlay-text');
    
    // Create a more performant scroll handler
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        bigImages.forEach((image, index) => {
            const rect = image.getBoundingClientRect();
            const speed = 0.5; // Adjust for more/less parallax
            
            // Only update if image is in viewport
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                const yPos = -(scrolled - image.offsetTop) * speed;
                image.style.backgroundPosition = `center ${yPos}px`;
                
                // Parallax for text overlay
                if (overlayTexts[index]) {
                    const textSpeed = 0.3;
                    const textY = (scrolled - image.offsetTop) * textSpeed;
                    overlayTexts[index].style.transform = `translateY(${textY}px) translateZ(0)`;
                }
            }
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', requestTick);
    
    // Initial call
    updateParallax();
} 