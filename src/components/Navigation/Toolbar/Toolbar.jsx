import React from 'react';

import classes from './Toolbar.css';
import RazzLogo from '../../../assets/images/RazzLogo.png';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={classes.Header}>

      <nav className={classes.Nav}>

        <div className={classes.NavLeft}>

          <ul>
            <li>
              <DrawerToggle className={classes.DrawerToggle} clicked={props.drawerToggleClicked} />
            </li>
            <li className={classes.NavLeftMenuText}><a href="#residents">Menu</a></li>
            <li className={classes.NavLeftMenuCallText}><a href="#apply-not">Call 888.555.5555</a></li>
          </ul>

        </div>

        <div className={classes.LogoContainer}>
          <div className={classes.Logo}>
            <img src={RazzLogo} alt="Logo"/>
          </div>
          {
          // <div className={classes.LogoText}>
          //   LOGO
          // </div>
          }
        </div>

        <div className={classes.NavRight}>
          <ul>
            <li><a href="#residents">Residents</a></li>
            <li><a href="#apply-not">Apply Now</a></li>
          </ul>


          {
          // <div className={classes.NavRightItem}>Residents</div>
          // <div className={classes.NavRightItem}>Apply Now</div>
          }
        </div>

      </nav>


      {
        // <DrawerToggle className={classes.DrawerToggle} clicked={props.drawerToggleClicked} />
        //
        // <div className={classes.HeaderLeft}>
        //   <a href="#menu">Menu</a>
        //   <a href="#call">Call 888.555.5555</a>
        // </div>
        //
        // <div className={classes.Logo}>
        //   LOGO
        // </div>
        //
        // <div className={classes.HeaderRight}>
        //   <a href="#apply-now">Apply Now</a>
        //   <a href="#residents">Residents</a>
        // </div>
      }

    </header>
);

export default toolbar;
