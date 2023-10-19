import React, { useState } from 'react'
import './skills.css';
import { imagess } from '../../constants';
import { HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
const Skills = () => {
    const [imageDetails, setImageDetails] = useState({
        java: false,
        cplusplus: false,
        springboot: false,
        hibernate: false,
        html: false,
        css: false,
        reacticon: false,
        oracle: false,
        mysql: false,
        sqlserver: false,
        oop: false,
        dsa: false,
        git: false,
        postman: false,
        redis: false,
        laravel: false
    });

    const setToggle = (imageName) => {
        setImageDetails((prevState) => ({
            ...prevState,
            [imageName]: !prevState[imageName],
        }));
    };
    return (
        <div className='pflo__skills ' id='skills'>
            <h1 className='gradient__text'>SKILLS</h1>
            <p className='margin__p'>These are all my skills which I learned in college and taught myself</p>
            <div className='pflo__skill-img'>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.java} alt='skill1' onClick={() => setToggle('java')} />
                    {imageDetails.java && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.java ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('java')} />
                            <div>
                                <p>I can write Java fluently. I have made some application using java and connect database </p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.cplusplus} alt='skill1' onClick={() => setToggle('cplusplus')} />
                    {imageDetails.cplusplus && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.cplusplus ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('cplusplus')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>I can write C++ code fluently and use it in complicate algorithms</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.springboot} alt='skill1' onClick={() => setToggle('springboot')} />
                    {imageDetails.springboot && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.springboot ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('springboot')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>Can I use MVC model in Application Programming, using Spring boot for Java Backend</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.laravel} alt='skill1' onClick={() => setToggle('laravel')} />
                    {imageDetails.laravel && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.laravel ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('laravel')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>Laravel 10.x framework in php</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.redis} alt='skill1' onClick={() => setToggle('redis')} />
                    {imageDetails.redis && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.redis ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('redis')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>Redis with ditributed database</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.hibernate} alt='skill1' onClick={() => setToggle('hibernate')} />
                    {imageDetails.hibernate && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.hibernate ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('hibernate')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>I use Hibernate to connect and process Database.</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.html} alt='skill1' onClick={() => setToggle('html')} />
                    {imageDetails.html && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.html ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('html')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>I wrote some websites using HTML. You can find at Portfolio.</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.css} alt='skill1' onClick={() => setToggle('css')} />
                    {imageDetails.css && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.css ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('css')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>I designed some websites using CSS. You can find at Portfolio.</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.reacticon} alt='skill1' onClick={() => setToggle('reacticon')} />
                    {imageDetails.reacticon && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.reacticon ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('reacticon')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>I use ReactJS to create Frontend websites.</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.oracle} alt='skill1' onClick={() => setToggle('oracle')} />
                    {imageDetails.oracle && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.oracle ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('oracle')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>I can use Oracle to manage the Database. I can write SQL from basic to advanced, create Trigger, Function, Procedure, ... I know the user authorization in the database.</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.mysql} alt='skill1' onClick={() => setToggle('mysql')} />
                    {imageDetails.mysql && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.mysql ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('mysql')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>I can use MySQL to manage the Database. I can write SQL from basic to advanced, create Trigger, Function, Procedure, ... I know the user authorization in the database</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.sqlserver} alt='skill1' onClick={() => setToggle('sqlserver')} />
                    {imageDetails.sqlserver && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.sqlserver ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('sqlserver')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>I can use SQL Server to manage the Database. I can write SQL from basic to advanced, create Trigger, Function, Procedure, ...</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.git} alt='skill1' onClick={() => setToggle('git')} />
                    {imageDetails.git && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.git ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('git')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>I use Git to manage Programming projects (push code to github, clone code from github, config, ...)</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.postman} alt='skill1' onClick={() => setToggle('postman')} />
                    {imageDetails.postman && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.postman ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('postman')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>Postman help me check Code in Java Spring Boot programming.</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.oop} alt='skill1' onClick={() => setToggle('oop')} />
                    {imageDetails.oop && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.oop ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('oop')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>I can use OOP in programming, I have knowledge of Inheritance, encapsulation, polymorphism and abstraction. I can use it with C++, java.</p>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className='pflo__skill-img_details'>
                    <img src={imagess.dsa} alt='skill1' onClick={() => setToggle('dsa')} />
                    {imageDetails.dsa && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: imageDetails.dsa ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                        >
                            <HiX onClick={() => setToggle('dsa')} />
                            <div className='pflo__skill-img_details-div'>
                                <p>I know and I can code Sorting Algorithms, Tree Structures, Linked Lists, Hash Tables.</p>
                            </div>
                        </motion.div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Skills
