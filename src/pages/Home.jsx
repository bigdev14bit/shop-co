import BrowseByStyle from '../components/BrowseByStyle';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import HappyCustomers from '../components/HappyCustomers';
import BrandsBar from '../components/BrandsBar';
import NewArrivals from '../components/NewArrivals';
import TopSelling from '../components/TopSelling';

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <BrandsBar />
            <NewArrivals />
            <TopSelling />
            <BrowseByStyle />
            <HappyCustomers />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Home;
