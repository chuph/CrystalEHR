// Include React
import React  from 'react';
import PropTypes from 'prop-types';
import Component from '../Main.js';



const Columns = props =>(
	
		<div className="panel">
			<p><img src="Icons/Doctor_Tablet.jpeg"></img></p>
			
			<p><span onClick={() => props.col2Button1()}>{props.items[0]}</span></p>
			<p><span onClick={() => props.col2Button2()}>{props.items[1]}</span></p>
			<p><span onClick={() => props.col2Button3()}>{props.items[2]}</span></p>
			
		</div>
	
);



module.exports = Columns;