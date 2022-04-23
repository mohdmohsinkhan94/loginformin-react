import React, { Component } from "react";

export default class RefInputText extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  focusInput = (value) => {
    console.log(this.inputRef.current);
    this.inputRef.current.focus();
    this.inputRef.current.value = value;
  };
  render() {
    return (
      <div>
        <h2>RefInputText</h2>
        <input ref={this.inputRef} type="text" placeholder="Enter your Text" />
        <br />
        <button onClick={this.focusInput.bind(this, "calling from child")}>
          button
        </button>
      </div>
    );
  }
}
