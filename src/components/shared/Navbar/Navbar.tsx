/* global JSX*/

import React from 'react';

import styles from './Navbar.module.scss';
import classnames from 'classnames';
const Navbar = ({isHomePage}) => {
  return (
    <button className={classnames(styles['navbar-toggler'], {[styles['home-navbar-toggler']]: isHomePage})} aria-label='Toggle navigation'>
      <span className={styles['navbar-toggler-icon']}></span>
    </button>
  );
};
export default Navbar;
