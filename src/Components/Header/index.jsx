import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas} from "@fortawesome/free-solid-svg-icons";

import './style.scss';

library.add(fab, fas);

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
                            <a
                                onClick={this.handleLink}
                                href="http://www.linkedin.com/in/katarzynajaniszewska"
                                className='main-list-redirect'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                &nbsp;LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={this.handleLink}
                                href="http://www.github.com/kappa3-3"
                                className='main-list-redirect'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={['fab', 'github']} />
                                &nbsp;GitHub
                            </a>
                        </li>
                    </ul>
                </nav>
        );
    }
}

export default Header;