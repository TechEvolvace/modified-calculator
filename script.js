let input = document.getElementById("inputArea");
let calculatorMessage = ""; 

// Get all calculators buttons into an array 
let calculatorButtons = Array.from(document.querySelectorAll(".calculator-buttons"));


/* 

*/  
function performCalculation(){
    try{
       calculatorMessage = eval(calculatorMessage);
       input.value = calculatorMessage;
    } catch(error){
        calculatorMessage = "";
        input.value = "Invalid syntax. Press AC to clear.";
    }
}


/* 
    Each calculator button does a specific calculator operation.
    If the button is for typing in a number, appends the number to the 
    calculator message displayed. If the button is for a calculator 
    operation, it does the specified calcualtor operation. 
*/
calculatorButtons.forEach((calculatorButton) => {
    calculatorButton.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            performCalculation();
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
