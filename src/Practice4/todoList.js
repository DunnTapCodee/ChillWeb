console.log("Practice 4");

const saveBtn = document.getElementById("btnSave");
const inputToDo = document.getElementById("name");
const tbody = document.querySelector("#todoList tbody");

// Hàm random id
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Hàm render todo list
const generateTodoTable = () => {
    const todoListStr = localStorage.getItem("todo");
    tbody.innerHTML = ""; // clear cũ trước khi render

    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);
        console.log(todoList);

        if (todoList && todoList.length) {
            todoList.forEach((todo) => {
                tbody.innerHTML += `
          <tr>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td>
              <button data-id="${todo.id}" class="btnDelete">Xóa</button>
            </td>
          </tr>
        `;
            });

            // Sau khi render xong, gắn sự kiện xoá cho từng nút
            document.querySelectorAll(".btnDelete").forEach((btn) => {
                btn.addEventListener("click", () => {
                    const id = btn.getAttribute("data-id");
                    handledDeleteTodo(id);
                });
            });
        }
    }
};

// Hàm thêm todo
if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const myTodo = {
            id: getRandomInt(100000000000, 1000000000000),
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
        generateTodoTable();
    })
}

// Hàm xoá todo
const handledDeleteTodo = (id) => {
    const todoListStr = localStorage.getItem("todo");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);
        const newTodo = todoList.filter((todo) => todo.id + "" !== id);
        localStorage.setItem("todo", JSON.stringify(newTodo));
        generateTodoTable(); // render lại danh sách mới
    }
};

// render lần đầu
generateTodoTable();
