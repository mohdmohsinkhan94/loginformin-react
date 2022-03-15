import React from 'react'
// import contact from './Contact';
import { Link } from 'react-router-dom';
import Contact from './Contact';
function contactList(props) {
    console.log(props)
    const deleteHandler=(id)=>{
        props.getContactId(id)
    };
    const renderContactList = props.contacts.map((contact)=>{
              return(
               
                <Contact contact={contact} getClickHndler={deleteHandler} key ={contact.id}></Contact>
               
              );
          })

  return (
    <div className=" main">
        <h2 className='ui celled left'>Contact List
        <Link to='/add'>
            <button className='ui button blue right'>Add button</button>
            </Link>
        </h2>
    
    <div className='ui celled list'>
    {renderContactList}
    </div>   

    </div>
  )
}

export default contactList