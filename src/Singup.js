import React,{useState} from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Singup = (props) =>{
   
       
        const [state , setState] = useState({
            firstName : "",
            lastName : "",
            email : "",
            password : "",
           
        })
       
        const handleChange = (e) => {
            const {id , value} = e.target 
            setState((prevState) => {
                console.log(prevState);
                return {
                    ...prevState,
                [id] : value,
                };
                
            })
        }
        
     
        const handleSubmitClick = (e) => {
            e.preventDefault(); 
          let  url = "http://api.staging-claribel.tech/claribel-auth/api/auth/signIn"
           fetch(url,{
               method:'post',
               headers:{
                   'Accept':'application/Json',
                   'content-type':'application/Json'
               },
               body:JSON.stringify()
           }).then((result) =>{
            console.warn('result', result);
           })
        }
  return(
      <div className="main-div">
        <div className="center-div">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputfirstName1">First name</label>
                <input type="text"  
                       className="form-control" 
                       id="firstName" 
                       aria-describedby="firstnameHelp" 
                       placeholder="Enter Firstname"
                       value={state.firstName}
                       onChange={(e)=>{
                        
                       }}
                />
                
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputlastName1">Lastname </label>
                <input type="text"  
                       className="form-control" 
                       id="lastName" 
                       aria-describedby="lastNameHelp" 
                       placeholder="Enter Lastname"
                       value={state.lastName}
                       onChange={handleChange}
                />
                
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">email address</label>
                <input type="email"  
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
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
export default Singup;
