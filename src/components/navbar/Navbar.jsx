import React, { useState } from 'react'
import './navbar.scss';
import logo from '../../assets/phuc-logo-removebg-preview.png'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='pflo__navbar'>
            <div className='pflo__navbar-logo'>
                <img src={logo} alt="logo" />
            </div>
            <ul className='pflo__navbar-links'>
                {['home', 'about', 'skills', 'portfolio', 'comment', 'contact'].map((item) => (
                    <li className='pflo__flex p-text' key={`link-$item`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className="pflo__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {['home', 'about', 'skills', 'portfolio', 'comment', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar