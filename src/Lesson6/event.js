console.log("Lesson 6: Event");

const myButton = document.getElementById("myButton");

console.log(myButton);

function clickMe() {
    console.log("ban da click toi");
}

const Btn = document.getElementById("Btn");
const click = () => {
    console.log("Ban da nhan roi!!!");
}
Btn.addEventListener("click", click);

const plot = document.getElementById("plot");
const change = document.getElementById("change");
const undo = document.getElementById("undo");

change.addEventListener("click", () => {
    console.log("you change plot");
    plot.innerText = "Thay doi title";
}
);

undo.addEventListener("click", () => {
    console.log("Undo change");
    plot.innerText = "Noi dung Change";
});

