import {
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaGithub,
} from 'react-icons/fa';

import './Footer.css';


function Footer() {
    /*
        Footer navigation is kept as data instead of
        manually writing every link.

        This makes the footer easier to maintain later.
    */
    const footerLinks = [
        {
            title: 'COMPANY',
            links: ['About', 'Features', 'Works', 'Career'],
        },
        {
            title: 'HELP',
            links: [
                'Customer Support',
                'Delivery Details',
                'Terms & Conditions',
                'Privacy Policy',
            ],
        },
        {
            title: 'FAQ',
            links: [
                'Account',
                'Manage Deliveries',
                'Orders',
                'Payments',
            ],
        },
        {
            title: 'RESOURCES',
            links: [
                'Free eBooks',
                'Development Tutorial',
                'How to - Blog',
                'Youtube Playlist',
            ],
        },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* =========================
                    MAIN FOOTER CONTENT
                ========================= */}

                <div className="footer-main">

                    {/* Brand information */}
                    <div className="footer-brand">

                        <h2>MORDYLILITH STORE</h2>

                        <p>
                            We have clothes that suits your style and
                            which you're proud to wear. From women to men.
                        </p>

                        {/* Social media icons */}
                        <div className="social-links">
                            <a href="#" aria-label="Twitter">
                                <FaTwitter />
                            </a>

                            <a href="#" aria-label="Facebook">
                                <FaFacebookF />
                            </a>

                            <a href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>

                            <a href="#" aria-label="GitHub">
                                <FaGithub />
                            </a>
                        </div>

                    </div>


                    {/* Footer navigation columns */}
                    <div className="footer-links">

                        {footerLinks.map((column) => (
                            <div
                                className="footer-column"
                                key={column.title}
                            >
                                <h3>{column.title}</h3>

                                {column.links.map((link) => (
                                    <a href="#" key={link}>
                                        {link}
                                    </a>
                                ))}
                            </div>
                        ))}

                    </div>

                </div>


                {/* =========================
                    FOOTER BOTTOM
                ========================= */}

                <div className="footer-bottom">

                    {/* Copyright */}
                    <p>
                        Mordylilith Store © 2000-2026, All Rights Reserved
                    </p>


                    {/* Payment methods */}
                    <div className="payment-methods">
                        <span>VISA</span>
                        <span>MC</span>
                        <span>PayPal</span>
                        <span>Pay</span>
                        <span>G Pay</span>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;
