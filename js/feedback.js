document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const feedback = document.getElementById('feedback');
    const feedbackContainer = document.getElementById('feedbackContainer');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            const feedbackItem = document.createElement('div');
            feedbackItem.classList.add('feedback-item');
            feedbackItem.innerHTML = `
                <p><strong>Username:</strong> ${username.value}</p>
                <p><strong>Email:</strong> ${email.value}</p>
                <p><strong>Feedback:</strong> ${feedback.value}</p>
            `;

            feedbackContainer.prepend(feedbackItem);
            form.reset();
            showSuccess('Thank you for your feedback!');
        }
    });

    function validateForm() {
        let valid = true;

        document.querySelectorAll('.input-box').forEach(box => {
            const input = box.querySelector('input, textarea');
            const error = box.querySelector('.error-message');

            if (!input.value.trim()) {
                error.textContent = 'This field is required';
                error.style.display = 'block';
                valid = false;
            } else {
                error.textContent = '';
                error.style.display = 'none';
            }
        });

        return valid;
    }

    function showSuccess(message) {
        successMessage.textContent = message;
        successMessage.style.display = 'block';

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }

    // Floating emoji generator
    const emojis = ['😊', '💡', '🌟', '📝', '👍', '💬', '🎉'];
    function createFloatingEmoji() {
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.animationDuration = (Math.random() * 10 + 10) + 's';
        document.body.appendChild(emoji);

        setTimeout(() => emoji.remove(), 15000);
    }
    setInterval(createFloatingEmoji, 3000);
});

