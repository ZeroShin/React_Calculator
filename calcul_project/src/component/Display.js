import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

const Display = ({ value, theme }) => {

  const style = {
    display : {
      backgroundColor: theme === "light" ? "white" : "black",
      color : theme === "light" ? "black" : "gray",
    },
  };

  return (
    <div className="component-display" style={style.display}>
      <div>{value}</div>
    </div>
  );
};

Display.propTypes = {
  //타입을 항상 신경써주며 처리를 해야한다.
  value: PropTypes.string,
  theme: PropTypes.string,
};

export default Display;
