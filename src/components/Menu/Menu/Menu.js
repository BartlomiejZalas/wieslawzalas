import React, { Fragment } from 'react';
import { Link } from 'react-scroll';

const offset = -120;
const duration = 250;

const Menu = () => (
    <Fragment>
        <Link activeclass="active" to="cover" spy={true} smooth={true} tabIndex={0}
            duration={duration} offset={offset} className="nav-link">
            O Mnie
        </Link>
        <Link activeclass="active" to="achievements" spy={true} smooth={true} tabIndex={0}
            duration={duration} offset={offset} className="nav-link">
            Aktywność
        </Link>
        <Link activeclass="active" to="oferta" spy={true} smooth={true} tabIndex={0}
            duration={duration} offset={offset} className="nav-link">
            Oferta
        </Link>
        <Link activeclass="active" to="cennik" spy={true} smooth={true} tabIndex={0}
            duration={duration} offset={offset} className="nav-link">
            Cennik
        </Link>
        <Link activeclass="active" to="kontakt" spy={true} smooth={true} tabIndex={0}
            duration={duration} offset={offset} className="nav-link">
            Kontakt
        </Link>
    </Fragment>
)

export default Menu;