// Include React
// var React = require('react');
// var createReactClass = require('create-react-class');
// var Column1 =  require("./children/Column1.js");
// var Column2 = require("./children/Column2.js");

import React, { Component } from "react";
import Column1 from "./children/Column1";
import Column2 from "./children/Column2";


// Here we include all of the sub-components
class App extends Component{
	constructor(props) {
		super(props);
		this.state = { 
			showComp1: false,
			showComp2: false,
			showComp3: false,
			showComp4: false,
			showComp5: false,
			showComp6: false,
			showComp7: false
		};
		this._onButtonClick1 = this._onButtonClick1.bind(this);
		this._onButtonClick2 = this._onButtonClick2.bind(this);
		this._onButtonClick3 = this._onButtonClick3.bind(this);
		this._onButtonClick4 = this._onButtonClick4.bind(this);
		this._onButtonClick5 = this._onButtonClick5.bind(this);
		this._onButtonClick6 = this._onButtonClick6.bind(this);
		this._onButtonClick7 = this._onButtonClick7.bind(this);
	}

	clearComps() {
		this.setState({
			showComp1: false,
			showComp2: false,
			showComp3: false,
			showComp4: false,
			showComp5: false,
			showComp6: false,
			showComp7: false
		});
	}

	_onButtonClick1() {
		//this.clearComps();
		this.setState({
			showComp1: true
		});
		//console.log("BKUTIZN" + this.state.showComp1);
	}

	_onButtonClick2() {
		this.clearComps();
		this.setState({
			showComp2: true
		});
	}

	_onButtonClick3() {
		this.clearComps();
		this.setState({
			showComp3: true
		});
	}
	_onButtonClick4() {
		this.clearComps();
		this.setState({
			showComp4: true
		});
	}
	_onButtonClick5() {
		this.clearComps();
		this.setState({
			showComp5: true
		});
	}
	_onButtonClick6() {
		this.clearComps();
		this.setState({
			showComp6: true
		});
	}
	_onButtonClick7() {
		this.clearComps();
		this.setState({
			showComp7: true
		});
	}


  	render() {
  		return(
  			<div className="hold">
  				<Column1 
  				_onButtonClick1={this._onButtonClick1}
  				_onButtonClick2={this._onButtonClick2}
  				_onButtonClick3={this._onButtonClick3}
  				_onButtonClick4={this._onButtonClick4}
  				_onButtonClick5={this._onButtonClick5}
  				_onButtonClick6={this._onButtonClick6}
  				_onButtonClick7={this._onButtonClick7}
  				/>
  				<Column2 />
  			</div>
  		)
   		 // return (<div className='hold'><Column1 /><Column2 /></div>)
  	}
};

module.exports = App;