const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const mobileSignupLink = document.querySelector('.mobile-signup');
const mobileLoginLink = document.querySelector('.mobile-login');

// Função para alternar visibilidade da senha
function togglePassword(inputId, iconElement) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        iconElement.classList.remove('bx-hide');
        iconElement.classList.add('bx-show');
    } else {
        passwordInput.type = 'password';
        iconElement.classList.remove('bx-show');
        iconElement.classList.add('bx-hide');
    }
}

// Adicionar event listeners para os ícones de olho
document.querySelectorAll('.eye-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const inputId = this.previousElementSibling.id;
        togglePassword(inputId, this);
    });
});

// Função para verificar se é dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768;
}

// Desktop events
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Mobile events
mobileSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.sign-in').style.display = 'none';
    document.querySelector('.sign-up').style.display = 'block';
});

mobileLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.sign-up').style.display = 'none';
    document.querySelector('.sign-in').style.display = 'block';
});

// Função para ajustar o layout baseado no tamanho da tela
function updateLayout() {
    if (isMobile()) {
        // Mobile layout
        document.querySelector('.sign-up').style.display = 'none';
        document.querySelector('.sign-in').style.display = 'block';
        document.querySelector('.mobile-login').style.display = 'block';
        document.querySelector('.mobile-signup').style.display = 'block';
    } else {
        // Desktop layout
        document.querySelector('.sign-up').style.display = 'block';
        document.querySelector('.sign-in').style.display = 'block';
        document.querySelector('.mobile-login').style.display = 'none';
        document.querySelector('.mobile-signup').style.display = 'none';
        container.classList.remove('active');
    }
}

// Event listener para redimensionamento
window.addEventListener('resize', updateLayout);

// Inicializar layout
updateLayout();
