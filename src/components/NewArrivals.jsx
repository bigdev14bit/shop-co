import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProducts, setLoading, setError } from '../store/productsSlice';
import ProductCard from './ProductCard';
import './NewArrivals.css';

function NewArrivals() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                dispatch(setLoading(true));
                const response = await fetch('https://dummyjson.com/products?limit=8');
                const data = await response.json();
                dispatch(setProducts(data.products));
            } catch (err) {
                dispatch(setError('Failed to load products'));
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchProducts();
    }, [dispatch]);

    return (
        <section className="new-arrivals">
            <div className="container">
                <h2 className="section-title">NEW ARRIVALS</h2>

                {loading && <p className="loading">Loading products...</p>}
                {error && <p className="error">{error}</p>}

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
