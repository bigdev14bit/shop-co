// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { WHATSAPP_NUMBER, BRAND_NAME } from '../data/products';
import './Footer.css';

function Footer() {
    const year = new Date().getFullYear();

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi Praise! I'd like to know more about Mordylilith Store."
    )}`;

    return (
        <footer className="footer" id="contact">
            <div className="footer-container">

                <div className="footer-main">

                    {/* Brand */}
                    <div className="footer-brand">
                        <h2>{BRAND_NAME}</h2>
                        <p>
                            Hand-picked fashion for women who want to feel
                            confident in what they wear. Kwara-based, WhatsApp-first.
                        </p>

                        <div className="social-links">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                href="https://instagram.com/mordy.lilith"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="footer-links">

                        <div className="footer-column">
                            <h3>SHOP</h3>
                            <Link to="/shop">All Products</Link>
                            <Link to="/cart">Your Cart</Link>
                        </div>

                        <div className="footer-column">
                            <h3>ABOUT</h3>
                            <a href="#about">Our Story</a>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                Chat with us
                            </a>
                        </div>

                        <div className="footer-column">
                            <h3>CONTACT</h3>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                WhatsApp
                            </a>
                            <a href="https://instagram.com/mordy.lilith" target="_blank" rel="noopener noreferrer">
                                @mordy.lilith
                            </a>
                        </div>

                    </div>

                </div>

                <div className="footer-bottom">
                    <p>
                        {BRAND_NAME} © {year}, All Rights Reserved
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
