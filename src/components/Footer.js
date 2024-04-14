import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-light">
            <div className='purple-line' style={{ "height": "20px" }}> </div>
            <div className="container mt-4 pb-4 text-center">
                <div className="row mx-auto">
                    <div className="col-md-6 mx-auto">
                        <h5 className='mb-4'>Sushant Kumar</h5>
                        <Link className='h4 mr-4 social-icon'><FaGithub /></Link>
                        <Link className='h4 mx-4 social-icon'><FaLinkedin /></Link>
                        <Link className='h4 ml-4 social-icon'><SiGooglescholar /></Link>
                        <p className='mt-2'>I embarked on my research journey at Lovely Professional University as part of the M.Tech program. I possess a deep passion for cutting-edge technologies such as AR/VR, quantum computing, networking, and security. My dedication to staying abreast of the latest advancements underscores my commitment to excellence in the field.
                        </p>
                    </div>
                </div>
            </div>
            <script src="../../public/bootstrap/js/bootstrap.bundle.min.js"></script>
        </footer>
    );
}

export default Footer;
