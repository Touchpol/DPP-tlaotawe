let todoListArray = [];

function saveDataToCookie() {
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = "todoData=" + encodeURIComponent(JSON.stringify(todoListArray)) +
        ";expires=" + d.toUTCString() + ";path=/";
}

function getMyCookie(cookieName) {
    const nameToFind = cookieName + "=";
    const parts = document.cookie.split(';');

    for (let i = 0; i < parts.length; i++) {
        const item = parts[i].trim();
        if (item.indexOf(nameToFind) === 0) {
            return decodeURIComponent(item.substring(nameToFind.length));
        }
    }
    return "";
}

$(function () {
    const $ftList = $('#ft_list');

    function addNewTodoToScreen(textValue, needToSave) {
        const $newDiv = $('<div>').text(textValue);

        $newDiv.on('click', function () {
            if (confirm("คุณต้องการลบรายการนี้ใช่ไหม?")) {
                $newDiv.remove();

                const indexNumber = todoListArray.indexOf(textValue);
                if (indexNumber > -1) {
                    todoListArray.splice(indexNumber, 1);
                }

                saveDataToCookie();
            }
        });

        $ftList.prepend($newDiv);

        if (needToSave === true) {
            saveDataToCookie();
        }
    }

    const oldCookie = getMyCookie("todoData");
    if (oldCookie !== "") {
        try {
            todoListArray = JSON.parse(oldCookie);
        } catch (e) {
            todoListArray = [];
        }

        for (let i = todoListArray.length - 1; i >= 0; i--) {
            addNewTodoToScreen(todoListArray[i], false);
        }
    }

    $('#newBtn').on('click', function () {
        const userInput = prompt("พิมพ์รายการ To Do ของคุณ:");

        if (userInput !== null && userInput.trim() !== "") {
            todoListArray.unshift(userInput);
            addNewTodoToScreen(userInput, true);
        }
    });
});
