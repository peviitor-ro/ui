import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsBurger } from "redux/actions/burger";
import useWindowDimensions from "utils/customsHooks/useWindowsDimensions";

const BurgerMenu = () => {
  const { width } = useWindowDimensions();
  const { isBurger, switchBackground } = useSelector((state) => state);
  const dispatch = useDispatch();
  const toggleBurger = () => {
    dispatch(setIsBurger());
  };
  const burgerStyle = {
    display: width > 768 ? "none" : "block",
    marginBottom: isBurger ? 100 : 100,
    color: "#000000",
  };
  return (
    <div style={burgerStyle}>
      <Hamburger
        onToggle={toggleBurger}
        color={!switchBackground ? "#000000" : "#ffffff"}
      />
    </div>
  );
};

export default BurgerMenu;
