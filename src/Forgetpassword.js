import React, {useState,} from 'react';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//  import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Forgetpassword = () =>{

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
// const history = useHistory();


  const   handleSubmitClick = (e) => {
    e.preventDefault();
    let item = { email, password}
    console.log(item);
//    let url = "http://localhost:3002/comments"
    
//   let  params  = {
//         method: 'post',
//         headers: {
//                 'content-type': 'application/json'
                 
//         },
//         body: JSON.stringify(item)
//     }
//     fetch(url, params).then((responce) =>{
//  responce.json();
// }).then((item)=>{
//    console.log(item);
// }).catch((error)=>{
//     console.log(error);
// })
   axios
   .post("http://localhost:3002/profile", {
         email,
         password,
   }).then((responce) => {
       console.log(responce);
   }).catch((error) => {
       console.log(error);
   });

           
};

return(
<div className="main-div">
<div className="center-div">
    <form onSubmit={handleSubmitClick}>
        <div className="form-group text-left">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email"  
               className="form-control" 
               name="email" 
             
               placeholder="Enter email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
        />
        
        </div>
        <div className="form-group text-left">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="password"  
               className="form-control" 
               name="password" 
               
               placeholder="Enter password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
        />
        
        </div>
       
       
        <button 
            type="submit" 
            className="btn btn-primary"
            // onClick={handleSubmitClick}
        >
            Submit
        </button>
     
    </form>
</div>
</div>
)
};
export default Forgetpassword;