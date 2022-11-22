import React from "react";

function Heading() {
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

  return (
    <h1 className="heading" style={customStyle}>
      {show}
    </h1>
  );
}
export default Heading;
