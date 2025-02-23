// Search Functionality
const searchInput = document.getElementById('resource-search');
const searchSuggestions = document.getElementById('search-suggestions');

const sampleSuggestions = [
    'AI Meeting Templates',
    'Remote Work Best Practices',
    'Team Collaboration Tools',
    'Workflow Automation Guide',
    'Productivity Tips',
    'AI Implementation Case Studies'
];

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    if (value.length < 2) {
        searchSuggestions.classList.remove('active');
        return;
    }

    const filteredSuggestions = sampleSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value)
    );

    if (filteredSuggestions.length > 0) {
        searchSuggestions.innerHTML = filteredSuggestions
            .map(suggestion => `<div class="suggestion-item">${suggestion}</div>`)
            .join('');
        searchSuggestions.classList.add('active');
    } else {
        searchSuggestions.classList.remove('active');
    }
});

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target)) {
        searchSuggestions.classList.remove('active');
    }
});

// Blog Feed
const blogPosts = [
    {
        title: 'The Future of AI in Remote Collaboration',
        date: '2025-02-23',
        author: 'Sarah Johnson',
        excerpt: 'Discover how AI is revolutionizing the way remote teams work together...'
    },
    {
        title: 'Best Practices for Hybrid Team Management',
        date: '2025-02-22',
        author: 'Michael Chen',
        excerpt: 'Learn effective strategies for managing hybrid teams using AI tools...'
    },
    {
        title: 'AI-Driven Productivity Tools for 2025',
        date: '2025-02-21',
        author: 'Alex Rivera',
        excerpt: 'Explore the latest AI-powered tools that are transforming workplace productivity...'
    }
];

function loadBlogPosts() {
    const blogFeed = document.getElementById('blog-feed');
    blogFeed.innerHTML = blogPosts.map(post => `
        <div class="blog-post">
            <h3>${post.title}</h3>
            <div class="blog-post-meta">
                <span>${new Date(post.date).toLocaleDateString()}</span> | 
                <span>${post.author}</span>
            </div>
            <p>${post.excerpt}</p>
            <a href="#" class="read-more">Read More →</a>
        </div>
    `).join('');
}

// Video Player
const videoTimestamps = [
    { time: '0:00', label: 'Introduction' },
    { time: '2:30', label: 'Getting Started with AI Tools' },
    { time: '5:45', label: 'Team Collaboration Features' },
    { time: '8:15', label: 'Advanced Automation Tips' },
    { time: '12:00', label: 'Q&A Session' }
];

function loadVideoPlayer() {
    const timestampList = document.getElementById('timestamp-list');
    timestampList.innerHTML = videoTimestamps.map(timestamp => `
        <li class="timestamp-item" data-time="${timestamp.time}">
            <i class="fas fa-play-circle"></i>
            <span>${timestamp.time}</span> - ${timestamp.label}
        </li>
    `).join('');
}

// Whitepapers & Case Studies
const whitepapers = [
    {
        title: 'AI Impact on Workplace Efficiency',
        type: 'Whitepaper',
        pages: 25,
        downloadUrl: '#'
    },
    {
        title: 'Remote Team Success Story',
        type: 'Case Study',
        pages: 15,
        downloadUrl: '#'
    },
    {
        title: 'Future of Work Report 2025',
        type: 'Research Paper',
        pages: 40,
        downloadUrl: '#'
    }
];

function loadWhitepapers() {
    const whitepaperGrid = document.getElementById('whitepaper-grid');
    whitepaperGrid.innerHTML = whitepapers.map(paper => `
        <div class="whitepaper-card">
            <h3>${paper.title}</h3>
            <p>${paper.type} • ${paper.pages} pages</p>
            <a href="${paper.downloadUrl}" class="download-btn">
                <i class="fas fa-download"></i> Download
            </a>
        </div>
    `).join('');
}

// Template Generator
const templateTypes = {
    meeting: {
        small: 'Meeting summary template for small teams with AI-powered action item detection',
        medium: 'Comprehensive meeting template with integrated team feedback system',
        large: 'Enterprise meeting management template with department coordination'
    },
    workflow: {
        small: 'Simple workflow automation template for small team processes',
        medium: 'Advanced workflow template with cross-team collaboration features',
        large: 'Complex workflow management system for large organizations'
    },
    task: {
        small: 'Basic task prioritization template for small teams',
        medium: 'Team-based task management template with AI suggestions',
        large: 'Enterprise task coordination system with department-level tracking'
    }
};

function generateTemplate() {
    const type = document.getElementById('template-type').value;
    const size = document.getElementById('team-size').value;
    const preview = document.getElementById('template-preview');

    preview.innerHTML = `
        <h4>Generated Template</h4>
        <p>${templateTypes[type][size]}</p>
        <button class="download-template-btn">
            <i class="fas fa-download"></i> Download Template
        </button>
    `;
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
    loadVideoPlayer();
    loadWhitepapers();

    // Add scroll animations
    const cards = document.querySelectorAll('.resource-card');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        },
        { threshold: 0.1 }
    );

    cards.forEach(card => observer.observe(card));
});
