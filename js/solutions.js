// Meeting Summary Demo
function generateSummary() {
    const notes = document.getElementById('meeting-notes').value;
    if (!notes.trim()) {
        alert('Please enter some meeting notes first!');
        return;
    }

    const summaryElement = document.getElementById('summary-result');
    summaryElement.innerHTML = '<div class="loading">Analyzing...</div>';

    // Simulate AI processing
    setTimeout(() => {
        const summary = generateAISummary(notes);
        summaryElement.innerHTML = `
            <h4>AI-Generated Summary:</h4>
            <p>${summary}</p>
            <div class="action-items">
                <h4>Action Items:</h4>
                <ul>
                    <li>Schedule follow-up meeting with team</li>
                    <li>Review project timeline</li>
                    <li>Update documentation</li>
                </ul>
            </div>
        `;
    }, 1500);
}

function generateAISummary(notes) {
    // Simulate AI summary generation
    return "Meeting focused on project milestones and team collaboration. Key points discussed include timeline adjustments, resource allocation, and upcoming deliverables. Team agreed on new sprint planning approach.";
}

// Task Prioritization Chart
let taskChart;
const taskData = {
    labels: ['High Priority', 'Medium Priority', 'Low Priority'],
    datasets: [{
        data: [3, 5, 2],
        backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1'],
    }]
};

function initializeTaskChart() {
    const ctx = document.getElementById('taskChart').getContext('2d');
    taskChart = new Chart(ctx, {
        type: 'doughnut',
        data: taskData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function addTask() {
    const priorities = taskData.datasets[0].data;
    const randomIndex = Math.floor(Math.random() * 3);
    priorities[randomIndex]++;
    taskChart.update();
}

function updatePriorities() {
    const priorities = taskData.datasets[0].data;
    priorities.forEach((_, index) => {
        priorities[index] = Math.floor(Math.random() * 8) + 1;
    });
    taskChart.update();
}

// Chatbot Demo
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-message');

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    userInput.value = '';

    // Simulate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        addMessage(response, 'bot');
    }, 1000);
}

function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(message) {
    const responses = [
        "I'll help you schedule that meeting right away.",
        "Based on the team's availability, here are some suggested time slots.",
        "I've analyzed the project timeline and can help optimize the schedule.",
        "Let me check the team's current workload and get back to you.",
        "I can help you prioritize those tasks effectively."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Analytics Dashboard
let analyticsChart;
const analyticsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
        label: 'Team Engagement',
        data: [75, 82, 78, 85, 80],
        borderColor: '#4ecdc4',
        tension: 0.4,
        fill: false
    }, {
        label: 'Task Completion',
        data: [65, 75, 70, 80, 85],
        borderColor: '#45b7d1',
        tension: 0.4,
        fill: false
    }]
};

function initializeAnalyticsChart() {
    const ctx = document.getElementById('analyticsChart').getContext('2d');
    analyticsChart = new Chart(ctx, {
        type: 'line',
        data: analyticsData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function updateAnalytics() {
    analyticsData.datasets.forEach(dataset => {
        dataset.data = dataset.data.map(() => Math.floor(Math.random() * 30) + 60);
    });
    analyticsChart.update();
}

// Initialize charts when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeTaskChart();
    initializeAnalyticsChart();

    // Add event listener for Enter key in chat input
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
