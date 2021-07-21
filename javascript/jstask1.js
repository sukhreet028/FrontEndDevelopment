// let user=['ravneet','singh',30,'punjab'];
let user= [
    {
        id: 'fname',
        value: 'Ravneet' 
    },
    {
        id: 'lname',
        value: 'singh' 
    },
    {
        id: 'age',
        value: '30' 
    },
    {
        id: 'birthplace',
        value: 'Punjab' 
    }
]
// let birthplace ='punjab';
let filtered = user.filter((data)=> data.id == 'age')
user.map((data)=>{

        document.getElementById(data.id).innerHTML= data.value;
        // document.getElementById('lname').innerHTML=` lastname of user is:-${user[1]}`;

        // document.getElementById('age').innerHTML=`age of user is:-${user[2]}`;

        // document.getElementById('birthplace').innerHTML.value='';
});

function search() {
    const value = document.getElementById('textInput').value;
    const searchResult = user.find((data)=> data.id == value);
    document.getElementById('result').innerHTML= searchResult.value;

}

//  console.log(user.filter((data)=> data.id !== 'age'));



// let user={
    // firstname: "sukhi",
    // lastname:"kaur",
    // age:27,
    // country:"punjab",
//    }
// 
//    for ( key in user) {
    //    document.write(`${key} of user is = ${user[key]} <br>`) ;
    // }
//    
// 










// if (user=="ravneet"){
    // document.getElementById('fname').innerHTML=`${user[0]} is the firstname`;
// }
// document.write("hey");
// 
// 
// for(let i=0;i<user.length;i++){
    // document.write(user[0])
    
// }
// if (user.name="ravneet"){
    // document.getElementById("fname").innerHTML=user.name ;
// }