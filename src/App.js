import React from 'react';
 import Login from './Login'
import './App.css';
// import Header from './Componenet/Header';
  import Registration from './Componenet/Registration';
 import {Switch, Route} from 'react-router-dom';
 import Forgetpassword from './Forgetpassword';
  import Singup from './Singup';
  import Home from './Home';


const App = () => {
  return (
    <div className="App">
       <Login /> 
     {/* <Header /> */}
     
     <Switch>
    
       <Route  exact path="/" component={Forgetpassword}/>
       <Route  exact path="/Registration" component={ Registration}/>
       <Route  exact path="/singup" component={Singup}/>
       <Route  exact path="/home" component={Home}/>
     </Switch> 

    </div>
  );
}

export default App;
