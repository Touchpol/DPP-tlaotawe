//16 letter in js = 0-F(A-F=10-16)
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
// สุ่มหยิบตัวอักษร 6 รอบเพื่อสร้างรหัสสีครบ 6 หลัก



    for (let i = 0; i < 6; i++) {
        const a = Math.random();
        const b = a * 16;
        const c = Math.floor(b);
        const d = letters[c];
        color += d;

        console.log("round: ", i); // แสดงรอบที่กำลังทำงาน
        console.log("using math.random :", a); // แสดงค่าที่สุ่มได้จาก math.random
        console.log("random number x 16 :", b); // แสดงค่าที่คูณด้วย 16
        console.log("floor number :", c); // แสดงค่าที่ปัดเศษลง
        console.log("XXXXXXXX:", d); // แสดงตัวอักษรที่สุ่มได้จาก letters
        console.log("หน้าตา color ปัจจุบัน: ", color);
        // color += letters[Math.floor(Math.random() * 16)];
    }
    console.log("หน้าตา color สุดท้าย: ", color);
    return color;
}

const button = document.getElementById('btn');

button.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

function buttonClick() {
    button.style.width = `${size}px`;
    button.style.height = `${size}px`;

    const button = document.getElementById('btn');
    button.addEnventListener('click', function() {
        size = 10;
        size += 50;
    })
};