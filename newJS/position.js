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


  function change(id) {
    myButtons.map((data,index)=> {
      const buttonList = document.getElementById('button-box');
      const buttonId =  document.getElementById(data.id);
      buttonList.removeChild(buttonId);
    });
    myButtons =  myButtons.splice(1, 1).data.id == '2';
    document.getElementById('button-box').style.position='fixed';

    
    createButton();
  }
  
  
  createButton();


  