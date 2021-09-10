import React from "react";
import { useEffect, useState, useRef } from "react";
import { Slide, Fade } from "react-slideshow-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBackgroundImages } from "utils/services";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import ToggleButton from "react-toggle-button";
import styles from "./BackgroundSlider.module.scss";
import "react-slideshow-image/dist/styles.css";

const BackgroundSlider = ({ children }) => {
  const [backgroundImages, setBackgroundImages] = useState();
  const [isBackgroundVisible, setBackgroundVisibility] = useState(true);

  useEffect(() => {
    getBackgroundImages((data) => setBackgroundImages(data));
  }, []);
  const {
    backgroundStyle,
    switchBackgroundIcon,
    switchBackgroundIconContainer,
    pageContent,
    iconContainer,
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
    <div>
      {isBackgroundVisible && backgroundImages && (
        <Slide easing="ease" ref={slideRef} {...properties}>
          {backgroundImages.map((element) => (
            <div className="each-slide" key={element.id}>
              <div
                className={backgroundStyle}
                style={{
                  backgroundImage: `url(${element.url_pic})`,
                  height: "100vh",
                }}
              >
                {/* {children} */}
              </div>
            </div>
          ))}
        </Slide>
      )}
      <div className={pageContent}>{children}</div>
      {/* <ToggleButton
        inactiveLabel={'x'}
        activeLabel={'y'}
        value={isBackgroundVisible}
        onToggle={(value) => {
          setBackgroundVisibility(!value);
        }}
      /> */}
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
