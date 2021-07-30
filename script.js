document.addEventListener("DOMContentLoaded", () => {

  const magicDivSample = `
  <div class="dropped-coin-sample drop" unselectable="on">
                <div class="magic-square simple">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="content"></div>
                </div>
            </div> 
    `

  const mainButton = document.querySelector('.clicker-button');

  mainButton.addEventListener('click', () =>{
    randomSquareRespawn(collectGridAndCreateRandomSquare(),magicDivSample);
  })

  const changeColorBtn = document.querySelector('.change-color-theme');
  changeColorBtn.addEventListener('click', () =>{
    changeTheme();
  })

  const logInBtn = document.querySelector('.send-form-button');
  logInBtn.addEventListener('click', () =>{
  //  logIn();
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

  const drawGrid = () =>{
    const mainButton = document.querySelector('.clicker-button');
    
    for(let j=0; j<=269; j++){
      const newDiv = document.createElement('div');
      newDiv.classList.add('one-piece-square');
      mainButton.appendChild(newDiv);
    }
  }

  const collectGridAndCreateRandomSquare = () =>{

    const divNode = document.querySelectorAll('.one-piece-square');
    let divArray = Array.from(divNode);
    return divArray
   }
   
  
  const randomSquareRespawn = (divsArray, magicDivSample) =>{
    let rand = Math.floor(Math.random() * divsArray.length);
    divsArray[rand].insertAdjacentHTML('afterbegin',magicDivSample);
    
  }
 
  // const logIn = async () =>{
  //   const loginURL = "http://gierka.local/login.php"
  //   const login = document.getElementById('login-input').value;
  //   const password = document.getElementById('password-input').value;
  //   const data = {login, password};
  //   console.log(data);
   

  //   const response = await fetch(loginURL, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   });
  //   console.log(response.json());
  // };

  triggerInputs();
  drawGrid();




  });
