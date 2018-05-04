import React, { Component } from 'react';

import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

class navigationItems extends Component {

  render() {

    return (

        <div className={classes.NavigationItems}>

          <NavigationItem link="/">Home</NavigationItem>
          <NavigationItem link="/">Floor Plans</NavigationItem>
          <NavigationItem link="/">Gallery</NavigationItem>
          <NavigationItem link="/">Amenities</NavigationItem>
          <NavigationItem alt link="/">Residents</NavigationItem>
          <NavigationItem alt link="/">Apply Now</NavigationItem>
          <NavigationItem link="/">Contact</NavigationItem>
          
        </div>

    )
  }
}

export default navigationItems;
