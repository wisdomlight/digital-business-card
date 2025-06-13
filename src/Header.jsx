import React from 'react'

import {  FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Header(){
    return(
        <>
            <div className='img-container'>
                <img className='header-img' src="https://modernetiquetteinc.com/wp-content/uploads/sites/22/2018/05/professional-image.jpg" alt="Personal Image" />
            </div>
            <div className='header-text-container'>
                <h1 className='header-name'>John Dough</h1>
                <h2 className='header-job'>Frontend Developer</h2>
                <a className="header-website" href="www.google.com">johndoug.com</a>
                <div className='header-links'>
                    <a className='link-button header-email' href='mailto:johndough@mail.com' aria-label='Email'><FontAwesomeIcon icon={faEnvelope} />  Email</a>
                    <a className='link-button header-linkedin' href="https://linkedin.com" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'><FontAwesomeIcon icon={faLinkedin} />   LinkedIn</a>
                </div>
            </div>
        </>
    )
}

export default  Header