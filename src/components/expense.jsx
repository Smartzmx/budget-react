import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

const Expense = ({expense}) => {
    return ( 
        <Fragment>
            <li className='gastos'>
                <p>
                    {expense.expenseName}
                    <span className='gasto'> $ {expense.expenseAmount}</span>
                </p>
            </li>
        </Fragment>
     );
}

Expense.propTypes = {
    expense: PropTypes.object.isRequired
}
 
export default Expense;