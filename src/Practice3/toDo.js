console.log("Practice 3: To Do List");

const saveBtn = document.getElementById("btnSave");
const inputToDo = document.getElementById("name");

if (saveBtn) {
    saveBtn.addEventListener("click", () => {

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const myTodo = {
            id: getRandomInt(1, 1000000000000),
            name: inputToDo.value
        }

        const currentTodoStr = localStorage.getItem("todo");

        if (currentTodoStr) {
            const currentTodo = JSON.parse(currentTodoStr);

            currentTodo.push(myTodo);
            localStorage.setItem("todo", JSON.stringify(currentTodo));

        }
        else {
            localStorage.setItem("todo", JSON.stringify([myTodo]));
        }


        // success
        window.location.href = "toDo.html";

    })
}

