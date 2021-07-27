document.addEventListener("DOMContentLoaded", () => {

  const changeColorBtn = document.querySelector('.change-color-theme');
  changeColorBtn.addEventListener('click', () =>{
    changeTheme();
  })

  const colorArray = ['red', 'blueviolet', 'blue','green','yellow']
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

  triggerInputs();

 


  });
