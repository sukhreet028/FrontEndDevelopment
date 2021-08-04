let buttonArray = [
    {
      id: 1,
      name: '1st',
    },
    {
      id: 2,
      name: '2nd',
    },
    {
      id: 3,
      name: 'third',
    },
    {
      id: 4,
      name: '4th',
    },
    {
      id: 5,
      name: '5th',
    },
    {
        id:6,
        name:'6th',
    },
  ];  
  
  function createButton() {
    buttonArray.map((data) => {
      var button = document.createElement('button');
      button.innerHTML = data.name;
      button.id = data.id;
      button.onclick = () => hide(data.id);
      document.getElementById('button-container').appendChild(button);
    })
  }
  function hide(id) {
    buttonArray.map((data,index)=> {
      const buttonList = document.getElementById('button-container');
      const buttonId =  document.getElementById(data.id);
      buttonList.removeChild(buttonId);
    });
    buttonArray =  buttonArray.filter(data => data.id !== id);
    //  console.log(buttonArray);
    createButton();
  }
  
  createButton();
  