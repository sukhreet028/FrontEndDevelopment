    let formData;
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
          value: 'Punjab' 
      },
      {
          id:'pass',
          value:pass,
      }
  ]

  document.getElementById('sign-upform').style.display = 'none';
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
    