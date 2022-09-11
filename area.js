const inputs = document.querySelectorAll(".length-input");
const btnChk = document.querySelector("#chk-btn");
const outputEl = document.querySelector("#output");

btnChk.addEventListener("click", calculateArea);

function calculateArea(a, b) {
    const base = inputs[0].value;
    const height = inputs[1].value;
    if (base == "") {
        outputEl.innerText = "Enter base."
    } else
    if (height == "") {
        outputEl.innerText = "Enter height."
    } else {
    const area = 0.5 * a * b;
    outputEl.innerText = "The area of the triangle is " + area + " sq. cm.";
    };
};