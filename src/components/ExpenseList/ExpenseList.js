import { useState } from 'react';
import Expense from '../Expense/Expense';
import './ExpenseList.css';
const ExpenseList = (props) => {


    let expenseListContent = 'No Expense found';
  function deleteItem(index){
     props.onDeleteItem(index);
  console.log(index);
  
  }
    function getExpenseList() {
        if(!props.expenseList.length) {
            return <p>{expenseListContent}</p>
        } else {
            return props.expenseList.map((expense,i) => {
                return <div>
                    <div key={i}>
                <Expense key={expense.id} date={expense.date} name={expense.name} amount={expense.amount}></Expense>
                <button onClick={() => deleteItem(i)}>Delete</button>
                </div>
                </div>
            })
        }
    }


    return (
        <div>
            <h2>ExpenseList</h2>
            {
                getExpenseList()
            }
        </div>
    );
}

export default ExpenseList;