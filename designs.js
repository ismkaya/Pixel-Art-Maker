// Select color input
var color = document.getElementById("colorPicker");

// Select size input
var table = document.getElementById("pixelCanvas");
var size = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var row = "";
var column = "";


// When size is submitted by the user, call makeGrid()
size.addEventListener("submit", function (event) {
    event.preventDefault();
    makeGrid(height, width);
});
//When user clicked "reset"
size.addEventListener("reset", function (event) {
    event.preventDefault();
    inputHeight.value = 1;
    inputWidth.value = 1;
    colorPicker.value = 0;
    makeGrid(0, 0);
});


// When grid is clicked by user to change color
table.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target && event.target.nodeName == "TD") {
        event.target.style.backgroundColor = color.value;
    }   
});


// This function generates a grid with given height/weight values
function makeGrid(height, width) { 
    table.innerHTML = "";
    for (let i = 0; i < height.value; i++) {
        row = document.createElement("tr");
        for (let x = 0; x < width.value; x++) {
            column = document.createElement("td");
            row.appendChild(column);
        }
        table.appendChild(row);
    }
};