// src/components/TopSelling.jsx
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import './TopSelling.css';

function TopSelling() {
    const navigate = useNavigate();

    // Last 4 products = "top selling" (placeholder logic)
    const items = products.slice(-4);

    return (
        <section className="top-selling">
            <div className="container">
                <h2 className="section-title">TOP SELLING</h2>

                <div className="products-grid">
                    {items.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="view-all">
                    <button
                        className="view-all-btn"
                        onClick={() => navigate('/shop')}
                    >
                        View All
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TopSelling;
