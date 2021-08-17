const playGame = () => {
  const num1 = Math.floor(Math.random() * 6) + 1;
  const num2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById('img1').setAttribute('src', `./images/dice${num1}.png`);
  document.getElementById('img2').setAttribute('src', `./images/dice${num2}.png`);

  if (num1 > num2) {
    document.getElementById('result').innerHTML = 'Playes one is winner!!';
  } else if (num2 > num1) {
    document.getElementById('result').innerHTML = 'Playes two is winner!!';
  } else {
    document.getElementById('result').innerHTML = 'Draw , play again ';
  }
};

playGame();

// second option
// let imageName = [
//     './images/dice1.png',
//     './images/dice2.png',
//     './images/dice3.png',
//     './images/dice4.png',
//     './images/dice5.png',
//     './images/dice6.png',
//   ];
//   document.getElementById('img1').setAttribute('src', imageName[num1 - 1]);
//   document.getElementById('img2').setAttribute('src', imageName[num2 - 1]);

// if else option
//    if(num1==1){
//        setImage1Src('./images/dice1.png');
//    } else if( num1 == 2) {
//     setImage1Src('./images/dice2.png');
//    }

//    if(num2==1){
//     setImage2Src('./images/dice1.png');
// } else if( num2 == 2) {
//  setImage2Src('./images/dice2.png');
// }

// function setImage1Src(path) {
//     document.getElementById('img1').setAttribute('src', path);
// }

// function setImage2Src(path) {
//     document.getElementById('img2').setAttribute('src', path);
// }
