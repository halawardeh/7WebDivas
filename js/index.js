window.addEventListener("load", function () {
    document.getElementById("navbar").classList.add("navbarSlide");
});

window.addEventListener("load", function () {
    document.getElementById("heroImg").classList.add("heroImgLoad");
});

////Check for the session

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

///////load sections

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
  
    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", revealSections);
    revealSections();
  });

  ////logout

  function logout() {
    sessionStorage.clear();  
    localStorage.clear();    

    window.location.href = '/pages/login.html';  
}

window.onload = checkSession;
