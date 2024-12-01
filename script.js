// Green display input area element targetted!
let displayInput = document.getElementById("inputArea");

// Represents the message of characters entered in the calculator! 
let calculatorMessage = ""; 

// Get all calculators buttons into an array 
let calculatorButtons = Array.from(document.querySelectorAll(".calculator-buttons"));


/* 
    When the = button is pressed, it calls this function to 
    calculate a result. 

    If result is an error because of invalid syntax, it 
    displays an error message directly on the calculator's 
    green display input area. 

    If calculating a result is successful, it displays 
    the result directly on the calcualtor's green display 
    input area. 
*/  
function performCalculation(){
    try{
       calculatorMessage = eval(calculatorMessage);
       displayInput.value = calculatorMessage;
    } catch(error){
        calculatorMessage = "";
        displayInput.value = "Invalid syntax. Press AC to clear.";
    }
}


/* 
    Each calculator button does a specific calculator 
    operation when clicked.

    If the button is for typing in a number, appends the 
    number to the calculator message shown in the green 
    display input area! 
    
    If the button is for a calculator operation, 
    it does the specified calcualtor operation. 
*/
calculatorButtons.forEach((calculatorButton) => {
    calculatorButton.addEventListener('click', (e) => {
        
        // Calculate a result when the = button is pressed
        if(e.target.innerHTML == '='){
            performCalculation();
        }
        
        // Clears everything when AC button is pressed
        else if(e.target.innerHTML == 'AC'){
            calculatorMessage = ""; 
            displayInput.value = calculatorMessage; 
        }

        // Removes last entered character when DEL button is pressed
        else if(e.target.innerHTML == 'DEL'){
            calculatorMessage = calculatorMessage.substring(0, calculatorMessage.length - 1);
            displayInput.value = calculatorMessage; 
        }

        else {
            calculatorMessage += e.target.innerHTML;
            displayInput.value = calculatorMessage; 
        }
    });
});
