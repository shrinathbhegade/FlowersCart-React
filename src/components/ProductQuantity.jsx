import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

class ProductQuantity extends Component {
  state = {
    value: this.props.product.value,
  };

  render() {
    //destructure for simplicity
    const { product, onIncrement, onDecrement, onDelete } = this.props;

    return (
      <div>
        <div className="card bg-light border-secondary mb-4">
          <img
            className="card-img-top"
            //src="images/{this.props.product.id}.jpg"
            //src={require(`./../public/images/${this.props.product.id}.jpg`)}
            src={require(`/public/images/${product.id}.jpg`)}
            alt="Not Available"
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
              Flowers always make people better, happier and more helpful; they
              are sunshine, food and medicine for the soul. <br />
              You’re only here for a short visit. Don’t hurry, don’t worry. And
              be sure to smell some{" "}
              <span className="text-monospace">{product.name}</span> today.
            </p>
            <p className="card-text">
              <span style={{ fontSize: 14 }} className={this.setClassNames()}>
                {this.getCount()}
              </span>

              <button
                onClick={() => onIncrement(product)}
                className="btn btn-secondary btn-sm m-2"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button
                onClick={() => onDecrement(product)}
                className="btn btn-secondary btn-sm m-2"
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button
                onClick={() => {
                  onDelete(product);
                }}
                className="btn btn-danger btn-sm m-2"
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </p>
          </div>
        </div>
      </div>
    );
  }

  getCount = () => {
    return (
      <span className="text-lg font-weight-bold">
        {this.props.product.value}
      </span>
    );
  };

  setClassNames = () => {
    let classes = "p-3 badge m-2 badge-";
    classes += this.props.product.value === 0 ? "warning" : "primary";
    return classes;
  };
}

export default ProductQuantity;
