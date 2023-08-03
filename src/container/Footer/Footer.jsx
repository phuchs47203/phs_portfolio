import React from 'react'
import './footer.css';
import { imagess } from '../../constants/index'
const Footer = () => {
    return (
        <div className='pflo__footer' id='contact'>
            <div className='pflo__footer-heading'>
                <h1 className='gradient__text'>CONTACT ME</h1>
            </div>
            <div className='pflo__footer-content'>
                <div className='pflo__footer-content-groupA'>
                    <div className='pflo__footer-content_link'>
                        <img src={imagess.email} alt="" />
                        <p>21522479@mg.uit.edu.vn</p>
                    </div>
                    <div className='pflo__footer-content_link'>
                        <img src={imagess.email} alt="" />
                        <p>tranhoangphuc0407@gmail.com</p>
                    </div>
                    <div className='pflo__footer-content_link'>
                        <img src={imagess.phone} alt="" />
                        <p>0344 855 827</p>
                    </div>
                    <div className='pflo__footer-content_link'>
                        <img src={imagess.address} alt="" style={{ marginLeft: '5px' }} />
                        <p style={{ marginLeft: '3px' }}>Linh Trung Ward, Thu Duc District, Ho Chi Minh City</p>
                    </div>
                </div>
                <div className='pflo__footer-content-groupB'>
                    <a href="https://www.linkedin.com/in/tran-hoang-phuc-685486245/">
                        <img src={imagess.linkedin} alt="" />
                    </a>

                    <a href="https://github.com/phuchs47203">
                        <img src={imagess.github} alt="" />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Footer