/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Image = ({ property1, className, imageClassName, image = "/img/image-10.png" }) => {
  return (
    <div className={`image ${property1} ${className}`}>
      <img className={`img ${imageClassName}`} alt="Image" src={property1 === "two" ? image : "/img/image-9-1.png"} />
    </div>
  );
};

Image.propTypes = {
  property1: PropTypes.oneOf(["two", "one"]),
  image: PropTypes.string,
};
