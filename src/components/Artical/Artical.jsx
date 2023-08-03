import React from 'react'
import './artical.css';
import imggithub from '../../assets/github2png.png';
import imgdemo from '../../assets/demoedit.png';
import imgcomment from '../../assets/comment.png';
const Artical = ({ imgURL, date, title, description, linkcode, linkdemo, linkcomment }) => {
    return (
        <div className='pflo__pflo-article'>
            <div className='pflo__pflo-article-image'>
                <img src={imgURL} alt="imgPorject" />
            </div>
            <div className='pflo__pflo-article-content'>
                <div>
                    <h3>{date}</h3>
                    <h2>{title}</h2>
                </div>
                <p>{description}</p>
                <div className='pflo__pflo-article-content-links'>
                    <a href={linkcode}>
                        <img src={imggithub} alt="logo github" />
                    </a>
                    <a href={linkdemo}>
                        <img src={imgdemo} alt="logo github" />
                    </a>
                    <a href={linkcomment}>
                        <img src={imgcomment} alt="logo github" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Artical