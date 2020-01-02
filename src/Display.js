import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const Display = props => {
  const Season = getSeason(props.lat, new Date().getMonth());
  const Text = Season === "winter" ? "dingiin!" : "panas!";
  return <h1>{Text}</h1>;
};

export default Display;
