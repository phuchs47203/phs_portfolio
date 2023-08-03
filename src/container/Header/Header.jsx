import React from 'react'
import './header.css';
import imglinkedin from '../../assets/linkedin.png';
import imggithub from '../../assets/github2png.png'
import imglogo from '../../assets/my_picture2.jpg'
const Header = () => {
    return (
        <div className='pflo__header section__padding' id='home'>
            <div className='pflo__header-content'>
                <h1 className='gradient__text'>Hi there ! My name is Phuc Tran Hoang</h1>
                <p>I'm a fresher looking for a job as a Data Analyst or a JAVA Developer</p>
                <div className='pflo__header-content-links'>
                    <a href="https://www.linkedin.com/in/tran-hoang-phuc-685486245/">
                        <img src={imglinkedin} alt="" />
                    </a>
                    <a href="https://github.com/phuchs47203">
                        <img src={imggithub} alt="" />
                    </a>
                </div>
            </div>
            <div className='pflo__header-logo'>
                <img src={imglogo} alt="" />
            </div>
        </div>
    )
}

export default Header