import React from "react";
import specsImage from "../../../Photos/specsImage.png";
import bluetooth from "../../../Icons/bluetooth.png";
import battery from "../../../Icons/battery.png";
import mic from "../../../Icons/mic.png";
import charger from "../../../Icons/charger.png";
import specsLogo from "../../../Icons/specsLogo.png";

export const Specs = () => {
  return (
    <>
    <section className="specs-section" id="specs">
        <div className="specs">
          <img src={specsLogo} alt="specs-logo-img" />
        </div>
        <div className="about-specs">
          <div className="specification">
            <div className="connection">
              <img src={bluetooth} alt="bluetooth-icon" />
              <h4>Connection</h4>
              <span>Bluetooth v5.2</span>
            </div>
            <div className="battery">
              <img src={battery} alt="battery-icon" />
              <h4>Battery</h4>
              <span>Duration 40h</span>
            </div>
            <div className="load">
              <img src={charger} alt="charger-icon" />
              <h4>Load</h4>
              <span>Fast charge 4.2-AAc</span>
            </div>
            <div className="microphone">
              <img src={mic} alt="battery-icon" />
              <h4>Microphone</h4>
              <span>
                Supports Apple Siri <br /> and Google
              </span>
            </div>
          </div>
          <div className="specs-big-img">
            <img src={specsImage} alt="specs-img" />
          </div>
        </div>
      </section>
    </>
  );
};
