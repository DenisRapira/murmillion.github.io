/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image";
import "./style.css";

export const Card = ({ className, imageImageClassName, imageProperty1 = "one", imageImage }) => {
  return (
    <div className={`card ${className}`}>
      <div className="overlap-group">
        <Image
          className="image-instance"
          image={imageImage}
          imageClassName={imageImageClassName}
          property1={imageProperty1}
        />
        <div className="label">
          <div className="text-wrapper">Lunch</div>
        </div>
      </div>
      <p className="div">Arugula Salad with Stone Fruit</p>
      <div className="nutrition">
        <div className="information">
          <div className="title">
            <div className="text-wrapper-2">Calories</div>
            <div className="text-wrapper-3">450</div>
          </div>
          <div className="title">
            <div className="text-wrapper-2">Protein</div>
            <div className="text-wrapper-3">4g</div>
          </div>
        </div>
        <div className="information">
          <div className="title">
            <div className="text-wrapper-4">Fat</div>
            <div className="text-wrapper-3">8g</div>
          </div>
          <div className="title">
            <div className="text-wrapper-4">Carbs</div>
            <div className="text-wrapper-3">23g</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageProperty1: PropTypes.string,
  imageImage: PropTypes.string,
};
