import React, { useState } from 'react';
import './Navbar.css';
import * as RiIcons from 'react-icons/ri';



const Navbar = () => {

    const [click, setClick] = useState(false);    //state for hamburger menu
    const handleClick = () => setClick(!click);    //handles click for burger change
    const closeMobMenu = () => setClick(false);   // handles menu bar appear

    const [navbar, setNavbar] = useState(false); //navbar color change on scroll

    const activeNavbar = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', activeNavbar);
    
    let iconStyle = {
        color: '#fff',
        fontSize: '1rem'
    }

    return(
        <>   
        <nav className={navbar ? 'navbar scrolled' : 'navbar'}>
            <a href="#"><RiIcons.RiVuejsLine className='logo' /></a>
            <div className='menu' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-stream'} />
            </div>
            <div className={click ? 'focus-navbar focus' : 'focus-navbar'} onClick={closeMobMenu}>
            </div>
            <div className={click ? 'navbar-nav active' : 'navbar-nav'}>
                <ul>
                    <li className="nav-item" onClick={closeMobMenu}>
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-item" onClick={closeMobMenu}>
                        <a href="#">About</a>
                    </li>
                    <li className="nav-item" onClick={closeMobMenu}>
                        <a href="#">Work</a>
                    </li>
                    <li className="nav-item" onClick={closeMobMenu}>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <ul className='socials'>
                    <li className='nav-social'>
                        <a href="https://www.facebook.com/val.bonite/" target='_blank' style={iconStyle}><i className='fab fa-facebook-f'></i></a>
                    </li>
                    <li className='nav-social'>
                        <a href="https://twitter.com/valbonite" target='_blank' style={iconStyle}><i className='fab fa-twitter'></i></a>
                    </li>
                    <li className='nav-social'>
                        <a href="https://www.linkedin.com/in/valbonite/" target='_blank' style={iconStyle}><i className='fab fa-linkedin-in'></i></a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}


export default Navbar;


