const btn = document.getElementById("get-color");
const cont = document.querySelector(".container")
const result = document.getElementById("color-display");


const colorPicker = async () => {
    const eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    result.innerHTML = sRGBHex;
    cont.style.background = sRGBHex;
}

btn.addEventListener("click", colorPicker);