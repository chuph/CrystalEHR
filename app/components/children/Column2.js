// Include React
import React  from 'react';
import PropTypes from 'prop-types';
import Component from '../Main.js';

class Columns extends React.Component {
	render() {
		return (<div className="panel">

			<p><img src="Icons/Doctor_Tablet.jpeg"></img></p>

			</div>);
	}
}

Columns.PropTypes = {
	text: PropTypes.string.isRequired,
};

module.exports = Columns;