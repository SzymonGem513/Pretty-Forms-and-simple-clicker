document.addEventListener("DOMContentLoaded", () => {


    const getWet = async () =>{
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kornice&units=metric&lang=pl&appid=c8a644dfbde36c0d45dcec24667fefdf',{
        method: "GET",
      })
      const responseJSON = await response.json();
      console.log(responseJSON);

    }

   // getWet();

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
