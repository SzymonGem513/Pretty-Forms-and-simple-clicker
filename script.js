document.addEventListener("DOMContentLoaded", () => {

  const changeColorBtn = document.querySelector('.change-color-theme');
  changeColorBtn.addEventListener('click', () =>{
    changeTheme();
  })

  const logInBtn = document.querySelector('.send-form-button');
  logInBtn.addEventListener('click', () =>{
    logIn();
  })

  const colorArray = ['red', 'blueviolet', '#0066ff','Lime','yellow','orange','Fuchsia','#00ccff','white']
  let i = 0;

  const changeTheme = () =>{
      if(i >= colorArray.length) i=0;
      document.documentElement.style.setProperty('--mainColor', colorArray[i]);
      i++;
    }
  const triggerInputs = () => {
    const inputsLeft = document.querySelectorAll('.input-left');
    inputsLeft.forEach(el => {
      el.addEventListener('focusout', () => {
        if (el.value !== '') {
          el.closest('.input-container').classList.add('up');
        } else {
          el.closest('.input-container').classList.remove('up');
        }
      })
    })
  }
  const logIn = async () =>{
    const loginURL = "http://gierka.local/login.php"
    const login = document.getElementById('login-input').value;
    const password = document.getElementById('password-input').value;
    const data = {login, password};
    console.log(data);
   

    const response = await fetch(loginURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(response.json());
  };

  triggerInputs();



  });
