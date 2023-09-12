
let calculation = localStorage.getItem('calculation') || '';

        displayCalculation();

        function updateCalculation(addNumber) {
            calculation += addNumber;
            displayCalculation();
            localStorage.setItem('calculation', calculation);
        }

        function displayCalculation() {

            document.querySelector('.js-display-calculation').innerText = calculation;

        }