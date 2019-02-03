import React from 'react';
import { Link } from 'react-scroll';
import Menu from '../Menu/Menu';
import './NavBar.css';

export default class NavBar extends React.Component {

    state = {
        mobileMenuOpen: false
    }

    toggleMobileMenu = () => {
        this.setState({mobileMenuOpen: !this.state.mobileMenuOpen})
    }

    render() {
        return (
            <nav>
                <div className="fixed-top">
                    <div className="container">
                        <div>
                            <div className="nav-container">
                                <Link to="cover" smooth={true} duration={250} offset={-120}>
                                    <div className="logo">
                                        <div className="main">Wiesław Zalas</div>
                                        <div className="minor">Coaching Doradztwo Szkolenia</div>
                                    </div>
                                </Link>
                                <button className="d-block d-md-none btn btn-icon" onClick={this.toggleMobileMenu}>
                                    <i className="fa fa-bars fa-lg"></i>
                                </button>
                                <div className="d-none d-md-flex nav-links">
                                    <Menu />
                                </div>
                            </div>
                            <div className={ 'mobile-menu mobile-menu-transform ' + (this.state.mobileMenuOpen ? 'mobile-menu-transform-active' : '')}>
                                <Menu />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}