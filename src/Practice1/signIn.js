console.log("Pratice 1");

const rightUserName = "nguyentrungdungbxvp@gmail.com";
const rightPassWord = "trungdung06";

const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if (userName.value === rightUserName && passWord.value === rightPassWord) {
        window.location.href = "success.html";
    }
    else
        alert("Sai tai khoan hoac mat khau");
});