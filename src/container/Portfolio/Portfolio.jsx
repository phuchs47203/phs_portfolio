import React from 'react'
import './portfolio.css';
import images from '../../constants/images';
import { Artical } from '../../components';
const projectDATA = [
    {
        urlimg: images.pfloimg,
        date: 'Aug 04, 2023',
        title: 'Portfolio Website - In Process',
        description: 'ReactJS, CSS, Javascript',
        srccode: 'https://github.com/phuchs47203/recgpt.git',
        democode: 'https://vercel.com/dashboard',
        commen: 'http://localhost:3000/#comment'
    },
    {
        urlimg: images.gptweb,
        date: 'Jul 25, 2023',
        title: 'What GPT3 Website - Finished',
        description: 'ReactJS, CSS, Javascript',
        srccode: 'https://github.com/phuchs47203/RestAPIBasic.git',
        democode: 'https://vercel.com/dashboard',
        commen: 'http://localhost:3000/#comment'
    },
    {
        urlimg: images.restAPI,
        date: 'Jul 15, 2023',
        title: 'Practice Rest API basic - Finished',
        description: 'Practice RestAPI, Springboot, Hibernate, JAVA',
        srccode: 'https://github.com/phuchs47203/recgpt.git',
        democode: 'https://vercel.com/dashboard',
        commen: 'http://localhost:3000/#comment'
    },
    {
        urlimg: images.appThuVien,
        date: 'Jun 08, 2023',
        title: 'Library Management',
        description: '•	Project of Library Management System: JAVA, System analysis and design, Built Database, User Authorization, JDBC, MVC famework',
        srccode: 'https://github.com/phuchs47203/recgpt.git',
        democode: 'https://vercel.com/dashboard',
        commen: 'http://localhost:3000/#comment'
    },
    {
        urlimg: images.loginSpring,
        date: 'Jul 18, 2023',
        title: 'Login send email in SPring boot - In Process ususing hibernate to connect database',
        description: 'Practice Springboot, Hibernate, Send Email, Login User',
        srccode: 'https://github.com/phuchs47203/recgpt.git',
        democode: 'https://vercel.com/dashboard',
        commen: 'http://localhost:3000/#comment'
    },
    {
        urlimg: images.shoppee,
        date: 'Jul 09, 2023',
        title: 'Practice shoppe HTML, CSS',
        description: 'Practice HTML, CSS, Javascript',
        srccode: 'https://github.com/phuchs47203/recgpt.git',
        democode: 'https://vercel.com/dashboard',
        commen: 'http://localhost:3000/#comment'
    }

]
const Portfolio = () => {
    return (
        <div className='pflo__portfolio' id='portfolio'>
            <div className='pflo__portfolio-heading'>
                <h1 className='gradient__text'>PORTFOLIO</h1>
                <p>Each project represents my development</p>
            </div>
            <div className='pflo__portfolio-container'>
                {
                    projectDATA.map((item, index) =>
                        <Artical imgURL={item.urlimg} date={item.date} title={item.title}
                            description={item.description} linkcode={item.srccode} linkdemo={item.democode} linkcomment={item.commen} />
                    )
                }
            </div>
        </div>
    )
}
// { imgURL, date, title, description, linkcode, linkdemo, linkcomment }
export default Portfolio