import Hamburger from 'hamburger-react';
import React, { useState, useEffect } from 'react';
import styles from 'components/FooterMenu/footerMenu.module.scss';
import { useSelector } from 'react-redux';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import useWindowDimensions from 'utils/customsHooks/useWindowsDimensions';

const FooterMenu = () => {
    const { isBurger, switchBackground } = useSelector(state => state)
    const { footerMenuContainer, menuTextOff, menuTextOn } = styles;
    const { height, width } = useWindowDimensions();
    const footerStyle = {
        display: (isBurger || width > 768) ? 'block' : 'none',

    }

    return (
        <div className={footerMenuContainer} style={footerStyle}>
            <ul>
                <li  className={!switchBackground ? menuTextOff : menuTextOn } >Despre noi</li>
                <li  className={!switchBackground ? menuTextOff : menuTextOn }>Ajutor</li>
                <li  className={!switchBackground ? menuTextOff : menuTextOn }>Feedback</li>
            </ul>
        </div>
    )
}

export default FooterMenu;