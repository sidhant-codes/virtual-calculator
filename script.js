let display = document.getElementById("display");
let buttons = document.querySelectorAll(".buttons button");
let inputValue = "";

// Default theme
document.body.classList.add("basic");

// Theme switch function
function setTheme(theme) {
  document.body.className = theme; 
}

buttons.forEach(button => {
  button.addEventListener("click", e => {
    let btnValue = e.target.innerText;

    if (btnValue === "=") {
      try {
        inputValue = eval(inputValue);
        display.value = inputValue;
      } catch {
        display.value = "Error";
        inputValue = "";
      }
    } 
    else if (btnValue === "A/C") {
      inputValue = "";
      display.value = "";
    } 
    else if (btnValue === "DEL") {
      inputValue = inputValue.slice(0, -1);
      display.value = inputValue;
    } 
    else {
      inputValue += btnValue;
      display.value = inputValue;
    }
  });
});
