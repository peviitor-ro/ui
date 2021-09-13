import React from "react";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide, Fade } from "react-slideshow-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBackgroundImages } from "utils/services";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import ToggleButton from "react-toggle-button";
import styles from "./BackgroundSlider.module.scss";
import "react-slideshow-image/dist/styles.css";
import { setSwitchBackground } from "redux/actions/switchBackground";

const BackgroundSlider = ({ children }) => {
  const [backgroundImages, setBackgroundImages] = useState();
  const [isBackgroundVisible, setBackgroundVisibility] = useState(true);
  const dispatch = useDispatch();
  const toggleButton = () => {
    dispatch(setSwitchBackground());
    setBackgroundVisibility(!isBackgroundVisible);
  };

  useEffect(() => {
    getBackgroundImages((data) => setBackgroundImages(data));
  }, []);
  const {
    backgroundStyle,
    switchBackgroundIcon,
    switchBackgroundIconContainer,
    pageContent,
    iconContainer,
    backgroundSliderContainer,
    eachSlide,
    toggleButtonContainer,
  } = styles;
  const properties = {
    autoplay: false,
    arrows: false,
  };
  const slideRef = useRef();
  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  return (
    <div className={backgroundSliderContainer}>
      {isBackgroundVisible && backgroundImages && (
        <Slide easing="ease" ref={slideRef} {...properties}>
          {backgroundImages.map((element) => (
            <div className={eachSlide} key={element.id}>
              <div
                className={backgroundStyle}
                style={{
                  backgroundImage: `url(${element.url_pic})`,
                  height: "100%",
                }}
              >
                {/* {children} */}
              </div>
            </div>
          ))}
        </Slide>
      )}
      <div className={pageContent}>{children}</div>
      <div className={toggleButtonContainer}>
        <ToggleButton
          thumbStyle={{ borderRadius: 2, with: "40px", height: "35px" }}
          trackStyle={{ borderRadius: 2, with: "40px", height: "35px" }}
          inactiveLabel={""}
          activeLabel={""}
          value={isBackgroundVisible}
          onToggle={toggleButton}
          colors={{
            activeThumb: {
              base: "rgba(250, 250, 250, 0.702)",
            },
            inactiveThumb: {
              base: "rgba(250, 250, 250, 0.702)",
            },
            active: {
              base: "rgba(0, 0, 0, 0.638)",
            },
            inactive: {
              base: "rgba(0, 0, 0, 0.638)",
            },
          }}
        />
      </div>
      <div className={switchBackgroundIconContainer}>
        <div className={iconContainer} onClick={back}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </div>
        <div className={iconContainer} onClick={next}>
          <FontAwesomeIcon icon={faCaretRight} />
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
