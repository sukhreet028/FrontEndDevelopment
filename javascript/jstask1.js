let user=['ravneet','singh',30,'punjab',];
// let birthplace ='punjab';
user.map((data)=>{
    if(data=='ravneet'){
        document.getElementById('fname').innerHTML=` firstname of user is :-${user[0]}`;
    }
    else if(data=='singh'){
        document.getElementById('lname').innerHTML=` lastname of user is:-${user[1]}`;
    }
    else if(data==30){
        document.getElementById('age').innerHTML=`age of user is:-${user[2]}`;
    }
    else if(data=='punjab'){
        document.getElementById('birthplace').innerHTML.value='';
     
    }
});



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