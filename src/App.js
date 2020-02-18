import React, {Fragment, useState, useEffect} from 'react';
import Question from './components/question'
import Form from './components/form'
import ExpenseList from './components/expenseList';
import BudgetController from './components/budgetController';

function App() {

  // Definiendo mis estados
  const [budget, setBudget] = useState(0)
  const [balance, setBalance] = useState(0)
  const [showQuestion, setShowQuestion] = useState(true)
  const [expenses, setExpenses] = useState([])
  const [expense, setExpense] = useState({})
  const [addExpense, setAddExpense] = useState(false)

  // UseEffect para actualizar el balance o saldo
  useEffect(() => {
   if (addExpense){

    // guarda gasto registrado
    setExpenses([
      ...expenses, expense
    ])

    // calcula importe de balance o saldo
    const updateBalance = balance - expense.expenseAmount
    setBalance(updateBalance)

    if (updateBalance < 0){
      alert('Excediste el presupuesto')
    }

    // Oculta componenete de agregar gasto
    setAddExpense(false)
   } 
  },[expense, addExpense, expenses, balance])

  return (
    <Fragment>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>

          <div className='contenido-principal contenido'>

          {showQuestion ? 
            ( 
              <Question 
                setBudget={setBudget}
                setBalance={setBalance}
                setShowQuestion={setShowQuestion}
              />
            ) 
            : 
            (
              <div className='row'>
                <div className='one-half column'>
                  <Form 
                    setExpense={setExpense}
                    setAddExpense={setAddExpense}
                  />
                </div>
                
                <div className='one-half column'>
                  <ExpenseList 
                    expenses={expenses}
                  />

                  <BudgetController 
                    budget={budget}
                    balance={balance}
                  />
                </div>
              </div>
            )
        
          }

          </div>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
