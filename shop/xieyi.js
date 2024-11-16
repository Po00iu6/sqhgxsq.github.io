// script.js
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("agreementModal");
    const mainContent = document.getElementById("mainContent");
    const disagreeButton = document.getElementById("disagreeButton");
    const agreeButton = document.getElementById("agreeButton");
    const closeSpan = document.querySelector(".close");


    // 假设你的协议容器有一个ID为"agreementContainer"
    const agreementContainer = document.getElementById("agreementModal");
    
    // 在显示模态框后，滚动到底部
    agreementContainer.scrollTop = agreementContainer.scrollHeight;

    // 显示主要内容并隐藏弹出框
    function showMainContent() {
        modal.style.display = "none";
        mainContent.style.display = "block";
    }

    // 跳转到 404 页面
    function redirectTo404() {
        window.location.href = "../NOT_FOUND.html"; // 假设有一个 404.html 页面
    }

    // 为按钮和关闭按钮添加事件监听器
    disagreeButton.addEventListener("click", redirectTo404);
    agreeButton.addEventListener("click", showMainContent);
    closeSpan.addEventListener("click", function() {
        redirectTo404(); // 也可以选择隐藏弹出框而不跳转
    });

    // 为了更好的用户体验，点击弹出框外部也可以关闭（这里我们设置为不同意并退出）
    window.onclick = function(event) {
        if (event.target == modal) {
            redirectTo404();
        }
    };

    // 初始时显示弹出框，隐藏主要内容
    mainContent.style.display = "none";
});


