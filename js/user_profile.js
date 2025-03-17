window.onload = function() {
    console.log("hi")
        const storedFullName = localStorage.getItem('fullName');
        const storedPhoneNumber = localStorage.getItem('phoneNumber');
        const storedEmail = localStorage.getItem('email');
        const storedProfileImageName = localStorage.getItem('profileImageName');

        if (storedFullName) {
            document.getElementById('username').innerText = storedFullName;
        }
        if (storedPhoneNumber) {
            document.getElementById('contact').innerText = `📧 ${storedEmail} | 📞 ${storedPhoneNumber}`;
        }
        if (storedProfileImageName) {
            document.getElementById('profilePic').src = `./images/${storedProfileImageName}`; 
        } else {
            document.getElementById('profilePic').src = './images/default.jpg';
        }
        console.log(storedEmail)
    };