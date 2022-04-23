import { Component } from "react";
import { WithCategoryComponent } from "./WithCategoryComponent";

class Category extends Component {
  render() {
    return (
      <div>
        <div>Categories component-name: {this.props.name} </div>
        {this.props.Categories.map((category) => {
          return <div>{category}</div>;
        })}
      </div>
    );
  }
}
export default WithCategoryComponent(4)(Category);
