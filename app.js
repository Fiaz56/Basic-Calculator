let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";

for (let btn of buttons) {
    btn.addEventListener("click", (e) => {
        let btnText = e.target.innerText;
        console.log("Button text is ", btnText);
        if (btnText === "X") {
            btnText = "*";
            screenValue += btnText;
            screen.value = screenValue;
        }
        else if (btnText === "C") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (btnText === "=") {
            screen.value = eval(screenValue);
        }
        else{
            screenValue += btnText;
            screen.value = screenValue;
        }
    })
};