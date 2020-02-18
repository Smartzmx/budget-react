import React, {Fragment, useState} from 'react';
import Error from './error'
import PropTypes from 'prop-types'

const Question = ({setBudget, setBalance, setShowQuestion}) => {

    const [budgetQuantity, setBudgetQuantity] = useState('')
    const [error, setError]= useState(false)

    // Funcion de onchange al definir el presupuesto

    const handleChange = (e) => {
        setBudgetQuantity(parseInt(e.target.value))
    }

    // funcion al hacer click en el boton definir presupuesto

    const handleSubmit = (e) =>{
        e.preventDefault()

        //1. Validar la información ingresada
        if (budgetQuantity <1 || isNaN(budgetQuantity)){
            setError(true)
            return
        } else{
            setError(false)
        }

        //2. Guardar la información del presupuesto
        setBudget(budgetQuantity)
        setBalance(budgetQuantity)
        setShowQuestion(false)
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error message='Ingresa un presupuesto valido!!!' /> : null}

            <form
                onSubmit={handleSubmit}
            >
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder='Ingresa tu preseupuesto'
                    onChange={handleChange}
                />

                <input 
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir Presupuesto'
                />
            </form>
        </Fragment>
      );
}

Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setBalance: PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired
}
 
export default Question;