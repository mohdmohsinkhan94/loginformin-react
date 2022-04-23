import React, { Component } from "react";
export function WithCategoryComponent(limit) {
  return function (WrapperComponent) {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
          Categories: [
            "category1",
            "category2",
            "category3",
            "category4",
            "category5",
          ],
        };
      }
      render() {
        const Categories = this.state.Categories.slice(0, limit);
        return (
          <div>
            <div>Category Title</div>
            <WrapperComponent {...this.props} Categories={Categories} />
          </div>
        );
      }
    };
  };
}
