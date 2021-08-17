let inputScreen = document.getElementById('inputScreen');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
let firstValue;
let secondValue;
let number = [];
let operator;
let caltype;
let inputScreenValue = '';
let result;

operators.forEach((op) => {
  op.addEventListener('click', (e) => {
    operator = e.target.innerText;
    calculate();
  });
});

function calculate() {
  if (operator === 'C') {
    number = [];
    inputScreen.value = '';
  } else if (
    operator === '/' ||
    operator === '-' ||
    operator === '+' ||
    operator === '*'
  ) {
    number = [];
    if (firstValue && caltype === '+') {
      storePreviousResult('plus');
    } else if (caltype === '-' && firstValue) {
        storePreviousResult('min');
    } else {
      firstValue = parseInt(inputScreen.value);
    }
    inputScreen.value = '';
    caltype = operator;
  } else if (operator === '=' && caltype === '+' && firstValue) {
    showFinalResult('plus');
  } else if (operator === '=' && caltype === '-' && firstValue) {
    showFinalResult('min');
  } else {
    console.log('nothing ');
  }
}

function storePreviousResult(prevOp) {
    switch (prevOp) {
      case 'plus':
        firstValue = firstValue + parseInt(inputScreen.value);
        break;
      case 'min':
        firstValue = firstValue - parseInt(inputScreen.value);
        break;
      default:
        console.log('no prevbOp found');
        break;
    }
  }

function showFinalResult(finalOp) {
  secondValue = parseInt(inputScreen.value);
  inputScreen.value = '';
  switch (finalOp) {
    case 'plus':
      result = firstValue + secondValue;
      break;
    case 'min':
      result = firstValue - secondValue;
      break;
    default:
      console.log('no opFinal found');
      break;
  }
  inputScreen.value = result;
  firstValue = null;
}

numbers.forEach((num) => {
  num.addEventListener('click', (e) => {
    showValueOnScreen(e.target.innerText);
  });
});

function showValueOnScreen(value) {
    number.push(value);
    const numberedValues = number.join('');
    console.log('text of button is', numberedValues);
    inputScreen.value = numberedValues;
}

document.addEventListener('keyup',(e) => {
    const value = e.key;
    const numberArray = ['0','1','2','3','4','5','6','7','8','9'];
    const opratorArray = ['/','+','-','=','Enter'];
    if(numberArray.includes(value)) {
        showValueOnScreen(value);
    } else if(opratorArray.includes(value)) {
        if(value === 'Enter') {
            operator = '=';
        } else {
            operator = value;
        }
        
        calculate();
    } else {
        console.log(e.key)
        alert('Wrong Input !!!');
    }
})
