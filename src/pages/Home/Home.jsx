import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "./Home.css";
import photo1 from "../../assets/jpegs/laptop.jpeg";
import photo2 from "../../assets/jpegs/book.jpeg";
import photo3 from "../../assets/jpegs/html-css-javascript.jpeg";

export const Home = () => {
  const { t } = useTranslation();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="homeContainer">
      <div className="text-container1">
        <div
          className="contentText1"
          dangerouslySetInnerHTML={{ __html: t("contentText") }}
        />
        <div className="slider-box">
          <div className="slider-container">
            <Slider {...sliderSettings}>
              <div>
                <img src={photo1} alt="Slide 1" className="my-image" />
              </div>
              <div>
                <img src={photo2} alt="Slide 2" className="my-image" />
              </div>
              <div>
                <img src={photo3} alt="Slide 3" className="my-image" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
