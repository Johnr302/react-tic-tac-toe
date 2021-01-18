import React from "react";

export default (props) => {
  const { imgSrc, disabled } = props;
  return <div className="square" src={imgSrc} disabled={disabled}></div>;
};
