
//arrow function with no argument
// let greet = () => console.log("hello everyone");
// greet();


//arrow function with one argument
// let half=a=>a/2;

//arrow function with two argument
// let sum=(a,b)=>a+b;
// let mul=(a,b)=>a*b;


// let obj1={
    // names:["sukhi","ravneet","gundeep","gurjeet"],
// msg(){
    // this.names.forEach((family)=>{
        // console.log("hello "+family);
    // });
    // }
//   }
//   obj1.msg();
//

let user={
    greeting:"hey ",
  information:["name", "address","salary","ager","status"],
  display(){
      this.information.forEach((worker)=>{
          console.log(this.greeting + "what is your "+ worker +"?");
      });
  }
}
user.display();  



  
  