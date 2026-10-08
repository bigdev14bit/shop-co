// src/pages/Shop.jsx
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Shop.css';

function Shop() {
    return (
        <div>
            <Navbar />
            <div className="shop-page">
                <div className="container">
                    <h1 className="shop-title">All Products</h1>

                    <div className="products-grid">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
