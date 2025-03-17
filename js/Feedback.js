// التحقق من تحميل المكتبة
(function() {
    emailjs.init("q6_UjWNOjF6CX6Xe5"); // استبدل "YOUR_USER_ID" بالـ userID الخاص بك من EmailJS
})();

// حدث إرسال النموذج
document.querySelector('.form-box').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إرسال النموذج بالطريقة الافتراضية

    // الحصول على قيم المدخلات
    const firstName = document.getElementById('ijowk').value;
    const lastName = document.getElementById('indfi').value;
    const email = document.getElementById('ipmgh').value;
    const phoneNumber = document.getElementById('imgis').value;
    const message = document.getElementById('i5vyy').value;

    // إرسال البيانات عبر EmailJS
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
