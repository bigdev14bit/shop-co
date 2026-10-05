import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import './TopSelling.css';

function TopSelling() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTopSelling = async () => {
            try {
                setLoading(true);

                // Using DummyJSON but skipping the first 8 so we get different products
                const response = await fetch('https://dummyjson.com/products?limit=4&skip=8');
                const data = await response.json();
                setProducts(data.products);
            } catch (err) {
                setError('Failed to load top selling products');
            } finally {
                setLoading(false);
            }
        };

        fetchTopSelling();
    }, []);

    return (
        <section className="top-selling">
            <div className="container">
                <h2 className="section-title">TOP SELLING</h2>

                {loading && <p className="loading">Loading products...</p>}
                {error && <p className="error">{error}</p>}

                <div className="products-grid">
                    {products.map((product) => (
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
