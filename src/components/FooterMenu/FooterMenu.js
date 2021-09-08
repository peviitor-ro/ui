import Hamburger from 'hamburger-react';
import React, { useState, useEffect } from 'react';
import styles from 'components/FooterMenu/footerMenu.module.scss';
import { useSelector } from 'react-redux';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import useWindowDimensions from 'utils/customsHooks/useWindowsDimensions';

const FooterMenu = () => {
    const { isBurger } = useSelector(state => state)
    const { footerMenuContainer } = styles;
    const { height, width } = useWindowDimensions();
    const footerStyle = {
        display: (isBurger || width > 768) ? 'block' : 'none',

    }

    return (
        <div className={footerMenuContainer} style={footerStyle}>
            <ul>
                <li>Despre noi</li>
                <li>Ajutor</li>
                <li>Feedback</li>
            </ul>
        </div>
    )
}

export default FooterMenu;