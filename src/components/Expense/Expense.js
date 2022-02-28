import './Expense.css';
import { useState } from 'react';

function Expense(props) {

    return <div className="expense-wrapper">
        <p>Expense date: {props.date}</p>
        <p>Expense Name: {props.name}</p>
        <p>Expense Amount: {props.amount}</p>
    </div>;
}

export default Expense;