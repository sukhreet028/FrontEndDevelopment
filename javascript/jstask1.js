// let user=['ravneet','singh',30,'punjab'];
// let user= [
//     {
//         id: 'fname',
//         value: 'Ravneet'
//     },
//     {
//         id: 'lname',
//         value: 'singh'
//     },
//     {
//         id: 'age',
//         value: '30'
//     },
//     {
//         id: 'birthplace',
//         value: 'Punjab'
//     }
// ]

let formData;
// let birthplace ='punjab';
// let filtered = user.filter((data)=> data.id == 'age')
// user.map((data)=>{

//         document.getElementById(data.id).innerHTML= data.value;
//         // document.getElementById('lname').innerHTML=` lastname of user is:-${user[1]}`;

//         // document.getElementById('age').innerHTML=`age of user is:-${user[2]}`;

//         // document.getElementById('birthplace').innerHTML.value='';
// });

function search() {
  const value = document.getElementById('textInput').value;
  const searchResult = user.find((data) => data.id == value);
  document.getElementById('result').innerHTML = searchResult.value;
}

function signup() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const pass = document.getElementById('pass').value;
  const dob = document.getElementById('dob').value;
  const location = document.getElementById('location').value;

  formData = [
    {
      id: 'fname',
      value: firstName,
    },
    {
      id: 'lname',
      value: lastName,
    },
    {
      id: 'age',
      value: dob,
    },
    {
      id: 'birthplace',
      value: location,
    },
    {
      id: 'pass',
      value: pass,
    },
  ];

  document.getElementById('sigin-upform').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('result').innerHTML = 'Sucessfully Registered';

  setTimeout(() => (document.getElementById('result').innerHTML = ''), 3000);
}

function login() {
  const loginName = document.getElementById('LfirstName').value;
  const loginPass = document.getElementById('Lpass').value;
  const actualName = formData.find((data) => data.id === 'fname').value;
  const actualPass = formData.find((data) => data.id === 'pass').value;
  if (loginName === actualName) {
    if (loginPass === actualPass) {
      document.getElementById('form-text').style.display = 'block';
      document.getElementById('login-form').style.display = 'none';
      const filteredData = formData.filter((data) => data.id !== 'pass');
      filteredData.map((data) => {
        document.getElementById(data.id).innerHTML = data.value;
      });
    } else {
        document.getElementById('result').innerHTML = 'Password is worng';
    
        setTimeout(() => (document.getElementById('result').innerHTML = ''), 3000);
      }
  } else {
    document.getElementById('result').innerHTML = 'Name is not matching';

    setTimeout(() => (document.getElementById('result').innerHTML = ''), 3000);
  }
}
// const index = user.findIndex(data => data.id === 'age');
// user.splice(index,0,{value:514444});
// user.map((data)=> console.log(data.value));

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
