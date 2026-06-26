
const seedColorInput = document.getElementById("color")
const modeInput = document.getElementById("color-mode")
const GetSchemeBtn = document.getElementById("get-scheme-btn")
const colorsSection = document.getElementById("colors-section")
let seedColor = seedColorInput.value.slice(1)
let mode = modeInput.value

document.addEventListener("click", (e) => {
    const wrapper = e.target.closest(".color-wrapper");
    
    if (wrapper){
        const hexValue = wrapper.querySelector(".color-value").textContent;
        navigator.clipboard.writeText(hexValue);
        const colorText = wrapper.querySelector(".color-value");
        colorText.textContent = "Copied!";
        setTimeout(() => {
            colorText.textContent = hexValue;
        }, 1000);
    }
});

function fetchScheme(seedColor, mode){
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            colorsSection.innerHTML = `
            <div class="color-wrapper">
                <div class="color-container" style="background-color: ${data.colors[0].hex.value};"></div>
                <div class="color-value">${data.colors[0].hex.value}</div>
            </div>
            <div class="color-wrapper">
                <div class="color-container" style="background-color: ${data.colors[1].hex.value};"></div>
                <div class="color-value">${data.colors[1].hex.value}</div>
            </div>
            <div class="color-wrapper">
                <div class="color-container" style="background-color: ${data.colors[2].hex.value};"></div>
                <div class="color-value">${data.colors[2].hex.value}</div>
            </div>
            <div class="color-wrapper">
                <div class="color-container" style="background-color: ${data.colors[3].hex.value};"></div>
                <div class="color-value">${data.colors[3].hex.value}</div>
            </div>
            <div class="color-wrapper">
                <div class="color-container" style="background-color: ${data.colors[4].hex.value};"></div>
                <div class="color-value">${data.colors[4].hex.value}</div>
            </div>
            `
        })
}
fetchScheme(seedColor, mode)

GetSchemeBtn.addEventListener("click", (e)=>{
    seedColor = seedColorInput.value.slice(1)
    mode = modeInput.value
    fetchScheme(seedColor, mode)
})



