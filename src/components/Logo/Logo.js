import React from "react";
import { useSelector } from "react-redux";
import styles from "./logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  const switchBackground = useSelector((state) => state.switchBackground);

  const { logo, logoOff, logoContainer } = styles;

  return <Link  to='/' className={logoContainer}>
  <p className={!switchBackground ? logo : logoOff}>pe viitor</p>
  </Link>;
};

export default Logo;
