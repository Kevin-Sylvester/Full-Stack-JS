import React from "react";

import { Case } from './components/Case'
import { Products } from "./components/Products";
import { Specs } from "./components/Specs";
import { myContext } from "../../App";
import { useContext } from "react";
import drePic from "../../Photos/Dre.png";

export const Hero = () => {
  const data = useContext(myContext);
  debugger;
  console.log(data.menu)
  return (
    <>
      <div id="hero">
        {
          (data.menu == "Specs" ? (
            <Specs />
          ) : (
            data.menu == "Case" ? <Case /> : 
            data.menu == "Products" ? <Products /> :
            <img src={drePic} id="dreImg" alt="Dre" />
          ))
        }
      </div>
    </>
  );
};