// Include React
import React  from 'react';



const Columns = props =>(
		 <div className="symbols">
<div>{console.log(props)}</div>
			<span onClick={() => props._onButtonClick1()}><img id="icon1" src="Icons/Icons-01.png"></img></span>
			<span onClick={() => props._onButtonClick2()}><img id="icon2" src="Icons/Icons-02.png"></img></span>
			<span onClick={() => props._onButtonClick3()}><img id="icon3" src="Icons/Icons-03.png"></img></span>
			<span onClick={() => props._onButtonClick4()}><img id="icon4" src="Icons/Icons-04.png"></img></span>
			<span onClick={() => props._onButtonClick5()}><img id="icon5" src="Icons/Icons-05.png"></img></span>
			<span onClick={() => props._onButtonClick6()}><img id="icon6" src="Icons/Icons-06.png"></img></span>
			<span onClick={() => props._onButtonClick7()}><img id="icon7" src="Icons/Icons-07.png"></img></span>
			<span onClick={() => props._onButtonClick8()}><img id="icon8" src="Icons/Icons-08.png"></img></span>

			</div>
	
);


export default Columns;