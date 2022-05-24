import React, { Component } from "react";

export default class Model extends Component {
  renderData = () => {
    const { detailProduct } = this.props;
    return (
      <div key={detailProduct.id}>
        <div>
          <img src="./glassesImage/model.jpg" alt="" />
          <img src={detailProduct.url} alt="" className="glass" />
        </div>
        <div className="title">
          <h2>{detailProduct.name}</h2>
          <p>{detailProduct.desc}</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <>
        {this.renderData()}
        <div>
          <img src="./glassesImage/model.jpg" alt="" />
        </div>
      </>
    );
  }
}
