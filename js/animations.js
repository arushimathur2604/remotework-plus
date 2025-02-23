document.addEventListener('DOMContentLoaded', () => {
    // Initialize all animations
    initPageLoadAnimations();
    initScrollAnimations();
    initNavbarEffects();
    initGraphAnimations();
    initPageTransitions();
    initMagneticButtons();
    initTypingAnimation();
    initProgressBars();
    initParticleBurst();
    init3DCards();
    initSpotlightEffect();
    initTextScramble();
});

// Page Load Animations
function initPageLoadAnimations() {
    const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
    elements.forEach(element => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.opacity = '1';
        }, 100);
    });
}

// Scroll-Based Animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => observer.observe(element));
}

// Navbar Effects
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class when page is scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// Graph Animations
function initGraphAnimations() {
    const graphs = document.querySelectorAll('.graph-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    graphs.forEach(graph => observer.observe(graph));
}

// Page Transitions
function initPageTransitions() {
    const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])');
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.hostname === window.location.hostname) {
                e.preventDefault();
                const target = link.href;

                transition.classList.add('active');
                setTimeout(() => {
                    window.location.href = target;
                }, 300);
            }
        });
    });
}

// Parallax Effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });
}

// Feature Cards Tilt Effect
function initTiltEffect() {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// Magnetic Button Effect
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.magnetic-button');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// Typing Animation
function initTypingAnimation() {
    const typingElements = document.querySelectorAll('.typing');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        
        // Start typing when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    type();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// Progress Bar Animation
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// Particle Burst Effect
function initParticleBurst() {
    const elements = document.querySelectorAll('.particle-burst');
    
    elements.forEach(element => {
        element.addEventListener('click', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            for (let i = 0; i < 8; i++) {
                createParticle(x, y, element);
            }
        });
    });
}

function createParticle(x, y, element) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    element.appendChild(particle);
    
    const destinationX = (Math.random() - 0.5) * 200;
    const destinationY = (Math.random() - 0.5) * 200;
    const rotation = Math.random() * 520;
    const delay = Math.random() * 200;
    
    particle.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        transform: translate(0, 0) rotate(0deg);
        animation: particle 1s ease-out ${delay}ms forwards;
    `;
    
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// 3D Card Effect
function init3DCards() {
    const cards = document.querySelectorAll('.card-3d');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale3d(1.05, 1.05, 1.05)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Spotlight Effect
function initSpotlightEffect() {
    const elements = document.querySelectorAll('.spotlight');
    
    elements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            element.style.setProperty('--spotlight-x', `${x}px`);
            element.style.setProperty('--spotlight-y', `${y}px`);
        });
    });
}

// Text Scramble Effect
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    
    update() {
        let output = '';
        let complete = 0;
        
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += char;
            } else {
                output += from;
            }
        }
        
        this.el.innerText = output;
        
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

function initTextScramble() {
    const elements = document.querySelectorAll('.text-scramble');
    elements.forEach(el => {
        const fx = new TextScramble(el);
        const originalText = el.textContent;
        
        el.addEventListener('mouseenter', () => {
            fx.setText(originalText);
        });
    });
}

// Initialize everything
window.addEventListener('load', () => {
    initParallax();
    initTiltEffect();
});
