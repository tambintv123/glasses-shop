import React, { Component } from "react";
import Header from "./header";
import data from "./data.json";
import Model from "./model";
import Item from "./item";
export default class GlassesShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: data,
      detailProduct: data[0],
    };
  }
  handleGetGlass = (item) => {
    this.setState({
      detailProduct: item,
    });
  };
  render() {
    const { productList, detailProduct } = this.state;
    return (
      <div className="content">
        <Header />
        <div className="d-flex container justify-content-between model">
          <Model detailProduct={detailProduct} />
        </div>
        <br />
        <div>
          <Item productList={productList} getGlass={this.handleGetGlass} />
        </div>
      </div>
    );
  }
}
