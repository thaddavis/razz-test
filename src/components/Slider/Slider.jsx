import React, {Component} from "react";
import Slider from "react-slick";

import classes from './Slider.css'
import leftArrow from '../../assets/images/leftarrowblack.png';
import rightArrow from '../../assets/images/rightarrowblack0.png';

import './Slider.css';

import testImage from '../../assets/images/A1.png';

class LeftNavButton extends React.Component {
  render() {
    const { top, currentSlide, slideCount, ...rest } = this.props
    return <div onClick={this.props.onClick} className='fa fa-3x fa-angle-left'
      style={{
        zIndex: 10,
        position: 'absolute',
        // width: '3vh',
        // height: '3vh',
        left: 0,
        top: 0,
        // background: 'blue',
        transform: 'translate(-50%, 50%)'
      }}>
      </div>;
  }
}

class RightNavButton extends React.Component {
  render() {
    const { top, currentSlide, slideCount, ...rest } = this.props
    return <div onClick={this.props.onClick} className='fa fa-3x fa-angle-right'
      style={{
        zIndex: 10,
        position: 'absolute',
        // width: '3vh',
        // height: '3vh',
        right: 0,
        top: 0,
        // background: 'blue',
        transform: 'translate(50%, 50%)'
      }}>
      </div>;
  }
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      customPaging: function(i) {
        return (
          <div id="circle"></div>
        );
      },
      infinite: true,
      prevArrow: <LeftNavButton/>,
      nextArrow: <RightNavButton/>,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{
          margin: '50px 30px',
          padding: '10px 10px'
        }}>
        <Slider {...settings}>
          <div>
            <img className={classes.Image} src={testImage} alt=""/>
          </div>
          <div>
            <img className={classes.Image} src={testImage} alt=""/>
          </div>
          <div>
            <img className={classes.Image} src={testImage} alt=""/>
          </div>
          <div>
            <img className={classes.Image} src={testImage} alt=""/>
          </div>
          <div>
            <img className={classes.Image} src={testImage} alt=""/>
          </div>
          <div>
            <img className={classes.Image} src={testImage} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}
