const newButton = document.getElementById("newBtn");
const ftList = document.getElementById("ft_list");

let todoListArray = [];

const oldCookie = getMyCookie("todoData");
if (oldCookie !== null && oldCookie !== "") {
    todoListArray = JSON.parse(oldCookie);
    
    for (let i = 0; i < todoListArray.length; i++) {
        addNewTodoToScreen(todoListArray[i], false);
    }
}

newButton.addEventListener("click", function() {
    const userInput = prompt("พิมพ์รายการ To Do ของคุณ:");
    
    if (userInput !== null && userInput.trim() !== "") {
        todoListArray.unshift(userInput);
        addNewTodoToScreen(userInput, true);
    }
});

function addNewTodoToScreen(textValue, needToSave) {
    const newDiv = document.createElement("div");
    newDiv.textContent = textValue;

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

    if (ftList.firstChild) {
        ftList.insertBefore(newDiv, ftList.firstChild);
    } else {
        ftList.appendChild(newDiv);
    }

    if (needToSave === true) {
        saveDataToCookie();
    }
}

function saveDataToCookie() {
    const textData = JSON.stringify(todoListArray);
    
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    const expiresTime = "expires=" + d.toUTCString();
    
    document.cookie = "todoData=" + textData + ";" + expiresTime + ";path=/";
}

function getMyCookie(cookieName) {
    const nameToFind = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for (let i = 0; i < cookieArray.length; i++) {
        let item = cookieArray[i];
        while (item.charAt(0) === ' ') {
            item = item.substring(1);
        }
        if (item.indexOf(nameToFind) === 0) {
            return item.substring(nameToFind.length, item.length);
        }
    }
    return "";
}