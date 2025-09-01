console.log("css using");

const plot = document.getElementById("plot");
const change = document.getElementById("change");
const undo = document.getElementById("undo");

change.addEventListener("click", () => {
    console.log("you change plot");
    plot.innerText = "Thay doi title";
    plot.style.color = "yellow";
    plot.style.backgroundColor = "darkred";
    plot.classList.add("dunn", "tap", "code");
}
);

undo.addEventListener("click", () => {
    console.log("Undo change");
    plot.innerText = "Noi dung Change";
    plot.style.color = "black";
    plot.style.backgroundColor = "white";
    plot.classList.remove("dunn", "tap", "code");

});

