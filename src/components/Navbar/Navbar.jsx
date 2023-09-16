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
                <a href="/">
                   <img src={Image} alt="app__logo" />
                </a>
            </div>
            <ul className="app__navbar-links">
                <li className="text-white font-semibold text-xl "><a href="#lawyers">Lawyers</a></li>
                <li className="text-white font-semibold text-xl"><a href="/dashboard">Dashboard</a></li>
                <li className="text-white font-semibold text-xl"><a href="/chat">Chat</a></li>
            </ul>
            <div className="app__navbar-login">
                <a href="#login" className="text-white font-semibold text-xl">Sign UP</a>
                <div />
                <a href="/" className="text-white font-semibold text-xl">Sign IN</a>
            </div>
            <div className="app__navbar-smallscreen">
                <div color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" color='white' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                </div>

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom ">
                        <div color="#fff" fontSize={27} onClick={() => setToggleMenu(false)} className='w-full flex justify-end pr-5 pt-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>


                        </div>
                        <ul className="app__navbar-smallscreen_links " onClick={() => setToggleMenu(false)}>
                            <li className="font-bold text-white"><a href="#lawyers">Lawyers</a></li>
                            <li className="font-bold"><a href="/dashboard">Dashboard</a></li>
                            <li className="font-bold"><a href="/chat">Chat</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
