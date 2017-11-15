import React, { Component } from 'react';

export default class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        name: '名称',
        text: '描述'
      }
    }
  }
  productRender() {
    let data = this.state.data;
    return (
      <div>
        <p>{data.name}</p>
        <p>{data.text}</p>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.productRender()}
      </div>
    )
  }
}