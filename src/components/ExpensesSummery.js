import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import expensesTotal from '../selectors/expensesTotal'
import expenseSelector from '../selectors/expencesSelector'

const ExpensesSummery = ({expensesCount, expensesAmount})=>{
    const word = expensesCount === 1 ? 'expense' : 'expenses'
    const formatedAmount = numeral(expensesAmount / 100).format('$0,0.00')
    return(
        <div>
            <h1>Viweing {expensesCount} {word} with total amount of {formatedAmount}</h1>
        </div>
    )
}

const mapStateToProps=(state) =>{
    
    const visibleExpenses = expenseSelector(state.expences, state.filters)
   
    
    return {
        expensesCount : visibleExpenses.length,
        expensesAmount : expensesTotal(visibleExpenses)

    }
}

export default connect(mapStateToProps)(ExpensesSummery);