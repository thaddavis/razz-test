import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const topNavigation = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/">Floor Plans</NavigationItem>
        <NavigationItem link="/">Gallery</NavigationItem>
        <NavigationItem link="/">Amenities</NavigationItem>
        <NavigationItem link="/">Contact</NavigationItem>
    </ul>
);

export default topNavigation;
