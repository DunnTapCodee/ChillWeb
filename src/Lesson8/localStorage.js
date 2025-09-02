console.log("Lesson 8: Local Storage");

const submit = document.getElementById("submit");
const input = document.getElementById("name");


const prevElement = document.getElementById("prev");
const prevName = localStorage.getItem("dunn");
if (prevName) {
    prevElement.innerHTML =  `<b> ${prevName}</b>`
}

submit.addEventListener("click", () => {
    // console.log(name.value);
    localStorage.setItem("dunn", input.value);
    document.getElementById("message").innerHTML =
        `<b> ${input.value}</b>`
})
