import React, {Component} from "react";
import './style.scss';


import {
    NavLink
} from "react-router-dom";


class Header extends Component {


    handleMenu = (e) => {
        e.preventDefault();
        const toggleMenu = document.getElementById('menu-toggle');
        toggleMenu.classList.contains('hideElement')
            ? toggleMenu.classList.replace('hideElement', 'menu')
            : toggleMenu.classList.replace('menu', 'hideElement');

        const toggleBurger = document.getElementById('main-burger');
        toggleBurger.classList.contains('main-burger')
            ? toggleBurger.classList.replace('main-burger', 'main-burger-focus')
            : toggleBurger.classList.replace('main-burger-focus', 'main-burger')
    };

    handleLink = () => {
        const hideMenu = document.getElementById('menu-toggle');
        hideMenu.classList.replace('menu', 'hideElement')
    };

    render() {

        return (
                <nav className="main-list">
                    <button onClick={this.handleMenu} className="main-burger" id="main-burger" />

                    <ul className="hideElement" id="menu-toggle">
                        <li>
                            <NavLink onClick={this.handleLink} activeClass="active-link" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={this.handleLink} activeClass="active-link" to="/cv">Cv</NavLink>
                        </li>
                    </ul>
                </nav>
        );
    }
}

export default Header;