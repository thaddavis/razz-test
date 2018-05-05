import React, { Component } from "react";
import classes from './Footer.css'
import girlImage from '../../assets/images/girl.png'

class Footer extends Component {
  render() {

    return (
      <div className={classes.footerRow}>
        <div className={classes.footerColumnCaption}>
              <div className={classes.OrangeLineTL}></div>
                Choose<br/>
                Your Lifestyle.<br/>
                Find Your<br/>
                New Home.
              <div className={classes.OrangeLineBR}></div>
        </div>
        <div className={classes.footerColumnPic}>
          <img src={girlImage} alt="woman smiling"/>
        </div>
        <div className={classes.footerColumnForm}>
          <div>
            <h1 className={classes.contactUs}>
              Contact Us
            </h1>
            <form action="#">

              <div className={classes.row}>
                <div className={classes.col50A}>
                  <input type="text" id="fname" name="firstname" placeholder="First Name"/>
                </div>
                <div className={classes.col50B}>
                  <input type="text" id="lname" name="lastname" placeholder="Last Name"/>
                </div>
              </div>

              <div className={classes.row}>
                <div className={classes.col100}>
                  <input type="email" id="email" name="email" placeholder="Email"/>
                </div>
              </div>

              <div className={classes.row}>
                <div className={classes.col100}>
                  <select id="how" name="how">
                    <option value="">HOW DID YOU HEAR ABOUT US?</option>
                    <option value="indeed">INDEED.COM</option>
                    <option value="monster">MONSTER.COM</option>
                  </select>
                </div>
              </div>

              <div className={classes.row}>
                <div className={classes.col100}>
                  <button type="submit" value="SUBMIT">
                    SUBMIT
                  </button>
                </div>
              </div>

            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
