import React from "react";

import buyNowSectionImage from "../../../Photos/buyNowSectionImage.png";
import shoppingBag from "../../../Icons/shoppingBag.png";
import blackLogo from "../../../Photos/black.png";
import blueLogo from "../../../Photos/blue.png";
import nightBlack from "../../../Photos/nightBlack.png";
import redBlack from "../../../Photos/redBlack.png";
import twilightGray from "../../../Photos/twilightGray.png";
import productLogo from "../../../Icons/productLogo.png";
import upArrow from "../../../Icons/upArrow.png";

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
      <section className="choose-style-section" id="products">
        <img src={productLogo} alt="choose-style-logo" className="choose-style-logo" />
        <div className="headphone-box">
          <div className="headphone black">
            <img src={blackLogo} alt="headphone-img" className="headphone-img" />
            <h4>black</h4>
            <span>N299K</span>
            <img src={shoppingBag} alt="bag-img" id="shop-bag" />
          </div>
          <div className="headphone red-black">
            <img src={redBlack} alt="headphone-img" className="headphone-img" />
            <h4>Red Black</h4>
            <span>N299K</span>
            <img src={shoppingBag} alt="bag-img" id="shop-bag" />
          </div>
          <div className="headphone night-black">
            <img src={nightBlack} alt="headphone-img" className="headphone-img" />
            <h4>Night Black</h4>
            <span>N299K</span>
            <img src={shoppingBag} alt="bag-img" id="shop-bag" />
          </div>
          <div className="headphone">
            <img src={blueLogo} alt="headphone-img" className="headphone-img" />
            <h4>Blue</h4>
            <span>N299K</span>
            <img src={shoppingBag} alt="bag-img" id="shop-bag" />
          </div>
          <div className="headphone">
            <img src={twilightGray} alt="headphone-img" className="headphone-img" />
            <h4>Twilight Gray</h4>
            <span>N299K</span>
            <img src={shoppingBag} alt="bag-img" id="shop-bag" />
          </div>
        </div>
      </section>
    </>
  );
};
