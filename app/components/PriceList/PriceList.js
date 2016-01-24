import React, { Component } from 'react';
import Symbol from './Symbol';

export default class PriceList extends Component {

  constructor(props){
    super(props);
  }

  render(){
    let symbols = this.props.priceData.map((symbol, index)=>{
      return <Symbol symbolData={symbol} key={index} />
    })
    return (
      <ul className="list-group">
        {symbols}
      </ul>
    );
  }

}