// 16 letter in js = 0-F(A-F=10-16)
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
    }
    console.log("หน้าตา color สุดท้าย: ", color);
    return color;
}

// ใช้ jQuery เลือก element ด้วย $('#btn')
const $button = $('#btn');

// ใช้ .on('click', ...) ตามสไตล์ jQuery
$button.on('click', function() {
    $('body').css('background-color', getRandomColor());
});

function buttonClick() {
    // กำหนดค่า size (สมมติว่ามีตัวแปร size อยู่ข้างนอกแล้ว)
    $button.css({
        'width': size + 'px',
        'height': size + 'px'
    });

    // หมายเหตุ: ในโค้ดเดิมของคุณมีชื่อตัวซ้ำกันและพิมพ์คำว่า addEventListener ผิด 
    // ตัวนี้ปรับแก้โครงสร้างให้ใช้ jQuery ($) ร่วมด้วยครับ
    $button.on('click', function() {
        let size = 10; // หรือดึงค่าตามต้องการ
        size += 50;
    });
}