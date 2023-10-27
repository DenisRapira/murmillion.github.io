import React from "react";
import { Card } from "../../components/Card";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div-2">
        <div className="overlap">
          <div className="base">
            <p className="i-have-the">I have the ingredients but don&#39;t know what to cook</p>
            <p className="p">Find Recipes using magic cook</p>
            <img className="ILLUSTRATION" alt="Illustration" src="/img/illustration.svg" />
          </div>
          <div className="base-2" />
          <img className="bottom-menu" alt="Bottom menu" src="/img/bottom-menu.svg" />
          <img className="sparkle" alt="Sparkle" src="/img/sparkle.svg" />
          <img className="search" alt="Search" src="/img/search.svg" />
          <img className="search-2" alt="Search" src="/img/search-1.svg" />
          <img className="search-3" alt="Search" src="/img/search-2.svg" />
        </div>
        <div className="card-2">
          <div className="overlap-group-2">
            <img className="image-2" alt="Image" src="/img/image-6.png" />
            <div className="text-wrapper-5">Sushi</div>
          </div>
          <div className="text-wrapper-6">7 ingredients</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-7">EatWell</div>
          <img className="base-3" alt="Base" src="/img/base.svg" />
          <div className="text-wrapper-8">Today’s Meal Plan</div>
          <div className="overlap-3">
            <Card className="card-instance" />
            <Card
              className="card-3"
              imageImage="/img/image-10-1.png"
              imageImageClassName="design-component-instance-node"
              imageProperty1="two"
            />
            <img className="star" alt="Star" src="/img/star-1.svg" />
          </div>
        </div>
        <div className="text-wrapper-9">Recommendation</div>
        <p className="text-wrapper-10">Bored with just the same food? we can recommend you special food</p>
        <div className="select">
          <img className="dice" alt="Dice" src="/img/dice.svg" />
          <div className="text-wrapper-11">Dice</div>
        </div>
      </div>
    </div>
  );
};
