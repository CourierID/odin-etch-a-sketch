const canvasDiv = document.querySelector(".canvas");
const resizeButton = document.querySelector("#resizeButton");

console.log(canvasDiv.clientHeight);

function initCanvas(pixelNumber) {
    for (let i = 0; i < pixelNumber; i++) {
        for (let j = 0; j < pixelNumber; j++) {
            const pixel = document.createElement("div");
            pixel.style.width = `${canvasDiv.clientWidth / pixelNumber}px`;
            pixel.style.height = `${canvasDiv.clientHeight / pixelNumber}px`;
            pixel.addEventListener("mouseover", () => {
                pixel.classList.add('red');
            });
            canvasDiv.appendChild(pixel);
        }
    }
}

initCanvas(16);

function resetCanvas() {
    while (canvasDiv.firstChild) {
        canvasDiv.removeChild(canvasDiv.firstChild);
    }
}


resizeButton.addEventListener('click', () => {
    let numPixels = prompt("Enter new amount of pixels! (Less than 100)", "16");
    if (numPixels > 100) {
        numPixels = 100;
    }
    resetCanvas()
    initCanvas(numPixels);
});