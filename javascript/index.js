var buttons = document.querySelectorAll('.drum');
var crash1 = document.getElementById('crash');
let kick1 = document.getElementById('kick');
let snare1 = document.getElementById('snare');
let tom1A = document.getElementById('tom-1');
let tom2A = document.getElementById('tom-2');
let tom3A = document.getElementById('tom-3');
let tom4A = document.getElementById('tom-4');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    playSound(e.target.innerText);
  });
});

// const playDrum = (btn)=> playSound(btn);

// function playDrum(btn) {
//     playSound(btn);
// }

function playDrum(btn) {
//   if (btn == 'w') {
//     crash1.play();
//   } else if (btn == 'a') {
//     kick1.play();
//   } else if (btn == 's') {
//     snare1.play();
//   } else if (btn == 'd') {
//     tom1A.play();
//   } else if (btn == 'j') {
//     tom2A.play();
//   } else if (btn == 'k') {
//     tom3A.play();
//   } else if (btn == 'l') {
//     tom4A.play();
//   } else {
//     console.log('no music');
//   }
console.log(Math.floor(Math.random() * 6) + 1);
}

document.addEventListener('keyup', (e) => {
  const btnValue = e.key;
  console.log('button value', btnValue);
  const btnArray = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
  if (btnArray.includes(btnValue)) {
    playDrum(btnValue);
  } else {
    console.log(e.key);
    alert('wrong key');
  }
});

function text() {
  setTimeout(function () {
    document.getElementById('set1').classList.add('new');
  }, 2000);
}
