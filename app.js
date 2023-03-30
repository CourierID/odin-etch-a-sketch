const canvasDiv = document.querySelector(".canvas");

console.log(canvasDiv.clientHeight);

let pixelNumber = 16;


for (let i = 0; i < pixelNumber; i++) {
    for (let j = 0; j < pixelNumber; j++) {
        const pixel = document.createElement("div");
        pixel.style.width = `${canvasDiv.clientWidth / pixelNumber}px`;
        pixel.style.height = `${canvasDiv.clientHeight / pixelNumber}px`;
        canvasDiv.appendChild(pixel);
    }
}