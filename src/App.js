import React, { Component } from 'react';

import backgroundImage from './assets/images/2000x1000.png'
import downArrowImage from './assets/images/ArrowDown.png'

import Layout from './components/Layout/Layout.jsx';
import SimpleSlider from './components/Carousel/Carousel.jsx';
import classes from './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <div className={classes.row}>
            {
              // <div>
              //   <img className={classes.timeline_feed_image} src={backgroundImage} alt=""/>
              //   <div>
              //     <p>Lorem Ipsum is simply dummy text of the printing.</p>
              //   </div>
              // </div>
            }
            <div className={classes.enclosure}>
              <div className={classes.bannerImage} style ={ {
                  backgroundImage: "url('" + backgroundImage + "')" ,
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 60%, 75% 100%, 0% 100%)"
                } }>
                <div className={classes.content}>
                  <div className={classes.OrangeLineTL}></div>
                  <h1>
                    Lorem Ipsum <br/>
                    Dolor Sit Ament
                  </h1>
                  <div className={classes.OrangeLineBR}></div>

                </div>
              </div>
              <div className={classes.arrowDown}>
                <img src={downArrowImage} alt="Down Arrow"/>
              </div>
            </div>
          </div>

          <div className={classes.row}>
            <h2>
              Floor Plans
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
            </p>
          </div>

          <div className={classes.row}>
            <SimpleSlider/>
          </div>

        </Layout>
      </div>
    );
  }
}

export default App;
