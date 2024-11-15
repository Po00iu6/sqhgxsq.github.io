document.getElementById('scrollLink').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止链接的默认行为
    smoothScrollToElement('targetElement');
});


document.getElementById('scrollLink1').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止链接的默认行为
    smoothScrollToElement('targetElement1');
});


document.getElementById('scrollLink2').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止链接的默认行为
    smoothScrollToElement('targetElement2');
});






















function smoothScrollToElement(elementId) {
    var targetElement = document.getElementById(elementId);
    var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop; // 计算目标位置
    var startPosition = window.pageYOffset; // 当前滚动位置
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var distance = (targetPosition - startPosition)-viewportHeight*(0.118); // 需要滚动的距离
    var duration = 1000; // 滚动动画的持续时间（毫秒）
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        // 使用缓动函数（这里使用的是线性缓动，但你可以根据需要替换为其他缓动函数）
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}