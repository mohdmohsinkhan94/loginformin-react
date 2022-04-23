import React, { useState, useEffect } from "react";
import "./App.css";
import { uuid } from "uuidv4";
import ContactDetail from "./components/ContactDetail";
// import User from './components/User/User';
// import Student from './components/Student';
//  import ContactList from './components/ContactList';
//  import AddContact from './components/AddContact';
// import './App.css';
// import Contact from './components/Contact';
import HomePageWraper from "./components/HomePageWraper/HomePageWraper";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
// import UserLoginForm from "./components/Authentication/UserLoginForm";
// import DashBoard from "./components/DashBoard/DashBoard";
import Dropdown from "./components/DropDown/Dropdown";
import Authcontext from "./components/Store/Authcontext/Authcontext";
import Demo from "./components/DemoClassComponent/Demo";
import Sidebar from "./components/Sidebar/Sidebar";
import ButtonContex from "./components/ContexApi/ButtonContex";
import UserContext from "./components/UserContext/UserContext";
import Navigation from "./components/Navigation/Navigation";
import Category from "./components/Category/Category";
import RefInputText from "./components/RefInputText/RefInputText";
import ParrentRefInputText from "./components/RefInputText/ParrentRefInputText";
import Dreams from "./components/Dropdowncount/Dreams";
import DreamsWithCat from "./components/Dropdowncount/DreamsWithCat";
import Useofcode from "./components/UseofUseeffat/Useofcode";
import Posts from "./components/SinglePosts/Posts";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import User from "./components/User";
import Filter from "./components/Filter";
import PageNoteFound from "./components/PageNoteFound";
import Contacts from "./components/Contacts";
import Company from "./components/Company";
import Channals from "./components/Channals";
import Others from "./components/Others";
import Login from "./components/Login";
import Protected from "./components/Protected";

const App = () => {
  const [logedin, setLogedin] = useState(false);
  const [showe, setShowe] = useState(true);
  function UpdatedLoginState(loginState) {
    setLogedin(loginState);
  }
  // const  LOCAL_STORAGE_KEY = "contacts"
  // const [contacts , setContacts] = useState([])
  // useEffect(()=>{
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //    setContacts(retriveContacts);
  //   },[])
  //   useEffect(()=>{
  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  //   },[contacts]);

  let [expenseList, setExpenseList] = useState([]);
  let [dropdownLength, setDropdownLength] = useState(20);
  let [dropdownCurrentValue, setDropdownCurrentValue] = useState(2);

  function deleteItem(index) {
    let newarray = expenseList.filter((item, i) => !(i == index));
    console.log(newarray);
    setExpenseList(newarray);
  }
  function onNewExpenseAdded(newExpense) {
    setExpenseList([newExpense, ...expenseList]);
  }
  function onDropdownChange(newValue) {
    // console.log(newValue);
    setDropdownCurrentValue(newValue);
  }
  function deleteDropdown() {
    setDropdownCurrentValue(dropdownCurrentValue - 1);
  }
  function onconfirmationHandler(message) {
    alert(message);
  }
  let userData = {
    name: "Mohd Mohsin  Khan shabb",
    greet: function () {
      return "Hello" + this.name;
    },
  };
  // const removeContent =(id)=>{
  // const newContact = contacts.filter((contact)=>{
  //   return contact.id !==id;
  // })
  // setContacts(newContact);
  // }
  //  const addNewContact = (contact) =>{
  //   console.log(contact)
  //   setContacts([...contacts,{id:uuid(), ...contact}]);
  //  }
  return (
    <div className="ui container">
      {/* <> */}
      <Header />
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Protected Component={About} />} />
        <Route path="/user/:name" element={<Protected Component={User} />} />
        <Route path="/filter" element={<Protected Component={Filter} />} />
        <Route path="/contacts" element={<Contacts />}>
          <Route path="company" element={<Company />} />
          <Route path="channals" element={<Channals />} />
          <Route path="others" element={<Others />} />
        </Route>
        <Route path="/*" element={<PageNoteFound />} />
      </Routes>

      {/* <Router>
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
   </Router> */}
      {/* <User name={'mohsin khan'}/>
   <Student name={'mohd mohsin'} email="mohsin.mrt@gmail.com"/>
   <button onClick={()=>{}}></button> */}

      {/* <Demo name={"Mohd Mohsin Khan"}></Demo>
        <Dropdown
          dropdownCurrentValue={dropdownCurrentValue}
          options={Array.from({ length: dropdownLength }, (e, i) => i + 1)}
          onDropdownChange={onDropdownChange}
        ></Dropdown> */}
      {/* {Array.from({ length: dropdownCurrentValue }).map((elm, i) => {
          return (
            <div className="item" key={i} style={{ textAlign: "center" }}>
              item {i + 1}
              <button
                onClick={deleteDropdown}
                style={{
                  color: "white",
                  backgroundColor: "blue",
                  marginLeft: "20px",
                  textAlign: "center",
                }}
              >
                Delete
              </button>
            </div>
          );
        })} */}
      {/* <HomePageWraper className="main-wrapper"> */}
      {/* <> */}
      {/* <Posts /> */}
      {/* <Authcontext.Provider
            value={{
              isLoggedIn: logedin,
              onConfirmation: onconfirmationHandler,
            }}
          >
            <Dropdown></Dropdown>
            <ExpenseForm notifyToParent={onNewExpenseAdded} />
            <ExpenseList expenseList={expenseList} onDeleteItem={deleteItem} />
            {!logedin ? (
              <UserLoginForm UpdatedLoginState={UpdatedLoginState} />
            ) : (
              ""
            )}
            {logedin ? (
              <DashBoard UpdatedLoginState={UpdatedLoginState}></DashBoard>
            ) : (
              ""
            )}
          </Authcontext.Provider>
          <Category name="Category" />
          <Sidebar>
            <Navigation>
              <p>{"Hello my name khan"}</p>
              <div>{userData.greet()}</div>
            </Navigation>
          </Sidebar>
          <ParrentRefInputText />
          <button
            style={{ color: "green", backgroundColor: "red" }}
            onClick={() => setShowe(!showe)}
          >
            Toggle button
          </button>
          {showe && <Useofcode />} */}
      {/* </HomePageWraper> */}
      {/* <DreamsWithCat></DreamsWithCat> */}
      {/* </> */}
    </div>
  );
};

export default App;
