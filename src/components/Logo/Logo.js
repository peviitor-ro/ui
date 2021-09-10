import React from "react";
import { useSelector } from "react-redux";
import styles from "./logo.module.scss";

const Logo = () => {
  const switchBackground = useSelector((state) => state.switchBackground);

  const { logo, logoOff } = styles;

  return <p className={!switchBackground ? logo : logoOff}>pe viitor</p>;
};

export default Logo;
