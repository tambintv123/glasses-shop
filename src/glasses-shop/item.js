import React, { Component } from "react";

export default class Item extends Component {
  renderData = () => {
    const { productList } = this.props;
    return productList.map((item) => {
      return (
        <button
          className="btn"
          key={item.id}
          onClick={() => {
            this.props.getGlass(item);
          }}
        >
          <img className="img-fluid img" src={item.url} alt="" />
        </button>
      );
    });
  };
  render() {
    return <div className="container box">{this.renderData()}</div>;
  }
}
