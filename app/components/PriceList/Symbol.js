import React, { Component } from 'react';

export default class Symbol extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <li className='list-group-item'>
        <div className="">
          <div className="row">
            <div className="col-sm-2">
              {this.props.symbolData.symbol}
            </div>
            <div className="col-sm-9 col-sm-offset-1">
              {this.props.symbolData.name}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              Price: ${new Number(this.props.symbolData.current_price).toFixed(2)}
            </div>
            <div className="col-sm-6">
              Volume: {this.props.symbolData.volume}
            </div>
          </div>
        </div>
      </li>

    );
  }

}
