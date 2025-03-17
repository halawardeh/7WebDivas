function toggleForm() {
    document.getElementById('login-form').style.display =
        document.getElementById('login-form').style.display === 'none' ? 'block' : 'none';
    document.getElementById('register-form').style.display =
        document.getElementById('register-form').style.display === 'none' ? 'block' : 'none';
}

function previewImage() {
    const fileInput = document.getElementById('profileImage');
    const fileName = document.getElementById('file-name');
    const profilePreview = document.getElementById('profilePreview');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            profilePreview.src = e.target.result;
        };

        reader.readAsDataURL(file);
        fileName.textContent =` تم اختيار الملف: ${file.name}`;
    } else {
        profilePreview.src = "https://via.placeholder.com/120";
        fileName.textContent = '';
    }
}

function saveToLocalStorage(event) {
    event.preventDefault(); 
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fileInput = document.getElementById('profileImage');
    const fileName = fileInput.files[0].name;

    localStorage.setItem('fullName', fullName);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('image', fileName);

    toggleForm();
}

function saveToSessionStorage(event) {
    event.preventDefault(); 

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    sessionStorage.setItem('login-email', email);
    sessionStorage.setItem('login-password', password);

    window.location.href = '/pages/index.html';

}
