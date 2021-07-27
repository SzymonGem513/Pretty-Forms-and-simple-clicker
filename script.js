document.addEventListener("DOMContentLoaded", () => {

    // document.addEventListener('click',()=>{
    //   document.documentElement.style.setProperty('--mainColor', '#ff0000');
    //   document.documentElement.style.setProperty('--darkerBg', '#fff');
    // })

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
