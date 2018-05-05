import React from 'react';

import classes from './NavigationItem.css';

const navigationItem = ( props ) => {

    let link = (
      <li className={classes.NavigationItem}>
        <a href={props.link} className={props.active ? classes.active : null}>
          {props.children}
        </a>
      </li>
    )

    if (props.alt) {
      link = (
        <li className={[classes.NavigationItem, classes.AltNavigationItem].join(' ')}>
          <a href={props.link} className={props.active ? classes.active : null}>
            {props.children}
          </a>
        </li>
      )
    }

    if (props.home) {
      link = (
        <li className={[classes.NavigationItem, classes.HomeNavigationItem].join(' ')}>
          <a href={props.link} className={props.active ? classes.active : null}>
            {props.children}
          </a>
        </li>
      )
    }

    return link

}

export default navigationItem;
