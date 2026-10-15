document.addEventListener("DOMContentLoaded", function() {
    const newButton = document.getElementById("newBtn");
    const ftList = document.getElementById("ft_list");

    let todoListArray = [];

    // โหลดข้อมูลเก่าจาก Cookie ตอนเปิดเว็บ
    const oldCookie = getMyCookie("todoData");
    if (oldCookie !== null && oldCookie !== "") {
        try {
            todoListArray = JSON.parse(oldCookie);
        } catch (e) {
            todoListArray = [];
        }
        
        for (let i = todoListArray.length - 1; i >= 0; i--) {
            addNewTodoToScreen(todoListArray[i], false);
        }
    }

    // เมื่อคลิกปุ่ม New
    newButton.addEventListener("click", function() {
        const userInput = prompt("พิมพ์รายการ To Do ของคุณ:");
        
        if (userInput !== null && userInput.trim() !== "") {
            todoListArray.unshift(userInput);
            addNewTodoToScreen(userInput, true);
        }
    });

    // ฟังก์ชันสร้างหน้าตา To Do และระบบลบ
    function addNewTodoToScreen(textValue, needToSave) {
        const newDiv = document.createElement("div");
        newDiv.textContent = textValue;

        // ระบบคลิกเพื่อลบ
        newDiv.addEventListener("click", function() {
            const isSure = confirm("คุณต้องการลบรายการนี้ใช่ไหม?");
            
            if (isSure === true) {
                ftList.removeChild(newDiv);
                
                const indexNumber = todoListArray.indexOf(textValue);
                if (indexNumber > -1) {
                    todoListArray.splice(indexNumber, 1);
                }
                
                saveDataToCookie();
            }
        });

        // นำไปไว้ด้านบนสุด
        if (ftList.firstChild) {
            ftList.insertBefore(newDiv, ftList.firstChild);
        } else {
            ftList.appendChild(newDiv);
        }

        if (needToSave === true) {
            saveDataToCookie();
        }
    }

    // ฟังก์ชันบันทึกข้อมูลลง Cookie
    function saveDataToCookie() {
        const textData = JSON.stringify(todoListArray);
        
        const d = new Date();
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 วัน
        const expiresTime = "expires=" + d.toUTCString();
        
        document.cookie = "todoData=" + encodeURIComponent(textData) + ";" + expiresTime + ";path=/";
    }

    // ฟังก์ชันดึงข้อมูลจาก Cookie
    function getMyCookie(cookieName) {
        const nameToFind = cookieName + "=";
        const cookieArray = document.cookie.split(';');
        
        for (let i = 0; i < cookieArray.length; i++) {
            let item = cookieArray[i];
            while (item.charAt(0) === ' ') {
                item = item.substring(1);
            }
            if (item.indexOf(nameToFind) === 0) {
                return decodeURIComponent(item.substring(nameToFind.length));
            }
        }
        return "";
    }
});