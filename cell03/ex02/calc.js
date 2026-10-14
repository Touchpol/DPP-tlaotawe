setInterval(function() {
    alert('Please, use me...');
}, 30000);
// 30000มิลลิsec

const leftInput = document.getElementById('leftMember');
const rightInput = document.getElementById('rightMember');
const operatorSelect = document.getElementById('operator');
const submitBtn = document.getElementById('submitBtn');

function isPositiveInteger(value) {
    return /^\d+$/.test(value);
}
// ^ = จุดเริ่มต้นของข้อความ
// \d+ = ต้องเป็นตัวเลข (0-9) อย่างน้อย 1 ตัว
// $ = จุดสิ้นสุดของข้อความ
// รวมกัน ^\d+$ หมายความว่า ข้อความนี้จะต้องเป็นตัวเลขล้วนๆห้ามมีตัวหนังสือหรือช่องว่างเด็ดขาด"

submitBtn.addEventListener('click', function() {
    const leftVal = leftInput.value;
    const rightVal = rightInput.value;
    const operator = operatorSelect.value;

    if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
        alert('Error :(');
        console.log('Error :(');
        return;
    }
    // เครื่องหมายตกใจ ! ใน JavaScript = "ไม่" เมื่อเอาไปวางไว้ข้างหน้าฟังก์ชันหรือตัวแปร เช่น !isPositiveInteger(...) จะกลับค่าความจริงจากหน้ามือเป็นหลังมือ:ถ้าข้างในได้ค่า true (เป็นเลขจำนวนเต็มบวก) 
    // $\rightarrow$ ใส่ ! เข้าไป จะกลายเป็น falseถ้าข้างในได้ค่า false (ไม่ใช่เลขจำนวนเต็มบวก เช่น ติดลบ หรือตัวหนังสือ) $\rightarrow$ ใส่ ! เข้าไป จะกลายเป็น true

    const num1 = Number(leftVal);
    const num2 = Number(rightVal);
    let result;

    if ((operator === '/' || operator === '%') && num2 === 0) {
        alert("It’s over 9000!");
        console.log("It’s over 9000!");
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            return;
    }

    alert(result);
    console.log(result);
});