import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
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
        </div>
    );
}

export default Home;
