function styleFunction() {
    let firstName = 'Dave', lastName = 'Smith';
    let text = "<p>hello</p>"
    var divText = `<h1>${firstName}&nbsp;${lastName}</h1>${text}
    <p>text2</p>
    <div style="background-color: red; height: 100px; width: 100px;"></div>
    `;

  document.getElementById(1).style.color = 'red';
  document.getElementById(1).style.fontSize = '35px';
  document.getElementById(2).innerHTML = divText;
//   document.getElementById(2).innerHTML = "";
//   let x, y, z, num1, num2, num3, num4, sum; // Statement 1
//   x = 5; // Statement 2
//   y = 6;
//   num1 = 1;
//   num2 = 3;
//   num3 = 7;
//   num4 = 10;
//    // Statement 3
//   z = x + y;
//   sum = z + num1 + num2 + num3 + num4;
//   console.log(" sum ", 5+6);
//   console.log(" sum2 ", sum);
//    z = 0;
//    sum = z + num1 + num2 + num3 + num4;
//    console.log("sum3 ", sum);
}


// let first = parseInt(document.getElementById("first").value);
// let second = parseInt(document.getElementById("second").value);
// let result = first + second;
// document.getElementById(2).innerHTML = result;
