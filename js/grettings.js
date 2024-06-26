const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    //이벤트 기본동작을 막는다
    event.preventDefault();

    //유저명을 화면에 표시
    login(loginInput.value);
}

loginButton.addEventListener("click", onLoginSubmit);
loginForm.addEventListener("submit", onLoginSubmit);

function login(username) {
    //로그인폼을 숨김
    loginForm.classList.add(HIDDEN_CLASS);

    //로컬스토리에 이름 저장
    localStorage.setItem(USERNAME_KEY, username);

    //유저명 표시
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

function logoff() {
    //로그인폼을 보임
    loginForm.classList.remove(HIDDEN_CLASS);

    //로컬스토리에 저장된 이름 제거
    localStorage.removeItem(USERNAME_KEY);

    //유저명 숨김
    greeting.classList.add(HIDDEN_CLASS);
}

greeting.addEventListener("click", logoff);

function onScreenEvent() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);

    //값이 없는 경우 NULL 반환
    if (savedUsername === null) {
        logoff();
    } else {
        login(savedUsername);
    }
}
onScreenEvent();