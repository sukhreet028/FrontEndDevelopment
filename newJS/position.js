let myButtons = [
    {
      id: 1,
      name: 'First',
    },
    {
      id: 2,
      name: 'Second',
    },
    {
      id: 3,
      name: 'Third',
    },
    {
      id: 4,
      name: 'Forth',
    },
    {
      id: 5,
      name: 'Fifth',
    },
    {
        id:6,
        name:'Sixth',
    },
  ];  


  function createButton(){
    myButtons.map((data) => {
      var button=document.createElement('button');
      button.innerHTML= data.name;
      button.id=data.id;
      button.onclick=()=>change(data.id)
      document.getElementById('button-box').appendChild(button);
  })
  }


  async function change(ourId) {
    console.log("clickd button id "+ ourId);
    myButtons.map((data,index)=> {
      const buttonList = document.getElementById('button-box');
      const buttonId =  document.getElementById(data.id);
      buttonList.removeChild(buttonId);
    });
    const index = myButtons.findIndex(data => data.id === ourId);
    const clickedButtonData = myButtons.find(data => data.id === ourId);
    console.log(clickedButtonData);
    myButtons.splice(index, 1,);
    myButtons.splice(1,0, clickedButtonData);
    createButton();
  }
  
  
  createButton();


  