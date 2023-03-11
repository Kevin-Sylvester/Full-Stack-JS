import { React } from "react";
import caseLogo from "../../../Icons/caseLogo.png";
import group from "../../../Icons/group.png";
import caseImage from "../../../Photos/caseImage.png";

export const Case = () => {
  return (
    <>
      <section className="case-section" id="case">
        <div className="cases">
          <img src={caseLogo} alt="case-logo-img" />
        </div>
        <div className="about-case">
          <div className="case-img">
            <img src={caseImage} alt="case-img" />
          </div>
          <div className="right-case">
            <p>
              With a comfortable and <br /> adaptable case so that you <br />{" "}
              can store it whenever you <br /> want, and keep your durability{" "}
              <br /> forever.
            </p>
            <a href>
              <img src={group} alt="group-icon" />
              More info
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
