import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Newsletter.scss";

function Newsletter() {
    return (
        <div className="newsletter">
            <div className="newsletter__decorate">
                <div className="newsletter__decorate__icon">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <div className="newsletter__decorate__text">
                    <h6>Sign up for newsletter</h6>
                    <p>receive coupon 20% sales off for first shopping</p>
                </div>
            </div>
            <div className="newsletter__form">
                <form>
                    <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                    />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default Newsletter;
