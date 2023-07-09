
const canvas = document.querySelector('#canvas');
const canvasChildren = canvas.childNodes.length;


//Slider
const slider = document.querySelector('#myRange');




//canvas generation
//generating canvas as soon as the page loads
let firstGenSize = slider.value
let neededFirstPixels = firstGenSize**2;


if (canvasChildren > 0) {
    generateCanvas(firstGenSize, neededFirstPixels);
};

//generating canvas after the slider changes value
 function fireCanvasGeneration() {
    let pixelSize = slider.value;
    let neededPixels = pixelSize**2;
    console.log(neededPixels);

    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
      };

      generateCanvas(pixelSize, neededPixels);
};

function generateCanvas(size, neededNumber) {
    canvas.style.gridTemplateColumns =`repeat(${size}, auto)`;
    for (let i = canvasChildren; i <= neededNumber; i++){
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


