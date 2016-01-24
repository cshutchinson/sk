import React, { Component } from 'react';
import PriceList from './PriceList/PriceList';

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.loadSymbolDataFromAPI();
  }


  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <h1 className="text-center">Price List</h1>
          <div className="rpdiv">
            <PriceList priceData={this.state.data} />
          </div>
        </div>
        <div className="col-sm-4">

        </div>
        <div className="col-sm-4">

        </div>
      </div>
    );
  }

  loadSymbolDataFromAPI(){
    $.ajax({
      url: 'https://skbe.herokuapp.com/symbols/prices',
      dataType: 'json',
      cache: false,
      success: (data)=> {
        this.setState({data: data});
      },
      error: (xhr, status, err)=> {
        console.error('skbe.herokuapp.com', status, err.toString());
      }
    });
  }

}
