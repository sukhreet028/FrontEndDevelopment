let myButtons = [
  {
    id: 1,
    name: 'First',
  },
  {
    id: 6,
    name: 'Sixth',
  },
  {
    id: 4,
    name: 'Forth',
  },
  {
    id: 2,
    name: 'Second',
  },
  {
    id: 5,
    name: 'Fifth',
  },
  {
    id: 3,
    name: 'Third',
  },
];

const carPrice = [
  {
    price: 1,
    time: 5,
  },
  {
    price: 6,
    time: 7,
  },
  {
    price: 4,
    time: 9,
  },
  {
    price: 2,
    time: 10,
  },
  {
    price: 5,
    time: 11,
  },
  {
    price: 3,
    time: 12,
  },
];

// carPrice.map(data => console.log(data.price));

// for( let i = 0; i < carPrice.length; i++ ) {
//   console.log(carPrice[i].price);
// }

document.getElementById('text').addEventListener('keyup', (event) => {
  var name = event.key;
  var code = event.code;
  // Alert the key name and key code on keydown
  alert(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);

// for( let data of carPrice) {
//     console.log(data.price);
//   }

function timeSort(type) {
  if (type === 'acc') {
    carPrice.sort((a, b) => {
      if (a.time > b.time) {
        return 1;
      } else if (a.time < b.time) {
        return -1;
      }
    });
  } else if (type === 'des') {
    carPrice.sort((a, b) => {
      if (a.time > b.time) {
        return -1;
      } else if (a.time < b.time) {
        return 1;
      }
    });
  }
  return console.log(carPrice);
}
// priceSort('des');
function priceSort(type) {
  if (type === 'acc') {
    carPrice.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      } else if (a.price < b.price) {
        return -1;
      }
    });
  } else if (type === 'des') {
    carPrice.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      } else if (a.price < b.price) {
        return 1;
      }
    });
  }
  return console.log(carPrice);
}

const testArray = [1, 6, 3, 5, 7, 6];
testArray.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a.id < b.id) {
    return 1;
  }
});

// switchFun('time','des');
// function switchFun(num, type) {
//   switch (num) {
//     case 'price':
//       priceSort(type);
//       break;
//     case 'time':
//       timeSort(type);
//       break;
//     default:
//       console.log('num de' + num);
//       break;
//   }
// }

// testArray.reverse();
// console.log(testArray);
myButtons.sort((a, b) => {
  // if (
  //   (a.raiseHand == undefined || a.raiseHand == null) &&
  //   (b.raiseHand != undefined || b.raiseHand != null)
  // ) {
  //   return 1;
  // } else if (
  //   (a.raiseHand != undefined || a.raiseHand != null) &&
  //   (b.raiseHand == undefined || b.raiseHand == null)
  // ) {
  //   return -1;
  // } else if (a.raiseHand > b.raiseHand) {
  //   return 1;
  // } else if (b.raiseHand > a.raiseHand) {
  //   return -1;
  // } else {
  //   return 0;
  // }
  if (a.id > b.id) {
    return -1;
  } else if (a.id < b.id) {
    return 1;
  }
});

// console.log(myButtons);

// function createButton(){
//   myButtons.map((data) => {
//     var button=document.createElement('button');
//     button.innerHTML= data.name;
//     button.id=data.id;
//     button.onclick=()=>change(data.id)
//     document.getElementById('button-box').appendChild(button);
// })
// }

// async function change(ourId) {
//   console.log("clickd button id "+ ourId);
//   myButtons.map((data,index)=> {
//     const buttonList = document.getElementById('button-box');
//     const buttonId =  document.getElementById(data.id);
//     buttonList.removeChild(buttonId);
//   });
//   const index = myButtons.findIndex(data => data.id === ourId);
//   const clickedButtonData = myButtons.find(data => data.id === ourId);
//   console.log(clickedButtonData);
//   myButtons.splice(index, 1,);
//   myButtons.splice(1,0, clickedButtonData);
//   createButton();
// }

// createButton();
