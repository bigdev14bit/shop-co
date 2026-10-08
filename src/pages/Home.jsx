// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryStrip from '../components/CategoryStrip';
import NewArrivals from '../components/NewArrivals';
import TopSelling from '../components/TopSelling';
import AboutBrand from '../components/AboutBrand';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <CategoryStrip />
            <NewArrivals />
            <TopSelling />
            <AboutBrand />
            <Footer />
        </div>
    );
}

export default Home;
