const colors = ["#F76E11","#F1D00A","#ED5EDD","#21325E"];
const btn = document.getElementById("btn");
const display = document.querySelector(".color-display");
const text = document.querySelector(".text-display");

btn.addEventListener("click", changeColor);

function changeColor() {
    // Generato Random 
    let random = Math.floor(Math.random() * colors.length);

    // background property
    display.style.backgroundColor = colors[random];
    // textContent property
    text.textContent = colors[random];
}
