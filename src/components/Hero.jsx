// src/components/Hero.jsx
import './Hero.css';
import starIcon from '../assets/star.svg';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">

                {/* LEFT: text, CTA, stats */}
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

                    <button className="shop-btn">Shop Now</button>

                    <div className="stats">
                        <div className="stat">
                            <h3>200+</h3>
                            <p>International Brands</p>
                        </div>
                        <div className="stat">
                            <h3>2,000+</h3>
                            <p>High-Quality Products</p>
                        </div>
                        <div className="stat">
                            <h3>30,000+</h3>
                            <p>Happy Customers</p>
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
                        src="/src/assets/trendy-fashionable-couple-posing.jpg"
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
