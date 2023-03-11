import React from "react";
import mainImage from "../Photos/mainImage.png";
import shoppingBag from "../Icons/shoppingBag.png";
import onEar from "../Photos/onEar.png";

export const Main = () => {
  return (
    <div className="main-home">
      <div className="main-image">
        <img src={mainImage} alt="main-image" />
      </div>
      <div className="right-home">
        <img src={onEar} alt="image" id="onear-img" />
        <h1>Beats 3</h1>
        <h3>Overview</h3>
        <p>
          Enjoy award-winning Beats sound with wireless <br /> listening freedom
          and a sleek, steamlined design <br /> with comfortable padded
          earphones, delivering <br /> first-rate playback.
        </p>
        <button>
          <img src={shoppingBag} alt="bag-image" />
          Add to Bag
          <span>N399K</span>
        </button>
      </div>
    </div>
  );
};
