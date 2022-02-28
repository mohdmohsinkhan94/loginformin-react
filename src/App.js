import React from 'react';
import './App.css';
// import User from './components/User/User';
// import Student from './components/Student';
import './App.css';
import HomePageWraper from './components/HomePageWraper/HomePageWraper';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import { useState } from 'react';
import ExpenseList from './components/ExpenseList/ExpenseList';

const App = () => {
  let [expenseList, setExpenseList] = useState([])

  function onNewExpenseAdded(newExpense) {
    setExpenseList([newExpense, ...expenseList]);

  }
 
  return (
    <div className="App">
   <>
   {/* <User name={'mohsin khan'}/>
   <Student name={'mohd mohsin'} email="mohsin.mrt@gmail.com"/>
   <button onClick={()=>{}}></button> */}
    <HomePageWraper className="main-wrapper">
    <ExpenseForm notifyToParent={onNewExpenseAdded}/>
    <ExpenseList expenseList={expenseList}/>
    </HomePageWraper>
    </>

    </div>
  );
}

export default App;
