(function() {
    emailjs.init("q6_UjWNOjF6CX6Xe5"); 
})();

document.querySelector('.form-box').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const firstName = document.getElementById('ijowk').value;
    const lastName = document.getElementById('indfi').value;
    const email = document.getElementById('ipmgh').value;
    const phoneNumber = document.getElementById('imgis').value;
    const message = document.getElementById('i5vyy').value;

    emailjs.send("service_h8zyofd", "template_hxdryvg", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phoneNumber,
        message: message
    })

    .then(function(response) {
        alert('تم إرسال الفيدباك بنجاح!');
    }, function(error) {
        alert('حدث خطأ أثناء إرسال الفيدباك. حاول مرة أخرى.');
    });
});
