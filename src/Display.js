import './Display.css';
import React from "react";

const seasonConfig = {
  summer: {
    text: "Panas!",
    iconName: "sun"
  },
  winter: {
    text: "Dingin!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const Display = props => {
  const Season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[Season];

  return (
    <div className={`season-display ${Season}`}>
      <i className={`${iconName} massive icon icon-left`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} massive icon icon-right`}></i>
    </div>
  );
};

export default Display;
