import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/logo.jpeg'

const Header = () => {
    return <header className={s.header}>
        <img src={logo} />
    </header>
}

export default Header;