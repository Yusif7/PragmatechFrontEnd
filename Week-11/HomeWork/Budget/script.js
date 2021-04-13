const budget = () => {
    let calculate = document.querySelector('.calculate');
    let addExpense = document.querySelector('.addExpense');
    let expense = document.querySelector('.expense');
    let expense_value = document.querySelector('.expenses-value');
    calculate.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('.budget-value').innerText = document.querySelector('.budget').value;
    })
    getExpenseValue(addExpense)
    getResultValue(calculate, addExpense)
}


const getExpenseValue = (button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let expenseTitle = document.createElement('span');
        let expenseValue = document.createElement('span');
        expenseTitle.classList.add('subject');
        expenseValue.classList.add('subject');
        expenseTitle.innerText = '- ' + document.querySelector('.expenseTitle').value;
        expenseValue.innerText = '-' + document.querySelector('.expense').value;
        document.querySelector('.budget-block').appendChild(expenseTitle);
        document.querySelector('.expense-block').appendChild(expenseValue);
        document.querySelector('.expenses-value').innerText = document.querySelector('.expense').value;
    })
}

const getResultValue = (elem, elem1) => {
    let budget = 0;
    let expense = 0;
    elem.onclick = function() {
        let budgetValue = document.querySelector('.budget').value;
        budget = Number(budgetValue)
        elem1.onclick = function() {
            let expenseValue = document.querySelector('.expense').value;
            expense = Number(expenseValue)
            let a = budget - expense;
            document.querySelector('.result-value').innerText = a
            if (budget > expense) {
                document.querySelector('.result-value').style.color = '#317B22';
            } else {
                document.querySelector('.result-value').style.color = '#B80C09';
            }
        }
    }
}




budget()