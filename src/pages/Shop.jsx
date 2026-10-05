import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setLoading, setError } from '../store/productsSlice';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import './Shop.css';

function Shop() {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                dispatch(setLoading(true));
                const response = await fetch('https://dummyjson.com/products?limit=20');
                const data = await response.json();
                dispatch(setProducts(data.products));
            } catch (err) {
                dispatch(setError('Failed to load products'));
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchAllProducts();
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <div className="shop-page">
                <div className="container">
                    <h1 className="shop-title">All Products</h1>

                    {loading && <p className="loading">Loading products...</p>}
                    {error && <p className="error">{error}</p>}

                    <div className="products-grid">
                        {items.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
