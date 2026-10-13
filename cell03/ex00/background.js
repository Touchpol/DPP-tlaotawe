//16 letter in js = 0-F(A-F=10-16)
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
// สุ่มหยิบตัวอักษร 6 รอบเพื่อสร้างรหัสสีครบ 6 หลัก
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.getElementById('btn');

button.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});