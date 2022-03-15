import React from 'react'
import { Link } from 'react-router-dom';


const  ContactDetail =(props)=> {
    const {id, name, email} = props.location.state.contact;
 return(
     <div className='ui card centered'>
     <div className='image'>
      <div className='content'>
     <div className='header'>{name} </div>
     <div className='description'>{email}</div>
      </div>
      <div className='center div'>
          <Link to="/">
          <button className='ui button red ' style={{marginTop:20}}>Back</button>
          </Link>
      </div>
     </div>
     </div>
 )
    
       
}

export default ContactDetail;