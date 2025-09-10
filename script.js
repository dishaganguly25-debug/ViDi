// Password functionality
const correctPassword = "DIVI";
const passwordScreen = document.getElementById('passwordScreen');
const mainContent = document.getElementById('mainContent');
const submitPassword = document.getElementById('submitPassword');
const passwordInput = document.getElementById('passwordInput');
const error = document.getElementById('error');

submitPassword.addEventListener('click', () => {
    if(passwordInput.value === correctPassword){
        passwordScreen.style.display = 'none';
        mainContent.style.display = 'block';
    } else {
        error.style.display = 'block';
    }
});

// Card flip
const card = document.querySelector('.card');
card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
});

// Pop-up hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = 2 + Math.random() * 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);