// src/pages/Home.jsx
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HappyCustomers from '../components/HappyCustomers';
import NewArrivals from '../components/NewArrivals';
import TopSelling from '../components/TopSelling';

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <NewArrivals />
            <TopSelling />
            <HappyCustomers />
            <Footer />
        </div>
    );
}

export default Home;
