
// import {  FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'; // Notice the camelCase for the icon names

function Footer(){
    return (
        <>
            <footer className='footer'>
                <a className="icons" href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareTwitter} size="2x" />
                    </a>
                <a className="icons" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
                    </a>
                <a className="icons" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
                    </a>
                <a className="icons" href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareGithub} size="2x" />
                    </a>
            </footer> 
        
        
        </>
    )
}
export default Footer