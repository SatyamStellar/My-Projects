let rangeNum = document.querySelector(".range");
let options = document.querySelectorAll(".option input");
let copyBtn = document.querySelector(".copy-btn");
let inpPass = document.querySelector(".input-pass");
let genbtn = document.querySelector(".gen-btn");
const characters = {
    uppercases: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercases: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "~!@#$%^&*()_+{}:[];,."
}
genbtn.addEventListener("click", () => {
    let staticPass = "";
    let ranPass = "";
    let passLength = rangeNum.value;
    options.forEach(option => {
        if (option.checked) {
            staticPass += characters[option.id];
        }
    });
    for (let i = 0; i < passLength; i++) {
        ranPass += staticPass[Math.floor(Math.random() * staticPass.length)];
    }
    inpPass.value = ranPass;
});
rangeNum.addEventListener("input", () => {
    document.querySelector(".rang-value").innerHTML = rangeNum.value;
})
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(inpPass.value);
    window.alert("Text copied");
})
var typed = new Typed("#typed", {
    strings: ['Generator', '_+4Ot%b08', '1{M$+2fB8'],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});
