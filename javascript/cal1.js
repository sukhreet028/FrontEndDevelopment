let inputScreen= document.getElementById('inputScreen');
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
// buttons=document.querySelectorAll('button');
// const operatorButtons=document.querySelectorAll('.operator');
let inputScreenValue="";
// let firstNum=e.target.Value;
var result = document.getElementById('result');

operators.forEach(op => {
    op.addEventListener("click", e => {
        operator = e.target.innerText;
        console.log('this operator is', operator)
    });
    numbers.forEach(num=> {
        num.addEventListener("click", e => {
            number = e.target.innerText;
            console.log('text of button is', number)
            if(numbers=='number')
            {
                inputScreen.Value=numbers;
                let firstNum=inputScreen.Value;

                // inputScreen.Value= inputScreenValue;
            }
            else if(operators==='operator')
            {
                if (operator=='C')
                inputScreen.Value="";
                inputScreen.Value= inputScreenValue;
            }else{
                inputScreen.value= result;
            }
            
        });
    });
});

    // if (buttonText=="+"){
        // inputScreen.value= buttonText;
    // }
    // else if(buttonText=='C')
    // {
        // inputScreen.value= "";
    // }
    // else (buttonText=='=')
    // inputScreen.value="";
// });
