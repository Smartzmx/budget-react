import React, { Fragment, useState } from 'react';
import Error from './error'
import shortid from 'shortid' 
/*se instalo el siguiente paquete para poder generar ids npm install shortid */
import PropTypes from 'prop-types'


const Form = ({setExpense, setAddExpense}) => {

    const [expenseName, setExpenseName] = useState('')
    const [expenseAmount, setExpenseAmount] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()

        // Validando la informacion capturada
        if (expenseAmount < 1 || isNaN(expenseAmount) || expenseName.trim() === ''){
            setError(true)
            return
        } else {
            setError(false)
        }
        // llamar al componente gasto

        const expense = {
            expenseName,
            expenseAmount,
            id:shortid.generate()
        }
        
        // pintar el gasto en la lista de gastos del componenete principal app

        setExpense(expense)
        setAddExpense(true)

        // limpiar el form
        setExpenseName('')
        setExpenseAmount('')
    }

    return ( 
        <Fragment>

            <form
                onSubmit={handleSubmit}
            >
                <h2>Agrega tus gastos aqui...</h2>

                {error ? <Error message='Error en la infromación capturada.' /> : null}

               <div className='gasto'>
                   <label>Nombre Gasto</label>
                   <input 
                    type='text'
                    className='u-full-width'
                    placeholder='Ej. Comida'
                    onChange={(e) => setExpenseName(e.target.value)}
                    value={expenseName}
                    />
               </div>

               <div className='gasto'>
                   <label>Importe Gasto</label>
                   <input 
                    type='number'
                    className='u-full-width'
                    placeholder='Ingresa el importe del gasto'
                    onChange={(e) => setExpenseAmount(parseInt(e.target.value))}
                    value={expenseAmount}
                    />
               </div>

               <input 
                type='submit'
                className='button-primary u-full-width'
                value='Agregar Gasto'
               />
            </form>

        </Fragment>
     );
}

Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setAddExpense: PropTypes.func.isRequired
}

export default Form;