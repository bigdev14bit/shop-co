// src/pages/Shop.jsx
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Shop.css';

function Shop() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const filtered = query.trim()
        ? products.filter((p) =>
              p.title.toLowerCase().includes(query.toLowerCase())
          )
        : products;

    return (
        <div>
            <Navbar />
            <div className="shop-page">
                <div className="container">
                    <h1 className="shop-title">
                        {query ? `Search: "${query}"` : 'All Products'}
                    </h1>

                    {filtered.length === 0 ? (
                        <div className="shop-empty">
                            <p>No products match "{query}".</p>
                            <p>Try a different search or browse all products.</p>
                        </div>
                    ) : (
                        <div className="products-grid">
                            {filtered.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Shop;
