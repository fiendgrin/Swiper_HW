let images = [
    { source: "IMG1.jpg" },
    { source: "IMG2.jpg" },
    { source: "IMG3.png" }
];

const myImages = document.querySelector(".myImages");
let n = 0;
myImages.setAttribute("src", `./Images/${images[n].source}`);

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

next.addEventListener("click", () => {
    myImages.style.animationName = "slideChange";
    if (n >= images.length - 1) {
        n = 0;
    } else {
        n++;
    }
    myImages.setAttribute("src", `./Images/${images[n].source}`);

})

previous.addEventListener("click", () => {
    if (n == 0) {
        n = images.length - 1;
    } else {
        n--;
    }
    myImages.setAttribute("src", `./Images/${images[n].source}`);

})