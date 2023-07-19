
const canvas = document.querySelector('#canvas');
const canvasChildren = canvas.childNodes.length;
const canvasChildrenDivs = canvas.childNodes;

const pickedCanvasColor = document.querySelector('#pickedCanvasColor');
let selectedCanvasColor = pickedCanvasColor.value;


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
    
    pickedCanvasColor.value = "#ffffff";
    let pixelSize = slider.value;
    let neededPixels = pixelSize**2;

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
    paintingOver();
};




//selecting canvas color


pickedCanvasColor.addEventListener('change', function(){
    selectedCanvasColor = pickedCanvasColor.value;
  
    let square = canvas.querySelectorAll('div.pixels');
    square.forEach((pixel) => {
        pixel.style.backgroundColor = selectedCanvasColor;
})
});


//selecting color
const pickedColor = document.querySelector('#pickedColor');
let selectedColor = pickedColor.value;

pickedColor.addEventListener('change', function(){
    selectedColor = pickedColor.value;
});

//check if mouse has been pressed down
let mouseDown = false;

canvas.addEventListener('mousedown', function() {
    mouseDown = true;
})

canvas.addEventListener('mouseup', function() {
    mouseDown = false;
})

//painting on canvas
function paintingOver() {
let square = canvas.querySelectorAll('div.pixels');
square.forEach((pixel) => {
    pixel.onmouseover = () => {
        if (mouseDown === true) {
        pixel.style.backgroundColor = selectedColor;
    }};

    pixel.onclick = () => {
        pixel.style.backgroundColor = selectedColor;
    }
})};

//reseting canvas
const resetBtn = document.querySelector("#reset-canvas");

function resetCanvas() {
    let square = canvas.querySelectorAll('div.pixels');
    square.forEach((pixel) => {
            pixel.style.backgroundColor = selectedCanvasColor;
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
    canvas.backgroundColor = selectedCanvasColor;
}};

//disable drag and drop
document.body.addEventListener('dragstart', event => {
    event.preventDefault();
  });
  
  document.body.addEventListener('drop', event => {
    event.preventDefault();
  });