import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  switchBackgroundOn,
  switchBackgroundOff,
} from "../../redux/actions/background";
import styles from "./home.module.scss";
const Home = (props) => {
  const dispatch = useDispatch();
  const { isBackground } = useSelector((state) => state);
  const { welcome, notWelcome } = styles;

  return (
    <div className={isBackground ? `${welcome}` : `${notWelcome}`}>
      <div className="inside"> Hello from home </div>
      Hello from home
      <button
        onClick={() => {
          dispatch(switchBackgroundOn());
        }}
      >
        Put this on
      </button>
      <button
        onClick={() => {
          dispatch(switchBackgroundOff());
        }}
      >
        Put this off
      </button>
    </div>
  );
};
export default Home;
