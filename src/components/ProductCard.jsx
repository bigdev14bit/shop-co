import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './ProductCard.css';

function ProductCard({ product }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };

    // DummyJSON has rating, FakeStore sometimes doesn't
    const rating = product.rating?.rate || product.rating || 4.5;

    return (
        <div className="product-card" onClick={handleClick}>
            <div className="product-image">
                <img
                    src={product.thumbnail || product.images?.[0] || product.image}
                    alt={product.title}
                />
            </div>

            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>

                <div className="product-rating">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            color={index < Math.round(rating) ? "#ffc107" : "#e4e5e9"}
                            size={14}
                        />
                    ))}
                    <span className="rating-number">{rating}/5</span>
                </div>

                <div className="product-price">${product.price}</div>
            </div>
        </div>
    );
}

export default ProductCard;