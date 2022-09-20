import React, { Component } from "react";
import ProductQuantity from "./ProductQuantity";

class Products extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.products.map((product) => (
          <ProductQuantity
            key={product.id}
            product={product}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          ></ProductQuantity>
        ))}
      </React.Fragment>
    );
  }
}

export default Products;
