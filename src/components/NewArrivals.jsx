// src/components/NewArrivals.jsx
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import './NewArrivals.css';

function NewArrivals() {
    const navigate = useNavigate();

    // First 8 products = "new arrivals"
    const items = products.slice(0, 8);

    return (
        <section className="new-arrivals">
            <div className="container">
                <h2 className="section-title">NEW ARRIVALS</h2>

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

export default NewArrivals;
