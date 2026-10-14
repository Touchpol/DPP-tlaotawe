const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

let colorIndex = 0;
let size = 200;

$(function () {
    const $balloon = $('#balloon');

    function updateBalloon() {
        $balloon.css({
            width: size + 'px',
            height: size + 'px',
            backgroundColor: colors[colorIndex]
        });
    }

    $(document).on('keydown', function (event) {
        if (event.key === 'ArrowUp') {
            size += 10;
        } else if (event.key === 'ArrowDown') {
            size -= 10;
        }

        updateBalloon();
    });

    $balloon.on('click', function () {
        size += 50;

        if (size > 420) {
            size = 200;
            colorIndex = 0;
        } else {
            colorIndex = (colorIndex + 1) % colors.length;
        }

        updateBalloon();
    });
});
