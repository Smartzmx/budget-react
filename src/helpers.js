export const budgetAlert = (budget, balance) =>{
    let classStyle
    if((budget/4) > balance){
        classStyle='alert alert-danger'
    } else if((budget/2)> balance){
        classStyle='alert alert-warning'
    } else {
        classStyle='alert alert-success'
    }
    return classStyle
}