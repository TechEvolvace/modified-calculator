let input = document.getElementById("inputArea");
let calculatorButtons = Array.from(document.querySelectorAll(".calculator-buttons"));
let calculatorMessage = ""; 

calculatorButtons.forEach((calculatorButton) => {
    calculatorButton.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            calculatorMessage = eval(calculatorMessage);
            input.value = calculatorMessage;
        }
        
        else if(e.target.innerHTML == 'AC'){
            calculatorMessage = ""; 
            input.value = calculatorMessage; 
        }

        else if(e.target.innerHTML == 'DEL'){
            calculatorMessage = calculatorMessage.substring(0, calculatorMessage.length - 1);
            input.value = calculatorMessage; 
        }

        else {
            calculatorMessage += e.target.innerHTML;
            input.value = calculatorMessage; 
        }
    });
});
