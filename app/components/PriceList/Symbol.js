import React, { Component } from 'react';

export default class Symbol extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <tr>
        <td>{this.props.symbolData.symbol}</td>
        <td>{this.props.symbolData.name}</td>
        <td className="text-right">${new Number(this.props.symbolData.current_price).toFixed(2)}</td>
        <td className="text-right">{this.props.symbolData.volume}</td>
      </tr>
    );
  }

}
