import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar-title">
                <h1>Quang Than</h1>
            </div>
            <div className="navbar-link">
                <div className="menu-link">
                    <Link activeClass="active" spy={true} to="home" smooth={true} duration={500}>Home</Link>
                </div>
                <div className="menu-link">
                    <Link activeClass="active" spy={true} to="about" smooth={true} duration={500}>About</Link>
                </div>
                <div className="menu-link">
                    <Link activeClass="active" spy={true} to="project" smooth={true} duration={500}>Project</Link>
                </div>
                <div className="menu-link">
                    <Link activeClass="active" spy={true} to="work" smooth={true} duration={500}>Work</Link>
                </div>
            </div>
            <div className="navbar-contact" onClick={() => {document.getElementById("contact").scrollIntoView({behavior: 'smooth'})}}>
                {/* <div className="navbar-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </div> */}
                <div className="navbar-content">Contact Me</div>
                <div className="navbar-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
            </div>

            {/* mobile */}
            <div className="navbar-menu">
                <FontAwesomeIcon className="navbar-mobile-icon" icon={toggle ? faXmark : faBarsStaggered} onClick={() => setToggle(!toggle)} />
            </div>
            <div className={toggle ? "navbar-box" : "close-navbar-box"}>
                <ul>
                    <li>
                        <Link activeClass="active" spy={true} to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link activeClass="active" spy={true} to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link activeClass="active" spy={true} to="project" smooth={true} duration={500}>Project</Link>
                    </li>
                    <li>
                        <Link activeClass="active" spy={true} to="work" smooth={true} duration={500}>Work</Link>
                    </li>
                    <li>
                        <Link activeClass="active" spy={true} to="contact" smooth={true} duration={500} >Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;