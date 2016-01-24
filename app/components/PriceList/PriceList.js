import React, { Component } from 'react';
import Symbol from './Symbol';

export default class PriceList extends Component {

  constructor(props){
    super(props);
  }

  render(){
    let lastUpdate = new Date();
    let symbols = this.props.priceData.map((symbol, index)=>{
      lastUpdate = (symbol.last_update);
      return <Symbol symbolData={symbol} key={index} />
    })
    return (
      <div>
        <p className="text-center lastupdate">Updated: {moment(lastUpdate).add(2,'hours').calendar()} EST</p>
      <table className="table table-striped table-condensed pricedata">
        <tbody>
          {symbols}
        </tbody>
      </table>
    </div>
    );
  }

}
