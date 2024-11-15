
// 获取视频和画布元素
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// 每帧更新画布内容
video.addEventListener('play', function () {
    const drawFrame = () => {
        if (!video.paused && !video.ended) {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            requestAnimationFrame(drawFrame);
        }
    };
    drawFrame();
});