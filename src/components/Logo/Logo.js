import React from 'react';
import styles from './logo.module.scss';

const Logo = () => {
    const { logo } = styles;

    return (
        <p className={logo}>pe viitor</p>
    )
}

export default Logo;