window.addEventListener('load', () => {

    //MAIN
    const buttonClicker = document.querySelector(".clicker-button");
    const generatedNumber = document.querySelector(".generated-number");
    const resetClicker = document.querySelector(".reset-button");
    let increment = 1;
    let bigNumber = 0;

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
        generatedNumber.innerHTML = bigNumber;
    })

    resetClicker.addEventListener("click", () => {
        bigNumber = 0;
        generatedNumber.innerHTML = bigNumber;

    })


    const upgradeButton = document.querySelector(".upgrade-button")

    upgradeButton.addEventListener("click", () => {
        if(bigNumber >= 20){
            increment++;
            bigNumber -= 20;
            generatedNumber.innerHTML = bigNumber;
        }

    })

});