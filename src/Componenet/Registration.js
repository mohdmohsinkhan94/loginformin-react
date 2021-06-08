import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
//  import { useHistory } from 'react-router-dom';

const Registration = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [otp, setOtp] = useState("")
    // const history = useHistory();
    // useEffect(()=> {
    // if (localStorage.getItem('user-info')){
    //     history.push("/Registration")
    // }
    // }, [])
    
    const handleSubmitClick = (e) => {
        e.preventDefault();
        let item = { username, password,otp }
        console.log(item);
        setUsername("");
    setPassword("");
    setOtp("");
        fetch('http://api.staging-claribel.tech/claribel-auth/api/auth/token', {
            method: 'POST',
            headers: {
                "Accept":"application/json",
                "Content-type":"application/json"

            },
            body: JSON.stringify(item)
        }).then((result) => {
            // console.warn("result", result)
            result.json().then((resp)=>{
                console.warn("resp", resp)
            })
        })



        //    axios
        //    .post("http://api.staging-claribel.tech/claribel-auth/api/auth/token", {
        //          username,
        //          password,
        //          otp,
        //    }).then((responce) => {
        //        console.log(responce);
        //    }).catch((error) => {
        //        console.log(error);
        //    });


    };
  
    return (
        <div className="main-div">
            <div className="center-div">
                <form onSubmit={handleSubmitClick}>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="username"
                            className="form-control"
                            name="username"

                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">password</label>
                        <input type="password"
                            className="form-control"
                            name="password"

                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputOtp1">OTP</label>
                        <input type="otp"
                            className="form-control"
                            name="otp"

                            placeholder="Enter otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />

                    </div>


                    <button
                        type="submit"
                        className="btn btn-primary"
                    // onClick={handleSubmitClick} 
                    >
                        Submit
                   </button>
                   <p>
                 <NavLink exact to='/' > Forget Password </NavLink>
                </p>
                </form>
            </div>
        </div>
    )  
  
}
export default Registration;