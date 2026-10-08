// src/components/AboutBrand.jsx
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '../data/products';
import './AboutBrand.css';

function AboutBrand() {
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi Praise! I'd like to know more about Mordylilith Store."
    )}`;

    return (
        <section className="about-brand" id="about">
            <div className="about-container">

                {/*
                    IMAGE SLOT — hidden for now.
                    To add Praise's photo later, uncomment the block below
                    and drop her image into /public/images/about.jpg
                */}
                {/* 
                <div className="about-image">
                    <img src="/images/about.jpg" alt="Praise, founder of Mordylilith Store" />
                </div> 
                */}

                <div className="about-content">
                    <p className="about-eyebrow">About the brand</p>

                    <h2 className="about-title">Meet Praise</h2>

                    <p className="about-text">
                        Mordylilith Store is a Kwara-based fashion brand born from a
                        simple belief: every woman deserves to feel confident in
                        what she wears. We hand-pick every piece — from statement
                        Ankara tops to clean everyday essentials — so you don't
                        have to dig through noise to find what fits your style.
                    </p>

                    <p className="about-text">
                        No middlemen. No long delivery wait. Just you, your style,
                        and a direct line to the person who picked it for you.
                    </p>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-cta"
                    >
                        <FaWhatsapp size={18} />
                        Chat with us on WhatsApp
                    </a>
                </div>

            </div>
        </section>
    );
}

export default AboutBrand;
