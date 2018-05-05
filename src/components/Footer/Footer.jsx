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
            <form action="#">

              <div class="row">
                <div class="col-25">
                  <label for="fname">First Name</label>
                </div>
                <div class="col-75">
                  <input type="text" id="fname" name="firstname" placeholder="First Name"/>
                </div>
              </div>

              <div class="row">
                <div class="col-25">
                  <label for="lname">Last Name</label>
                </div>
                <div class="col-75">
                  <input type="text" id="lname" name="lastname" placeholder="Last Name"/>
                </div>
              </div>

              <div class="row">
                <div class="col-25">
                  <label for="lname">Email</label>
                </div>
                <div class="col-75">
                  <input type="email" id="email" name="email" placeholder="Email"/>
                </div>
              </div>

              <div class="row">
                <div class="col-25">
                  <label for="how">How Did You Hear About Us?</label>
                </div>
                <div class="col-75">
                  <select id="how" name="how">
                    <option value="">How Did You Hear About Us?</option>
                    <option value="indeed">Indeed.com</option>
                    <option value="monster">Monster.com</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <input type="submit" value="Submit" />
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
