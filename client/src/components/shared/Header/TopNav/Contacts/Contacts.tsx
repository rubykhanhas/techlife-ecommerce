import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faEnvelope, faMobileAlt} from '@fortawesome/free-solid-svg-icons';

function Contacts() {
    return (
        <div className="top-nav__contacts">
            <span>
                <FontAwesomeIcon icon={faMobileAlt}/>
                (+84)987654321
            </span>
            <span>
                <FontAwesomeIcon icon={faEnvelope}/>
                <a href="mailto:rubykhanhas@gmail.com">rubykhanhas@gmail.com</a>
            </span>
        </div>
    )
}

export default Contacts;
