import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/img/pagelogo.png';
import style from '../assets/styles/Header.module.scss';

const Header = ({ history }) => {
  const id = history.location.pathname;

  return (
    <header className={
      id === '/' ? style.container : `${style.container} ${style.containerNarrow} `
    }
    >
      <img className={style.logo} src={logo} alt="Food 4 you." />
      <nav>
        <ul className={style.list}>
          <Link to="/">
            <li>Home</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  history: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default withRouter(Header);
