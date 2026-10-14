setInterval(function () {
    alert('Please, use me...');
}, 30000);

function isPositiveInteger(value) {
    return /^\d+$/.test(value);
}

$(function () {
    $('#submitBtn').on('click', function () {
        const leftVal = $('#leftMember').val();
        const rightVal = $('#rightMember').val();
        const operator = $('#operator').val();

        if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
            alert('Error :(');
            console.log('Error :(');
            return;
        }

        const num1 = Number(leftVal);
        const num2 = Number(rightVal);
        let result;

        if ((operator === '/' || operator === '%') && num2 === 0) {
            alert("It’s over 9000!");
            console.log("It’s over 9000!");
            return;
        }

        switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num1 / num2; break;
            case '%': result = num1 % num2; break;
            default: return;
        }

        alert(result);
        console.log(result);
    });
});
