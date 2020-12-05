import Logo from '@/components/view/Logo/Logo'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Signatures.scss';

function Signatures() {
    return (
        <div className="signatures">
            <Logo/>
            <h3>Got question? Call us 24/7 </h3>
            <h4 className="signatures__number">(+84) 987654321</h4>
            <p>17 Princess Road, District 99</p>
            <p>Ho Chi Minh city, Vietnam</p>
            <ul>
                <li><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faYoutube}/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
            </ul>
        </div>
    )
}

export default Signatures
