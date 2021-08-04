let userData;
function signup(){
const firstName=document.getElementById('firstName').value;
const lastName=document.getElementById('lastName').value;
const dob=document.getElementById('dob').value;
const birthPlace=document.getElementById('birthPlace').value;
const pass=document.getElementById('pass').value;

userData =[
    {
        id:'fname',
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
    id: 'country',
  value: birthPlace,
},
{
    id: 'pass',
  value: pass,
}
];
document.getElementById('sign-up').style.display = 'none';
document.getElementById('log-in').style.display = 'block';
document.getElementById('result').innerHTML = 'Registered Sucessfully ';

setTimeout(()=>(document.getElementById('result').innerHTML=''),3000);
}

function login(){
 const logName=document.getElementById('lgname').value;
 const logPass=document.getElementById('lpass').value;
 const formName= userData.find((data)=>data.id==='fname').value;
 const formPass=userData.find((data)=>data.id==='pass').value;
 if(logName===formName){
     if(logPass===formPass){
         document.getElementById('form').style.display = 'block';
         document.getElementById('log-in').style.display = 'none';
         const filteredData= userData.filter((data)=>data.id!=='pass')
         filteredData.map((data) => {
            document.getElementById(data.id).innerHTML = data.value;
          });
        }
          else{
              document.getElementById('result').innerHTML='Incorrect Password';
            setTimeout(() => (document.getElementById('result').innerHTML=''),3000);
        }
        
    
    }  else{
              document.getElementById('result').innerHTML='Name is not matching';
                  setTimeout(() => (document.getElementById('result').innerHTML=''),3000);
            }
        }
    
