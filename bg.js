const body = document.querySelector("body");

const IMG_NUM = 5;

function handleImgLoad() {
    console.log("finished loading");
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    image.addEventListener("loadend", handleImgLoad);

}

function getRandom() {
    const num = Math.floor(Math.random() * IMG_NUM);

    return num;
}

function init() {
    const randomNum = getRandom();
    paintImage(randomNum);
}

init();