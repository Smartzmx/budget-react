import React, { Fragment } from 'react';
import Expense from './expense'
import PropTypes from 'prop-types'

const ExpenseList = ({expenses}) => {
    return ( 
        <Fragment>
            <div className='gastos-realizados'>
                <h2>Listado</h2>
                {expenses.map(expense => (
                    <Expense 
                        key={expense.id}
                        expense={expense}
                    />
                ))}
            </div>
        </Fragment>
     );
}
 
ExpenseList.propTypes = {
    expenses:PropTypes.array.isRequired
}

export default ExpenseList;