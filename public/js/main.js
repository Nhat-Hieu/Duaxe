document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('.start-button');
    const resetButton = document.querySelector('.reset-button');
    const circles = document.querySelectorAll('.circle');
    const carImages = document.querySelectorAll('.anhxe');
    const finishLine = document.querySelector('.vachdich');

    let gameStarted = false; // Biến để kiểm tra trạng thái bắt đầu của trò chơi

    startButton.addEventListener('click', function () {
        if (!gameStarted) {
            resetGame();

            // Bắt đầu trò chơi
            gameStarted = true;

            // Thêm lớp màu xanh cho hình tròn thứ 1
            addCircleClass(circles[0], 'red');

            // Đặt timeout để thêm lớp màu vàng cho hình tròn thứ 2 sau 3 giây
            setTimeout(function () {
                addCircleClass(circles[1], 'yellow');
            }, 1000);

            // Đặt timeout để thêm lớp màu đỏ cho hình tròn thứ 3 sau 6 giây
            setTimeout(function () {
                addCircleClass(circles[2], 'green');

                // Khi đèn xanh, cho các xe chạy với tốc độ ngẫu nhiên
                moveCarRandomSpeed(carImages[0], finishLine.offsetLeft);
                moveCarRandomSpeed(carImages[1], finishLine.offsetLeft);
            }, 2000);
        }
    });

    resetButton.addEventListener('click', function () {
        resetGame();
    });

    // Hàm thêm lớp cho hình tròn
    function addCircleClass(circle, className) {
        circle.classList.add(className);
    }

    // Hàm loại bỏ lớp cho hình tròn
    function removeCircleClass(circle, className) {
        circle.classList.remove(className);
    }

    // Hàm thực hiện chuyển động cho hình ảnh xe về đích với tốc độ ngẫu nhiên
    function moveCarRandomSpeed(car, finishLinePosition) {
        const animationDuration = 4 + Math.random() * 6; // Tạo một thời gian ngẫu nhiên trong khoảng 4 đến 10 giây

        car.style.animation = `moveCarAnimation ${animationDuration}s linear infinite`;
        car.style.animationPlayState = 'running';

        const keyframes = `@keyframes moveCarAnimation {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(${finishLinePosition - car.offsetLeft}px);
            }
        }`;

        // Tạo một <style> element và thêm keyframes vào đó
        const styleElement = document.createElement('style');
        styleElement.innerHTML = keyframes;
        document.head.appendChild(styleElement);
    }

    // Hàm đặt lại trạng thái trò chơi
    function resetGame() {
        gameStarted = false;
        carImages.forEach(car => car.style.animation = 'none');
    }
});
