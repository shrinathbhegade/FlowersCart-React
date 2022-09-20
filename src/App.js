import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Products from "./components/Products";

class App extends Component {
  state = {
    products: this.props.products,
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalProducts={this.state.products.filter((p) => p.value > 0).length}
        >
          {" "}
        </NavBar>
        <main className="container mt-5">
          <Products
            products={this.state.products}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            onDelete={this.onDelete}
          ></Products>
        </main>
      </React.Fragment>
    );
  }
  onIncrement = (product) => {
    const products = [...this.state.products];
    let index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value++;
    this.setState({ products });
    this.addDataIntoCache();
  };

  onDecrement = (product) => {
    if (product.value > 0) {
      const products = [...this.state.products];
      let index = products.indexOf(product);
      products[index] = { ...product };
      products[index].value--;
      this.setState({ products });
      this.addDataIntoCache();
    }
  };

  onDelete = (product) => {
    const products = this.state.products.filter((p) => p.id !== product.id);
    this.setState({ products });
    this.addDataIntoCache();
  };

  addDataIntoCache = () => {
    localStorage.setItem("products", JSON.stringify(this.state.products));
  };
}

export default App;
