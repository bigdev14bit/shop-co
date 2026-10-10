// src/components/Hero.jsx
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import starIcon from '../assets/star.svg';

function Hero() {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero-container">

                {/* LEFT: text, CTA, trust taglines */}
                <div className="hero-content">
                    <h1>
                        FIND CLOTHES <br />
                        THAT MATCHES <br />
                        YOUR STYLE
                    </h1>

                    <p className="hero-text">
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of style.
                    </p>

                    <button
                        className="shop-btn"
                        onClick={() => navigate('/shop')}
                    >
                        Shop Now
                    </button>

                    <div className="stats">
                        <div className="stat">
                            <h3>Fast</h3>
                            <p>WhatsApp ordering, direct to the seller</p>
                        </div>
                        <div className="stat">
                            <h3>Quality</h3>
                            <p>Hand-picked fabrics and finishes</p>
                        </div>
                        <div className="stat">
                            <h3>Reliable</h3>
                            <p>Lagos-based, real people, real replies</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT: image + stars */}
                <div className="hero-image-wrapper">
                    <img
                        src={starIcon}
                        alt=""
                        className="decorative-star star-small"
                    />
                    <img
                        src="/trendy-fashionable-couple-posing.jpg"
                        alt="Fashionable couple posing"
                        className="hero-img"
                    />
                    <img
                        src={starIcon}
                        alt=""
                        className="decorative-star star-large"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;
