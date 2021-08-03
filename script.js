document.addEventListener("DOMContentLoaded", () => {

  const magicDivSample = `
  <div class="dropped-coin-sample drop">
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
    rainbowStop(rainbowInterval);
    changeTheme();
   
  })
  
  const logInBtn = document.querySelector('.send-form-button');
  logInBtn.addEventListener('click', () =>{
  //  logIn();
  })


  
  let animationFlag = 0;
  let r=255,g=0,b=0;
  let rainbowInterval = 0;
  const animateColorBtn = document.querySelector('.animation-color-theme');
  animateColorBtn.addEventListener('click', () =>
  {

    if(animationFlag === 1){
      rainbowStop();
           
    }else if(animationFlag === 0){
      rainbowInterval = setInterval(rainbowEngine,8);
      animationFlag = 1;
    }
  })

  const rainbowEngine = () =>{
      if(r > 0 && b == 0){
        r--;
        g++;
      }
      if(g > 0 && r == 0){
        g--;
        b++;
      }
      if(b > 0 && g == 0){
        r++;
        b--;
      }
      document.documentElement.style.setProperty('--mainColor', "rgb("+r+","+g+","+b+")");
  }

  const rainbowStop = () =>{
    clearInterval(rainbowInterval);
    r=255;
    g=0;
    b=0;
    animationFlag = 0;   
  }


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
    return  Array.from(divNode)
   }
   
  
  const randomSquareRespawn = (divsArray, magicDivSample) =>{
    let rand = Math.floor(Math.random() * divsArray.length);
    divsArray[rand].insertAdjacentHTML('afterbegin',magicDivSample);

    setTimeout(function(){
      divsArray[rand].querySelector('.dropped-coin-sample').remove();
    }, 2000);
    
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
