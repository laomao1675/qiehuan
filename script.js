let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // 5秒切换
}

function navigateToStart() {
    window.location.href = "start.html";
}

// 处理用户活动检测和返回逻辑
let timer;

function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        window.location.href = "index.html"; // 返回到全屏图片切换页面
    }, 120000); // 2分钟无操作
}

function setupActivityListeners() {
    window.onload = resetTimer;
    window.ontouchstart = resetTimer;
    window.onclick = resetTimer;
}

setupActivityListeners();
