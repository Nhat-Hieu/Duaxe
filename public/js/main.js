document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('.start-button');
    const resetButton = document.querySelector('.reset-button');
    const circles = document.querySelectorAll('.circle');
    const carImages = document.querySelectorAll('.anhxe');

    startButton.addEventListener('click', function () {
        // Xử lý sự kiện khi nút "Bắt đầu" được nhấn

        // Thêm lớp màu xanh cho hình tròn thứ 1
        addCircleClass(circles[0], 'red');

        // Đặt timeout để thêm lớp màu vàng cho hình tròn thứ 2 sau 3 giây
        setTimeout(function () {
            addCircleClass(circles[1], 'yellow');
        }, 3000);

        // Đặt timeout để thêm lớp màu đỏ cho hình tròn thứ 3 sau 6 giây
        setTimeout(function () {
            addCircleClass(circles[2], 'green');
        }, 6000);

        // Thực hiện chuyển động cho hình ảnh xe đầu tiên
        moveCar(carImages[0]);
    });

    resetButton.addEventListener('click', function () {
        // Xử lý sự kiện khi nút "Bắt đầu lại" được nhấn

        // Loại bỏ lớp màu cho tất cả các hình tròn
        circles.forEach(function (circle) {
            circle.classList.remove('red', 'yellow', 'green');
        });

        // Đặt lại trạng thái trò chơi
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

    // Hàm thực hiện chuyển động cho hình ảnh xe
    function moveCar(car) {
        // Thực hiện chuyển động cho hình ảnh xe
    }

    // Hàm đặt lại trạng thái trò chơi
    function resetGame() {
        // Đặt lại trạng thái trò chơi
    }
});
