const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODO_KEY = "todo";
let todos = [];

function handleTodoSubmit(event) {
    event.preventDefault();

    //const newTodo = todoInput.value;
    //오브젝트로 처리
    const newObjTodo = {
        id: Date.now(),
        text: todoInput.value,
    }

    //li 추가
    printTodos(newObjTodo);

    //로컬스토리지에 저장
    saveTodos(newObjTodo);

    //입력창 클리어
    todoInput.value = "";
}

function printTodos(newObjTodo) {
    //새로운 li 에 id 부여
    const li = document.createElement("li");
    li.setAttribute("id", newObjTodo.id);

    //새로운 span
    const span = document.createElement("span");
    //span 안에 text 추가
    span.innerText = newObjTodo.text;

    //새로운 삭제 버튼
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);

    //<li><span></span></li>
    li.appendChild(span);
    //<li><button></button></li>
    li.appendChild(button);
    //<ul><li></li></ul>
    todoList.appendChild(li);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();

    //삭제한 항목의 배열 위치를 찾음
    const idx = todos.findIndex(todo => parseInt(todo.id) === parseInt(li.id));
    //찾았을때
    if ( idx !== -1) {
        //해당 위치 항목 삭제
        todos.splice(idx, 1);

        //배열을 문자열로 변환하여 로컬스토리지에 저장
        localStorage.setItem(TODO_KEY, JSON.stringify(todos));
    } else {
        //그럴리는 없겠지만
        todos = todos.filter(todo => parseInt(todo.id) !== parseInt(li.id));
    }
}

function saveTodos(newObjTodo) {
    if (newObjTodo !== null) {
        //배열에 추가
        todos.push(newObjTodo);
        //배열을 문자열로 변환하여 로컬스토리지에 저장
        localStorage.setItem(TODO_KEY, JSON.stringify(todos));
    }
}

todoForm.addEventListener("submit", handleTodoSubmit);

//로컬스토리지에 있는 todo 목록 출력
function loadTodos() {
    const savedTodos = localStorage.getItem(TODO_KEY);

    if (savedTodos !== null) {
        //문자열을 배열로 변환
        todos = JSON.parse(savedTodos);

        if (todos.length > 0) {
            //배열 갯수만큼 함수 호출 (TODO 리스트 출력)
            todos.forEach(printTodos);
        }
    }
}
loadTodos();