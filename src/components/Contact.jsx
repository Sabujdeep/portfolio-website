import React from "react";
import {BsFacebook, BsTwitter, BsFillPhoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';

const Contacts = () => {
    return (
        <section className="contacts">
            <h2 className="horizontal-line">
                Contact Sabujdeep
            </h2>
            <p>Get in touch with Sabujdeep</p>
            <div id="social-accounts">
                <a href="" target="blank">
                    <BsFacebook className="socials"/>
                </a>
                <a href="" target="blank">
                    <BsTwitter className="socials"/>
                </a>
                <a href="" target="blank">
                    <MdEmail className="socials"/>
                </a>
                <a href="" target="blank">
                    <BsFillPhoneFill className="socials"/>
                </a>
            </div>
        </section>
    )
}

export default Contacts