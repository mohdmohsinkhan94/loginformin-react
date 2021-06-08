import React, { useState, } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Forgetpassword = () => {
    const [state , setState] = useState({
        email : "",
        password : "",
       
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        
    }
    

    return(
        <div className="main-div">
          <div className="center-div">
              <form>
                  <div className="form-group text-left">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email"  
                         className="form-control" 
                         id="email" 
                         placeholder="Enter email"
                         value={state.email}
                         onChange={handleChange}
                  />
                  
                  </div>
                  <div className="form-group text-left">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" 
                          className="form-control" 
                          id="password" 
                          placeholder="Password"
                          value={state.password}
                          onChange={handleChange} 
                      />
                  </div>
                 
                  <button 
                      type="submit" 
                      className="btn btn-primary"
                      onClick={handleSubmitClick}
                  >
                      Register
                  </button>
                 
              </form>
          </div>
          </div>
      )
};
export default Forgetpassword;