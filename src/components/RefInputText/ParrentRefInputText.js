import React, { Component } from "react";
import RefInputText from "./RefInputText";

export default class ParrentRefInputText extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }
  componentDidMount = () => {
    this.componentRef.current.focusInput("calling from parrent");
    console.log(this.componentRef.current);
  };
  render() {
    return (
      <div>
        <RefInputText ref={this.componentRef} />
      </div>
    );
  }
}
