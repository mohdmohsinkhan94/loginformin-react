import React from "react";
export default class Student extends React.Component{
    constructor(){
        super();
        this.state={
            data:"mohd mohsin",
        }
    }
    render(props){
        return(
            <div>
            <h1> hello {this.state.data}</h1>
            <h1> {this.props.email}</h1>
            <button onClick={()=>{this.setState({data:'my name is mohd mohsin khan'})}}>update</button>
            </div>
        )
    }














}