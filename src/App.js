import React, { useState,useEffect } from 'react';
import './App.css';
import {uuid}  from 'uuidv4';
import ContactDetail from './components/ContactDetail';
// import User from './components/User/User';
// import Student from './components/Student';
 import ContactList from './components/ContactList';
 import AddContact from './components/AddContact';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Contact from './components/Contact';
// import HomePageWraper from './components/HomePageWraper/HomePageWraper';
// import ExpenseForm from './components/ExpenseForm/ExpenseForm';
// import { useState } from 'react';
// import ExpenseList from './components/ExpenseList/ExpenseList';

const App = () => {
 
const  LOCAL_STORAGE_KEY = "contacts"
const [contacts , setContacts] = useState([])
useEffect(()=>{
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   setContacts(retriveContacts);
  },[])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

//   let [expenseList, setExpenseList] = useState([])
// function deleteItem(index){
//   let newarray = expenseList.filter((item,i) => !(i==index));
//   console.log(newarray);
//   setExpenseList(newarray);
// }
//   function onNewExpenseAdded(newExpense) {
//     setExpenseList([newExpense, ...expenseList]);

//   }
const removeContent =(id)=>{
const newContact = contacts.filter((contact)=>{
  return contact.id !==id;
})
setContacts(newContact);
}
 const addNewContact = (contact) =>{
  console.log(contact)
  setContacts([...contacts,{id:uuid(), ...contact}]);
 }
  return (
    <div className="ui container">
   <>
   <Router>
     <Switch>
     <Route  path='/' 
     exact
    render={(props) => (<ContactList {...props}
    contacts={contacts}  getContactId={removeContent}/>
    )}
  />
 <Route  path ='/add' 
     render={(props)=> (
       <AddContact {...props}
       addNewContact={addNewContact}
       />
     )}
     />
     <Route path="/contact/:id" component={ContactDetail}/>
   </Switch>
   </Router>
   {/* <User name={'mohsin khan'}/>
   <Student name={'mohd mohsin'} email="mohsin.mrt@gmail.com"/>
   <button onClick={()=>{}}></button> */}
    {/* <HomePageWraper className="main-wrapper">
    <ExpenseForm notifyToParent={onNewExpenseAdded}/>
    <ExpenseList expenseList={expenseList} onDeleteItem={deleteItem}/>
    </HomePageWraper> */}
    </>

    </div>
  );
}

export default App;
