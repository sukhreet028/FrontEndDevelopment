
// var tbuttons = document.querySelectorAll('.drum');  
// console.log('button is', tbuttons);
// var crash1= document.getElementById('crash');
// 
// function playSong() { 
    // crash1.play()  
//   }
//   


// const playBtn=document.getElementById('w');
// console.log('play btn',playBtn);
// let crash1= document.getElementById('crash');
// console.log('id is',crash1);
// window.addEventListener('click',sound)
// function sound()
// {
    // crash1.play();
// }
// 
// 
// const playBtn2=document.getElementById('a');
// console.log('play btn',playBtn2);
// let kick1= document.getElementById('kick');
// console.log('id is',kick1);
// window.addEventListener('click',sound1)
// function sound1()
// {
    // kick1.play();
// }
// 
// const playBtn3=document.getElementById('s');
// let snare1= document.getElementById('snare');
// window.addEventListener('click',sound2)
// function sound2()
// {
    // snare1.play();
// }
// 
// const playBtn4=document.getElementById('d');
// let tom1A= document.getElementById('tom-1');
// window.addEventListener('click',sound3)
// function sound3()
// {
    // tom1A.play();
// }
// 
// const playBtn5=document.getElementById('j');
// let tom2A= document.getElementById('tom-2');
// window.addEventListener('click',sound4)
// function sound4()
// {
    // tom2A.play();
// }
// 
// const playBtn6=document.getElementById('k');
// let tom3A= document.getElementById('tom-3');
// window.addEventListener('click',sound5)
// function sound5()
// {
    // tom3A.play();
// }
// 
// const playBtn7=document.getElementById('l');
// let tom4A= document.getElementById('tom-4');
// window.addEventListener('click',sound6)
// function sound6()
// {
    // tom4A.play();
// }
// 



// hello test
var buttons = document.querySelectorAll('.drum');  
var crash1= document.getElementById('crash');
let kick1= document.getElementById('kick');
let snare1= document.getElementById('snare');
let tom1A= document.getElementById('tom-1');
let tom2A= document.getElementById('tom-2');
let tom3A= document.getElementById('tom-3');
let tom4A= document.getElementById('tom-4');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      button = e.target.innerText;
      console.log('value of btn is ',button);
     playSound();
    });
  });

  function playSound(btn){
        if(button=='w'){
            crash1.play();
          }else if (button=='a'){
            kick1.play();
          }else if (button=='s'){
              snare1.play();
          }else if (button=='d'){
              tom1A.play();
          }else if (button=='j'){
              tom2A.play();
          }else if (button=='k'){
              tom3A.play();
          }else if (button=='l'){
              tom4A.play();
          }else{
              console.log('no music')
          }}
    
    
    document.addEventListener('keyup',(e)=>{
     const btnValue=e.key;
     console.log('button value',btnValue);
     const btnArray=['w','a','s','d','j','k','l'];
     if(btnArray.includes(btnValue)){
         playSound();
     }else{
        console.log(e.key);
         alert("wrong key")
     }});



     function text() {
        setTimeout(function()
        { 
            document.getElementById('set1').classList.add('new');
        }, 2000);
      }
      
      

   
   
   
  





    //  buttons with for loop
    // for(let i=0;i<buttons.length;i++) {
        // let button=button[i];
        // button.addEventListener('click',(e)=>{
            // let buttonValue=e.target.innerText;
            // console.log('value of button is',buttonValue);
            // playSound(buttonValue);
        // })