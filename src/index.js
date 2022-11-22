//create a react app from scratch and
// an h1 text that says Good morning,afternoon,night based on time.
//Apply the heading styles using the styles.cc
//the text should be red if morning,green if afternoon and blue if midnight.
import React from "react";
import ReactDOM from "react-dom";

const dat = new Date();
const d = dat.getHours();
var show;
const customStyle = {
  color: ""
};

if (d < 12) {
  show = "Good Morning";
  customStyle.color = "red";
} else if (d < 18) {
  show = "Good Afternoon";
  customStyle.color = "green";
} else {
  show = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {show}
    </h1>
  </div>,
  document.getElementById("root")
);
