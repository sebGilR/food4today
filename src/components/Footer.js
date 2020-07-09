import React from 'react';
import style from '../assets/styles/Footer.module.scss';

const Footer = () => (
  <footer className={style.container}>
    <ul className={style.list}>
      <li key="copy">
        Developed by:
        <a href="https://sebgil.me" target="_blank" rel="noopener noreferrer"> Sebastian Gil</a>
      </li>
      <li key="repo">
        <a href="https://github.com/sebGilR" target="_blank" rel="noopener noreferrer">GitHub</a>
      </li>
    </ul>
  </footer>
);

export default Footer;
