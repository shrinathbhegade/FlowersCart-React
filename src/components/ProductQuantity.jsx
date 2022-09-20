import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

class ProductQuantity extends Component {
  state = {
    value: this.props.product.value,
  };

  render() {
    return (
      <div>
        <div className="card bg-light border-secondary mb-4">
          <img
            className="card-img-top"
            //src="images/{this.props.product.id}.jpg"
            //src={require(`./../public/images/${this.props.product.id}.jpg`)}
            src={`../images/${this.props.product.id}.jpg`}
            alt="Not Available"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.product.name}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <span style={{ fontSize: 14 }} className={this.setClassNames()}>
                {this.getCount()}
              </span>

              <button
                onClick={() => this.props.onIncrement(this.props.product)}
                className="btn btn-secondary btn-sm m-2"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button
                onClick={() => this.props.onDecrement(this.props.product)}
                className="btn btn-secondary btn-sm m-2"
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button
                onClick={() => {
                  this.props.onDelete(this.props.product);
                }}
                className="btn btn-danger btn-sm m-2"
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
              <small className="text-muted">Last updated 3 mins ago</small>
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
