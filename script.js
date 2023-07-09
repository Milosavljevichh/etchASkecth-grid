
const canvas = document.querySelector('#canvas');
const canvasChildren = canvas.childNodes.length;

let pixelSize = 25;

let neededPixels = pixelSize**2;
console.log(neededPixels);


//canvas generatiom
if (canvasChildren > 0) {

    canvas.style.gridTemplateColumns =`repeat(${pixelSize}, auto)`;
    for (let i = canvasChildren; i <= neededPixels; i++){
        const pixel = document.createElement("div");
        pixel.classList.add('pixels');
        canvas.appendChild(pixel);
    };
};

//painting on canvas
let square = canvas.querySelectorAll('div.pixels');
square.forEach((pixel) => {
    pixel.onmouseover = () => {
        pixel.style.backgroundColor = 'black';
    };
})

//reseting canvas
const resetBtn = document.querySelector("#reset-canvas");

function resetCanvas() {
    square.forEach((pixel) => {
            pixel.style.backgroundColor = "white";
    })
}

//Buttons
//Enable and disable grid
const toggle = document.querySelector('#toggleGrid');

function toggleGrid() {
if (toggle.checked === true) {
    canvas.style.gap = '1px'
} else if (toggle.checked === false) {
    canvas.style.gap = '0px'
}};