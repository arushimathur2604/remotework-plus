// Team Members Data
const teamMembers = [
    {
        name: 'Sarah Johnson',
        role: 'CEO & Co-founder',
        image: 'https://via.placeholder.com/300x200',
        funFact: 'Favorite AI Tool: WorkPulse for understanding team dynamics'
    },
    {
        name: 'Michael Chen',
        role: 'CTO',
        image: 'https://via.placeholder.com/300x200',
        funFact: 'Built the first prototype of FlowSync in a weekend hackathon'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Head of Product',
        image: 'https://via.placeholder.com/300x200',
        funFact: 'Passionate about using AI to enhance human creativity'
    },
    {
        name: 'David Kim',
        role: 'Lead AI Engineer',
        image: 'https://via.placeholder.com/300x200',
        funFact: 'Dreams in algorithms and neural networks'
    },
    {
        name: 'Lisa Chen',
        role: 'UX Director',
        image: 'https://via.placeholder.com/300x200',
        funFact: 'Believes in making AI accessible to everyone'
    }
];

// Timeline Data
const timelineEvents = [
    {
        year: '2023',
        title: 'The Beginning',
        description: 'RemoteWork+ was founded with a vision to revolutionize remote collaboration.'
    },
    {
        year: '2023',
        title: 'WorkPulse Launch',
        description: 'Released our first AI-powered tool for digital body language detection.'
    },
    {
        year: '2024',
        title: 'FlowSync Innovation',
        description: 'Introduced adaptive workspaces that learn from team behavior.'
    },
    {
        year: '2024',
        title: 'Global Expansion',
        description: 'Reached teams across 50+ countries, transforming remote work globally.'
    },
    {
        year: '2025',
        title: 'AI Innovation Award',
        description: 'Recognized as the leading AI-powered collaboration platform.'
    }
];

// Initialize Team Carousel
function initializeTeamCarousel() {
    const carouselTrack = document.querySelector('.carousel-track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    // Populate carousel with team members
    carouselTrack.innerHTML = teamMembers.map(member => `
        <div class="team-member">
            <img src="${member.image}" alt="${member.name}" class="member-image">
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
                <div class="member-fun-fact">
                    <i class="fas fa-lightbulb"></i>
                    <p>${member.funFact}</p>
                </div>
            </div>
        </div>
    `).join('');

    // Auto scroll functionality
    let autoScrollInterval = setInterval(scrollNext, 5000);

    function scrollNext() {
        currentIndex = (currentIndex + 1) % teamMembers.length;
        updateCarousel();
    }

    function scrollPrev() {
        currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -currentIndex * 330; // 300px card width + 30px margin
        carouselTrack.style.transform = `translateX(${offset}px)`;
    }

    // Event Listeners
    prevBtn.addEventListener('click', () => {
        clearInterval(autoScrollInterval);
        scrollPrev();
        autoScrollInterval = setInterval(scrollNext, 5000);
    });

    nextBtn.addEventListener('click', () => {
        clearInterval(autoScrollInterval);
        scrollNext();
        autoScrollInterval = setInterval(scrollNext, 5000);
    });

    // Pause auto-scroll on hover
    carouselTrack.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });

    carouselTrack.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(scrollNext, 5000);
    });
}

// Initialize Timeline
function initializeTimeline() {
    const timeline = document.getElementById('timeline');
    
    timeline.innerHTML = timelineEvents.map((event, index) => `
        <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
            <div class="timeline-content">
                <h3>${event.year}</h3>
                <h4>${event.title}</h4>
                <p>${event.description}</p>
            </div>
        </div>
    `).join('');

    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.2 }
    );

    timelineItems.forEach(item => observer.observe(item));
}

// Animate Benefits Cards
function initializeBenefits() {
    const benefitCards = document.querySelectorAll('.benefit-card');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.2 }
    );

    benefitCards.forEach(card => observer.observe(card));
}

// Parallax Effect for Hero Section
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const parallax = document.querySelector('.parallax');
        const scrolled = window.pageYOffset;
        parallax.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeTeamCarousel();
    initializeTimeline();
    initializeBenefits();
    initializeParallax();
});
