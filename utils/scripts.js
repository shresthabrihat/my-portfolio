let isRed = false;
    
function toggleColor() {
    const header = document.querySelector('h1');
    if (isRed) {
        header.style.color = '#6a5d19';
    } else {
        header.style.color = 'red';
    }
    isRed = !isRed; // Toggle the flag
}

function changeColor() {
    document.querySelector('h1').style.color = 'red';
}
function changeColorBack() {
    document.querySelector('h1').style.color = '#6a5d19';
}

// Register page

// Clear custom validity on input
document.getElementById('confirmPassword').oninput = function() {
    this.setCustomValidity('');
};

document.getElementById('registrationForm').onsubmit = function(event) {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('confirmPassword').setCustomValidity('Passwords do not match.');
        event.preventDefault();
    } else {
        document.getElementById('confirmPassword').setCustomValidity(''); // Clear custom validity
        event.preventDefault();
        alert('Registration successful! A confirmation email has been sent.');
    }
};

// Function to switch to login form
function switchToLogin() {
    document.getElementById('registrationForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('form-title').textContent = 'Login Form';
}

// Function to switch to registration form
function switchToRegister() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registrationForm').classList.remove('hidden');
    document.getElementById('form-title').textContent = 'Registration Form';
}

