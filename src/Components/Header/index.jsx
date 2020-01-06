import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from "@fortawesome/free-solid-svg-icons";

import './style.scss';

library.add(fab, fas);

class Header extends Component {

    state = {
        menuVisible: false,
    };

    handleMenu = e => {
        e.preventDefault();
        this.setState({menuVisible: !this.state.menuVisible})

    };

    handleLink = () => {
        this.setState({menuVisible: !this.state.menuVisible})
    };

    render() {
        console.log(this.state.menuVisible);
        return (
            <nav className="main-list">
                <button
                    onClick={this.handleMenu}
                    className={this.state.menuVisible ? 'main-burger-focus' : 'main-burger'}
                />
                {this.state.menuVisible &&
                <ul className="menu">
                    <li>
                        <a
                            onClick={this.handleLink}
                            href="http://www.linkedin.com/in/katarzynajaniszewska"
                            className='main-list-redirect'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={['fab', 'linkedin']}/>
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
                            <FontAwesomeIcon icon={['fab', 'github']}/>
                            &nbsp;GitHub
                        </a>
                    </li>
                </ul>}
            </nav>
        );
    }
}

export default Header;