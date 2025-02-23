document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetForm = tab.dataset.tab;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show target form
            forms.forEach(form => {
                form.classList.remove('active');
                if (form.id === `${targetForm}Form`) {
                    form.classList.add('active');
                }
            });
        });
    });

    // Password Visibility Toggle
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            button.classList.toggle('fa-eye');
            button.classList.toggle('fa-eye-slash');
        });
    });

    // Form Validation and Submission
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Add your login logic here
        console.log('Login attempt:', { email, password });
        
        // Simulate successful login
        showNotification('Login successful! Redirecting...', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Basic validation
        if (password !== confirmPassword) {
            showNotification('Passwords do not match!', 'error');
            return;
        }
        
        // Add your registration logic here
        console.log('Registration attempt:', { name, email, password });
        
        // Simulate successful registration
        showNotification('Registration successful! Please log in.', 'success');
        setTimeout(() => {
            // Switch to login tab
            document.querySelector('[data-tab="login"]').click();
        }, 1500);
    });

    // Social Login Handlers
    const socialButtons = document.querySelectorAll('.social-button');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            const provider = button.classList.contains('google') ? 'Google' : 'GitHub';
            showNotification(`${provider} login coming soon!`, 'info');
        });
    });
});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add to DOM
    document.body.appendChild(notification);

    // Add active class after a small delay (for animation)
    setTimeout(() => notification.classList.add('active'), 10);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('active');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success':
            return 'fa-check-circle';
        case 'error':
            return 'fa-exclamation-circle';
        case 'info':
            return 'fa-info-circle';
        default:
            return 'fa-info-circle';
    }
}

// Add notification styles dynamically
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateX(120%);
        transition: transform 0.3s ease;
        z-index: 1000;
    }

    .notification.active {
        transform: translateX(0);
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .notification.success {
        background: #4CAF50;
        color: white;
    }

    .notification.error {
        background: #f44336;
        color: white;
    }

    .notification.info {
        background: var(--primary-color);
        color: white;
    }
`;
document.head.appendChild(style);
