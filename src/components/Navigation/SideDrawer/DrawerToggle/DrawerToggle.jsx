import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div className={classes.DrawerToggleTop}></div>
        <div className={classes.DrawerToggleMiddle}></div>
        <div className={classes.DrawerToggleBottom}></div>
    </div>
);

export default drawerToggle;
