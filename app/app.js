var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Main Component
var Main = require("./components/Main");


console.log("YOU ARE WORKING!");
// This code here allows us to render our main component (in this case Main)
ReactDOM.render(<Main />, document.getElementById("app"));