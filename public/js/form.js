const getUserBudget = async (event) => {
    event.preventDefault();

    let userBudget = document.querySelector('#setBudget').value.trim();

    function isValidDec(input) {
        const userInput = parseFloat(input);

        return !isNaN(userInput);
    }

    if(isValidDec(userBudget)) {
        const response = await fetch('/api/total')
    } else{
        alert('Please enter a dollar amount.');
    }
    
}

