document.addEventListener("DOMContentLoaded", () => {

    //MAIN
    const buttonClicker = document.querySelector(".clicker-button");
    const generatedNumber = document.querySelector(".generated-number");
    const resetClicker = document.querySelector(".reset-button");
    
    let increment = 1;
    let bigNumber = 0;
    

    if (localStorage.getItem("bigNumber") === null) {
        localStorage.setItem("bigNumber", bigNumber)
    }else{
        bigNumber = parseFloat(localStorage.getItem("bigNumber"));
        generatedNumber.innerHTML = parseFloat(bigNumber);
    }
   


    const animatedClick = () => {
        buttonClicker.classList.add("clicker-button-shadow");
        setTimeout(() => {
            cancelAnimatedClick()
        }, 100);
    }
    const cancelAnimatedClick = () => {
        buttonClicker.classList.remove("clicker-button-shadow")
    }

    
    buttonClicker.addEventListener('click', () => {
        animatedClick();
        bigNumber += increment;
        localStorage.setItem("bigNumber", bigNumber);
        generatedNumber.innerHTML = bigNumber;
    })

    
    resetClicker.addEventListener("click", () => {
        bigNumber = 0;
        generatedNumber.innerHTML = bigNumber;
        localStorage.setItem("bigNumber", bigNumber)
    })

/*
    const upgradeButton = document.querySelector(".upgrade-button")

    upgradeButton.addEventListener("click", () => {
        if(bigNumber >= 20){
            increment++;
            bigNumber -= 20;
            generatedNumber.innerHTML = bigNumber;
        }

    })
    */

});