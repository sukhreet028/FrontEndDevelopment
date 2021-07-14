// var num1= prompt("Enter your First Number");
// var num2= prompt("Enter your FSecond Number");

// num1=parseInt(num1);
// num2=parseInt(num2);
// var result=num1+num2;
// document.write("Total is: " + result);

function sum(calType) {
  console.log(calType);
  document.getElementById('num1').values;
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  let result;
  if (calType === 'plus') {
    result = num1 + num2;
  } else {
    result = num1 - num2;
  }

  document.getElementById('result').innerHTML = 'Total is: ' + result;
}
