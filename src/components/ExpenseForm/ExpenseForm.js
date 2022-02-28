import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = (props) => {
    const [formstateError,setFormStateError] = useState({
        date: false,
        name:false,
        amount: false,
    });
    const [ formValue, setFromValue] = useState({
        date: '',
        name:'',
        amount: 0,
    });

    function onExpenseAdded() {
        props.notifyToParent({...formValue,});
    }
const Deleteexpense = () =>{
    alert("hello my name is khan")
}
    function onSubmitExpense(event) {
        event.preventDefault();
        setFormStateError(
            {
                name:formValue.name?false: true,
                date:formValue.date?false : true,
                amount:formValue.amount>0? false : true,
            }
        )
    }

    function onInput(controlName,e) {
        setFromValue({
            ...formValue,
            [controlName]: e.target.value
        })
    }
    
    return (
        <form onSubmit={onSubmitExpense}>
          <div className='form-control'>  
          {/* style={{borderColor: 'invalidForm' ? 'red':'transparent',marginBottom:10}}       */}
            <input type="text"  className={`${formstateError.name?'invalid-input':""}`} placeholder='Expense Name' name="name" value={formValue.name}
            onChange={(e) => {onInput('name',e)}}></input>
             </div>
             <div className='form-control'>
            <input type="date" className={`${formstateError.date?'invalid-input':""}`} placeholder='Expense Date' name="mydate" value={formValue.date}
            onChange={(e) => {onInput('date',e)}}></input>
            </div>
            <div className='form-control'>
            <input type="number"  className={`${formstateError.amount?'invalid-input':""}`} placeholder='Expense Amount' name="amount" value={formValue.amount}
            onChange={(e) => {onInput('amount',e)}}></input>
            </div>
            <div className='input-box-2'>
            <button type="submit" className='btn'onClick={onExpenseAdded}>Add Expense</button>
            <button type="submit" className='delete-btn' onClick={Deleteexpense}>DeleteExpense</button>
        
            </div>
        </form>
  
        
    )
}

export default ExpenseForm;