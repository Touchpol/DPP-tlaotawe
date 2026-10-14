const balloon = document.getElementById('balloon');
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

let colorIndex = 0;
let size = 200;

function updateBalloon() {
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
    balloon.style.backgroundColor = colors[colorIndex];
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        size += 10;
    } else if (event.key === 'ArrowDown') {
        size -= 10;
    }

    updateBalloon();
});

balloon.addEventListener('click', function () {
    size += 50;

    if (size > 420) {
        size = 200;
        colorIndex = 0;
    } else {
        colorIndex = (colorIndex + 1) % colors.length;
    }

    updateBalloon();
});

