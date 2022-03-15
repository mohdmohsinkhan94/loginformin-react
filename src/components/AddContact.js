import React from 'react';
class AddContact extends React.Component{
    state = {
        name: "",
        email: "",
    }
 add = (e) => {
     e.preventDefault();
     if(this.state.name === "" || this.state.email === "") {
         alert(' all the field are mandatry ')
         return;
     }
      this.props.addNewContact(this.state);
      this.setState({name:"", email:""})
      this.props.history.push("/");
};

    render(){

        return(
            <div className='ui main'>
                <h2>Add contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                         onChange={ (e) => this.setState({name: e.target.value})}
                         name="name" 
                         value={this.state.name}
                        placeholder='Enter your name'/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email"
                        onChange={ (e) => this.setState({email: e.target.value})} 
                        name="email"
                        value={this.state.email}
                        placeholder='Enter your email'/>
                    </div>
                    <div>
                        <button className="ui button blue" >Add</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddContact;