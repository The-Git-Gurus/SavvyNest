document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    
    if (!validateEmail(email)) {
        showError('Please enter a valid email address');
        return;
    }
    
    if (password.length < 8) {
        showError('Password must be at least 8 characters');
        return;
    }
    
    
    showLoading();
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1500);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff4444';
    errorDiv.style.marginBottom = '15px';
    errorDiv.textContent = message;
    
    const form = document.getElementById('loginForm');
    if (form.querySelector('.error-message')) {
        form.removeChild(form.querySelector('.error-message'));
    }
    form.insertBefore(errorDiv, form.firstChild);
}

function showLoading() {
    const btn = document.querySelector('.login-btn');
    btn.innerHTML = '<div class="loader"></div>';
    btn.style.cursor = 'not-allowed';
    btn.disabled = true;
}


document.querySelector('.login-btn').addEventListener('click', function(e) {
    let ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.background = 'rgba(255,255,255,0.5)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.left = e.clientX - this.offsetLeft + 'px';
    ripple.style.top = e.clientY - this.offsetTop + 'px';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 500);
});
