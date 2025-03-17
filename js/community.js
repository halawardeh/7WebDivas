function addlike() {
    let heart = document.querySelector(".heart svg");
    let likes = document.querySelector(".likes");
    
    if (heart.style.fill === "red") {
        heart.style.fill = "#262626";
        likes.innerText = (parseInt(likes.innerText) - 1) + " اعجاب";
    } else {
        heart.style.fill = "red";
        likes.innerText = (parseInt(likes.innerText) + 1) + " اعجاب";
    }
}




function addComment() {
    debugger
let commentInput = document.getElementById("commentInput");
let commentText = commentInput.value.trim();

if (commentText !== "") {
    let commentsContainer = document.getElementById("commentsContainer");

    // إنشاء عنصر جديد للتعليق
    let newComment = document.createElement("div");
    newComment.className = "comment";
    newComment.textContent = commentText; 

    // إضافة التعليق إلى الحاوية
    commentsContainer.appendChild(newComment);

    // إعادة تعيين قيمة الإدخال
    commentInput.value = "";
} else {
    alert("يرجى إدخال تعليق قبل النشر.");
}
}





function sharePost() {
const postUrl = window.location.href;
if (navigator.share) {
navigator.share({
    title: 'تحقق من هذا المنشور!',
    url: postUrl
}).then(() => {
    console.log('تمت المشاركة بنجاح');
}).catch((error) => {
    console.log('خطأ في المشاركة:', error);
});
} else {
alert("المشاركة غير مدعومة في هذا المتصفح.");
}
}