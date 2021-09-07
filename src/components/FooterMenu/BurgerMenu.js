import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsBurger } from 'redux/actions/burger';
import useWindowDimensions from 'utils/customsHooks/useWindowsDimensions';

const BurgerMenu = () => {

    const { width } = useWindowDimensions();
    const dispatch = useDispatch();
    const toggleBurger = () => {
        dispatch(setIsBurger());

    }
    const burgerStyle = {
        display: width > 768 ? 'none' : 'block'
    }
    return (
        <div style={burgerStyle}>
            <Hamburger onToggle={toggleBurger} />
        </div>
    )
}

export default BurgerMenu;