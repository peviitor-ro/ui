import React from "react";
import { useEffect, useState, useRef } from "react";
import { Slide, Fade } from "react-slideshow-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBackgroundImages } from "utils/services";
import {
  faCaretSquareLeft,
  faCaretSquareRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./BackgroundSlider.module.scss";
import "react-slideshow-image/dist/styles.css";

const BackgroundSlider = ({ children }) => {
  const [backgroundImages, setBackgroundImages] = useState();

  useEffect(() => {
    getBackgroundImages((data) => setBackgroundImages(data));
  }, []);
  const { backgroundStyle } = styles;
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
      {backgroundImages ? (
        <Fade easing="ease" ref={slideRef} {...properties}>
          {backgroundImages.map((element) => (
            <div className="each-slide">
              <div
                className={backgroundStyle}
                style={{
                  backgroundImage: `url(${element.url_pic})`,
                  height: "100vh",
                }}
              >
                {children}
                <FontAwesomeIcon
                  icon={faCaretSquareLeft}
                  size="2x"
                  onClick={back}
                />
                <FontAwesomeIcon
                  icon={faCaretSquareRight}
                  size="2x"
                  onClick={next}
                />
              </div>
            </div>
          ))}
        </Fade>
      ) : (
        children
      )}
    </div>
  );
};

export default BackgroundSlider;
