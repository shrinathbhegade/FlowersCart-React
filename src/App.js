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
      <div>
        {this.state.products.length === 0 && (
          <div style={{ top: 150 }} className="alert alert-danger" role="alert">
            <blockquote className="blockquote">
              Great, your wishlist is empty. Refresh the page ( Press f5 key) to
              get it back!
            </blockquote>
          </div>
        )}
        {this.renderBody()}
      </div>
    );
  }

  renderBody() {
    return (
      <React.Fragment>
        <NavBar
          totalProducts={this.state.products.filter((p) => p.value > 0).length}
          wishlistCount={this.state.products.length}
        ></NavBar>
        <main style={{ marginTop: 75 }} className="container">
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
    this.addDataIntoCache(products);
  };

  onDecrement = (product) => {
    if (product.value > 0) {
      const products = [...this.state.products];
      let index = products.indexOf(product);
      products[index] = { ...product };
      products[index].value--;
      this.setState({ products });
      this.addDataIntoCache(products);
    }
  };

  onDelete = (product) => {
    const products = this.state.products.filter((p) => p.id !== product.id);
    //console.log("After delete : ", products);
    this.setState({ products });
    this.addDataIntoCache(products);
  };

  addDataIntoCache = (param) => {
    localStorage.setItem("products", JSON.stringify(param));
  };
}

export default App;
