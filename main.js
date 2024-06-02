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
    window.onkeypress = resetTimer;
}

setupActivityListeners();
