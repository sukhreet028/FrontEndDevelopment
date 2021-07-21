// var num1= prompt("Enter your First Number");
// var num2= prompt("Enter your FSecond Number");

// num1=parseInt(num1);
// num2=parseInt(num2);
// var result=num1+num2;
// document.write("Total is: " + result);

function sum(calType) {
  document.getElementById('num1').values;
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  let result;
  if (calType === 'plus') {
    result = num1 + num2;
  } else {
    result = num1 - num2;
  }
  // const x  = 55;
  //   if (calType === 'plus') {
  //     console.log('inside if ' + x);
  //   }
  //   console.log('outside value of x ' + x);

  document.getElementById('result').innerHTML = 'Total is: ' + result;
}

function arrayAndObjects() {
  let person = ['sukhvir', 'singh', '28', 'blue'];
  const locationArr = ['canada', 'punjab'];
  // for (let i = 0; i < person.length; i++ ) {
  //     console.log(person[i]);
  // }
  //   for (const data of person) {
  //     console.log(data);
  //   }
  // arrayName.map(function())
//   person.map(function (data){
//       console.log(data)
//   } );
    person = person.concat(locationArr);
    person.map((data,index) =>{
    if(data <= 30) {
        person.push('Young');
    }
    //   if(data == 28) {
    //       person[index] = 20;
    //   }

    //  console.log(person[index]) ;
    // console.log(data) ;
  });
  person.map((data,index)=> console.log(data));
}

arrayAndObjects();
