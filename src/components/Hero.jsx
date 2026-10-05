import './Hero.css';
import starIcon from '../assets/star.svg';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left Content */}
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

                    {/* Stats */}
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

                {/* Right Image Side */}
                <div className="hero-image-wrapper">
                    {/* Small Star on the Left */}
                    <img src={starIcon} alt="" className="decorative-star star-small"/>

                    {/* Main Cutout Models */}
                    <img
                        src="/src/assets/trendy-fashionable-couple-posing.jpg"
                        alt="Fashionable couple posing"
                        className="hero-img"
                    />

                    {/* Large Star on the top right */}
                    <img src={starIcon} alt="" className="decorative-star star-large" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
