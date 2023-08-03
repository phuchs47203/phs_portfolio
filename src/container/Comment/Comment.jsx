import React from 'react'
import './comment.css';

const Comment = () => {
    return (
        <div className='pflo__comment' id='comment'>
            <div className='pflo__comment-heading'>
                <h1 className='gradient__text'>Enter your comment right here !</h1>
            </div>
            <div className='pflo__comment-content'>
                <input type="email" placeholder="Your email address" id='email_reader' />
                <input type="text" placeholder='Your name' id='name_reader' />
                <input type="text" placeholder='My project name' id='project_name' />
                {/* <input type="text" placeholder='Comment' id='comments' /> */}
                <textarea name="comemnts" id="comments" cols="30" rows="4" placeholder='Comments'></textarea>
            </div>
            <div className='pflo__comment-btn'>
                <button type='button'>Send</button>
            </div>
        </div>
    )
}

export default Comment