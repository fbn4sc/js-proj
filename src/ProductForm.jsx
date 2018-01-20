import React, { Component } from "react";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <input type="text" placeholder="input" />
      </form>
    );
  }
}

export default ProductForm;
