import React, { Component } from "react";
import Column1 from "./children/Column1";
import Column2 from "./children/Column2";
import Patient from "./children/Patient";

var items = ["thing", "thing2", "thing3"];
var items2 = ["thing", "thing2", "thing6"];
var items3 = ["thing", "thing2", "thing7"];
var items4 = ["thing", "thing2", "thing8"];
var items5 = ["thing", "thing2", "thing9"];
var items6 = ["thing", "thing2", "thing10"];
var items7 = ["thing", "thing2", "thing4"];
var items8 = ["sl;dkfj"];
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
			showComp7: false,
			showComp8: false,
			items: items,
			items2: items2,
			items3: items3,
			items4: items4,
			items5: items5,
			items6: items6,
			items7: items7,
			items8: items8,
			showSubComp1: false,
			showSubComp2: false,
			showSubComp3: false,
			showSubComp4: false,
			showSubComp5: false,
			showSubComp6: false,
			showSubComp7: false,
			showSubComp8: false,
			showSubComp9: false,
			showSubComp10: false,
			showSubComp11: false,
			showSubComp12: false,
			showSubComp13: false,
			showSubComp14: false,
			showSubComp15: false,
			showSubComp16: false,
			showSubComp17: false,
			showSubComp18: false,
			showSubComp19: false,
			showSubComp20: false,
			showSubComp21: false

		};
		this._onButtonClick1 = this._onButtonClick1.bind(this);
		this._onButtonClick2 = this._onButtonClick2.bind(this);
		this._onButtonClick3 = this._onButtonClick3.bind(this);
		this._onButtonClick4 = this._onButtonClick4.bind(this);
		this._onButtonClick5 = this._onButtonClick5.bind(this);
		this._onButtonClick6 = this._onButtonClick6.bind(this);
		this._onButtonClick7 = this._onButtonClick7.bind(this);
		this._onButtonClick8 = this._onButtonClick8.bind(this);
		this.col2Button1 = this.col2Button1.bind(this);
		this.col2Button2 = this.col2Button2.bind(this);
		this.col2Button3 = this.col2Button3.bind(this);
	}

	clearComps() {
		this.setState({
			showComp1: false,
			showComp2: false,
			showComp3: false,
			showComp4: false,
			showComp5: false,
			showComp6: false,
			showComp7: false,
			showComp8: false
		});
	}

	clearSubComps() {
		this.setState({
			showSubComp1: false,
			showSubComp2: false,
			showSubComp3: false,
			showSubComp4: false,
			showSubComp5: false,
			showSubComp6: false,
			showSubComp7: false,
			showSubComp8: false,
			showSubComp9: false,
			showSubComp10: false,
			showSubComp11: false,
			showSubComp12: false,
			showSubComp13: false,
			showSubComp14: false,
			showSubComp15: false,
			showSubComp16: false,
			showSubComp17: false,
			showSubComp18: false,
			showSubComp19: false,
			showSubComp20: false,
			showSubComp21: false
		});
	}

	_onButtonClick1() {
		this.clearComps();
		this.setState({
			showComp1: true
		});
		console.log("BKUTIZN" + this.state.showComp1);
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

	_onButtonClick8() {
		this.clearComps();
		this.setState({
			showComp8: true
		});
	}

	col2Button1() {
		this.clearSubComps();
		if (this.state.showComp1) {
			this.setState({
				showSubComp1: true
			});
		}
		else if (this.state.showComp2) {
			this.setState({
				showSubComp2: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp3: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp4: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp5: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp6: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp7: true
			});
		}
	}
	col2Button2() {
		this.clearSubComps();	
		if (this.state.showComp1) {
			this.setState({
				showSubComp8: true
			});
		}
		else if (this.state.showComp2) {
			this.setState({
				showSubComp9: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp19: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp11: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp12: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp13: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp14: true
			});
		}
	}
	col2Button3() {
		this.clearSubComps();
		if (this.state.showComp1) {
			this.setState({
				showSubComp15: true
			});
		}
		else if (this.state.showComp2) {
			this.setState({
				showSubComp16: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp17: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp18: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp19: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp20: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp21: true
			});
		}
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
  				_onButtonClick8={this._onButtonClick8}
  				/>

  			{this.state.showComp1 ? <Column2 items={this.state.items} 
  											 col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
  											 /> : null }
  			{this.state.showComp2 ? <Column2 items={this.state.items2}
  										     col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
  											/> : null }
  			{this.state.showComp3 ? <Column2 items={this.state.items3}
  										     col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
  											/> : null }
  			{this.state.showComp4 ? <Column2 items={this.state.items4}
  											col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
											 /> : null }
  			{this.state.showComp5 ? <Column2 items={this.state.items5}
  											col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
											 /> : null }
  			{this.state.showComp6 ? <Column2 items={this.state.items6}
  											col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
											 /> : null }
  			{this.state.showComp7 ? <Column2 items={this.state.items7}
  											col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
											 /> : null }
  			{this.state.showComp8 ? <Column2 items={this.state.items8}
  											col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
											 /> : null }

			{this.state.showSubComp1 ? <Patient /> : null}




  		{/* if statement for each of the 21 components*/}

  			</div>
  			


  		)

  	}
};

module.exports = App;