import React, { Fragment } from 'react';
import {budgetAlert} from '../helpers'
import PropTypes from 'prop-types'

const BudgetController = ({budget, balance}) => {
    return ( 
        <Fragment>
            <div className='alert-primary alert'>
                Presupuesto: $ {budget}
            </div>
            <div className={budgetAlert(budget, balance)}>
                Saldo: $ {balance}
            </div>
        </Fragment>
     );
}
 
BudgetController.propTypes = {
    budget: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}

export default BudgetController;