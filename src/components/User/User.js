import React, { useState } from 'react'

function User(props) {
    // const [data, setData] = useState(false);
    // const [logined, setLogined] = useState(2);
    // const updateData = () =>{
    //     setData('khan');
    // }
   
     const [userName, setUserName] = useState();
     const [password, setPassword] = useState();
     const [userError, setUserError] = useState();
     const [passError, setPassError] = useState();
    const submitHandler =(e)=>{
        e.preventDefault();
        if(userName.length<3 || password.length<3){
            alert("Type correct values")
        }else
        {
            alert("All good")
        }
        return
    }
    const inputHandler =(e)=>{
      let item = e.target.value;
     if(item.length<3){
        setUserError(true)
     }else{
        setUserError(false)
     }
     setUserName(item)
    }
    const inputPassHandler=(e)=>{
        let item = e.target.value;
        if(item.length<3){
            setPassError(true)
        } else
        {
            setPassError(false)
        }
        setPassword(item)
    }
  return (
    <div>
        <form onSubmit={submitHandler} className="form-controls">
        <input type='text' name='username' onChange={inputHandler} placeholder='Enter your name'/>{userError? <span >Please enter valid data</span>:""}<br/><br/>
        <input type='password'name='password' onChange={inputPassHandler} placeholder='Enter your password'/>{passError?<span>Please enter valid password</span>:""}<br/><br/>
       <button type='submit'>Login</button>
       </form>
        {/* {
       logined ===1? <h2>Hello welcome user-1!</h2>:logined===2?<h2>Hello welcome user-2!</h2>:logined===3?<h2>Hello welcome user-3!</h2>:""
      } 
      {
       data? <h2>Hello Guys how are you!</h2>:""
      } 
        <h1>{props.name}</h1> */}
        {/* <button  type='submit' onClick={()=>{setData(true)}}>Show</button>
        <button  type='submit' onClick={()=>{setData(false)}}>Hide</button> */}
        {/* <button  type='submit' onClick={()=>{setData(!data)}}>toggle</button> */}
    </div>
  )
}

export default User;