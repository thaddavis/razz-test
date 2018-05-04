import React from "react";
import Slider from "react-slick";
import classes from './Carousel.css'

import A1 from '../../assets/images/A1.png'
import B1 from '../../assets/images/B1.png'
import C3 from '../../assets/images/C3.png'
import S1 from '../../assets/images/S1.png'

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      focusOnSelect: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <Slider className={classes.Slider} {...settings}>
        <div>
          <img src={A1} alt="A1" />
        </div>
        <div>
          <img src={B1} alt="B1" />
        </div>
        <div>
          <img src={C3} alt="C3" />
        </div>
        <div>
          <img src={S1} alt="S1" />
        </div>
        <div>
          <img src={A1} alt="A1" />
        </div>
        <div>
          <img src={B1} alt="B1" />
        </div>
        <div>
          <img src={C3} alt="C3" />
        </div>
        <div>
          <img src={S1} alt="S1" />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
