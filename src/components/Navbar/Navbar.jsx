import React from 'react';
import Image from './legallogo.png';
// import images from '../../constants/images';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={Image} alt="app__logo" />
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#dashboard">Dashboard</a></li>
                <li className="p__opensans"><a href="#chat">Chat</a></li>
            </ul>
            <div className="app__navbar-login">
                <a href="#login" className="p__opensans">Sign UP</a>
                <div />
                <a href="/" className="p__opensans">Sign IN</a>
            </div>
            <div className="app__navbar-smallscreen">
                {/* <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} /> */}
                <div color="#fff" fontSize={27} onClick={()=>setToggleMenu(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom ">
                        {/* <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} /> */}
                        <ul className="app__navbar-smallscreen_links">
                        <li className="p__opensans"><a href="#about">About</a></li>
                        <li className="p__opensans"><a href="#dashboard">Dashboard</a></li>
                        <li className="p__opensans"><a href="#chat">Chat</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
