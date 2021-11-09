let getDisplay = document.querySelector('.display');
    
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
     
let resetC = document.querySelector('#reset');
let delButton = document.querySelector('#delete');
let decimal = document.querySelector('#decimal');
let equal = document.querySelector('#equal');

//variables
let currentNumber = '';
let storedNumber = '';
let operator; 
let result;


//looping through numbers and storing into current number variable outside function
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', () => {
    let numberElement = numbers[i].innerText;
     currentNumber += numberElement;
     getDisplay.value = currentNumber;
    //console.log(currentNumber)
  });
}

//looping through operators. Allows one operator at the time.
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', () => {
    let operationElement = operators[i].innerText;
    operator = operationElement;
    if (getDisplay.value === '' || getDisplay.value == result || getDisplay.value.includes('+') || getDisplay.value.includes('-') || getDisplay.value.includes('*') || getDisplay.value.includes('/')) {
      return;
    } 
    getDisplay.value += operationElement;
    storedNumber = currentNumber;
    currentNumber = '';
    //console.log(storedNumber)
    //console.log(operationElement)
  })
  }
 
//equal calculations
equal.addEventListener('click', () => {
  getDisplay.value += equal.innerText;
  const number1 = parseFloat(storedNumber);
  const number2 = parseFloat(currentNumber);
  if (operator === '+') {
    result = number1 + number2; 
} else if (operator === '-') {
    result = number1 - number2;
} else if (operator === '/') {
    result = number1 / number2; 
} else if (operator === '*') {
    result = number1 * number2;
}
  return getDisplay.value = result;
})

//C button resets  to empty getDisplay
resetC.addEventListener('click', () => {
  getDisplay.value = '';
  storedNumber = '';
  currentNumber = '';
  operator;
  result;
})

//delete, clears last input from the getDisplay
delButton.addEventListener('click', () => {
  getDisplay.value = getDisplay.value.substr(0, getDisplay.value.length -1); 
  currentNumber = getDisplay.value;
})

//add decimal
decimal.addEventListener('click', () => {
  if (storedNumber === '.' || currentNumber.includes('.') || currentNumber === '' || getDisplay.value === result) {
    return ;
  }
  getDisplay.value += decimal.innerText
  currentNumber += '.';
}
)



