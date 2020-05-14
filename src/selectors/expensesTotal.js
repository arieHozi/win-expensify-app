import React from 'react'


const expensesTotal = (expenses)=>{
    
    if (expenses.length===0){
        return 0;
    }else {
    
    const amount = expenses.map((expense) => expense.amount)
            .reduce((sum, value) => sum + value, 0);

    return amount;
    }
}

export default expensesTotal