window.addEventListener("load", function () {
    document.getElementById("navbar").classList.add("navbarSlide");
});

window.addEventListener("load", function () {
    document.getElementById("heroImg").classList.add("heroImgLoad");
});

function checkSession() {
    const email = sessionStorage.getItem('login-email');
    
    if (email) {
        document.getElementById('auth-links').classList.add('d-none');
        document.getElementById('auth-links-mobile').classList.add('d-none');
        document.getElementById('profile-links').classList.remove('d-none');
    } else {
        document.getElementById('auth-links').classList.remove('d-none');
        document.getElementById('auth-links-mobile').classList.remove('d-none');
        document.getElementById('profile-links').classList.add('d-none');
    }
}

function logout() {
    sessionStorage.removeItem('login-email');
    sessionStorage.removeItem('login-password');
    window.location.href = '/pages/login.html';  
}

window.onload = checkSession;