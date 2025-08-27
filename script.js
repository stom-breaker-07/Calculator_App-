const display = document.getElementById("Display");
const buttons = document.querySelectorAll("button");

      let firstValue = "";
      let secondValue = "";
      let operator = "";

      buttons.forEach(button => {
          button.addEventListener("click", () => {
              const buttonId = button.id;
              if (!isNaN(buttonId)) {
                  display.innerText += buttonId;
              } else if (buttonId === "clear") {
                  display.innerText = "";
                  firstValue = "";
                  secondValue = "";
                  operator = "";
              } else {
                  if (firstValue === "") {
                      firstValue = display.innerText;
                  } else {
                      secondValue = display.innerText;
                  }
                  operator = buttonId;
                  display.innerText = operator;
                  setTimeout(() => {
                      display.innerText = "";
                  }, 500);
              }
          });
      });
      
      function Calculate() {
            secondValue = display.innerText;
            let result;
            switch (operator) {
                case "+":
                    result = parseInt(firstValue) + parseInt(secondValue);
                    break;
                case "-":
                    result = parseInt(firstValue) - parseInt(secondValue);
                    break;
                case "X":
                    result = parseInt(firstValue) * parseInt(secondValue);
                    break;
                case "÷":
                    result = parseInt(firstValue) / parseInt(secondValue);
                    break;
                default:
                    return;
            }
            display.innerText = result;
            firstValue = "";
            secondValue = "";
            operator = "";
        }
