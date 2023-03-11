import React from "react";

import buyNowSectionImage from "../../../Photos/buyNowSectionImage.png";
import shoppingBag from "../../../Icons/shoppingBag.png";

export const Products = () => {
  return (
    <>
    <section className="buynow-section">
        <div className="buynow-box">
          <div className="left-buynow">
            <h2>
              Immerse yourself in <br /> your music
            </h2>
            <p>Buy Now, up to 40% off</p>
            <a href>
              <img src={shoppingBag} alt="bag-image" />
              Buy now
            </a>
          </div>
          <div className="right-buynow">
            <img src={buyNowSectionImage} alt="buynow-image" />
          </div>
        </div>
      </section>
    </>
  );
};
