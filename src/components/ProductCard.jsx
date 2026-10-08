// src/components/ProductCard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { addToCart } from '../store/cartSlice';
import { buildSingleProductLink } from '../utils/whatsapp';
import './ProductCard.css';

function ProductCard({ product }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [pickerOpen, setPickerOpen] = useState(false);
    const [pickerMode, setPickerMode] = useState(null); // 'cart' | 'buy'
    const [selectedSize, setSelectedSize] = useState(null);
    const [error, setError] = useState('');

    const hasSizes = Array.isArray(product.sizes) && product.sizes.length > 0;

    const openPicker = (mode, e) => {
        e.stopPropagation();
        setError('');
        setSelectedSize(null);
        setPickerMode(mode);
        setPickerOpen(true);
    };

    const closePicker = () => {
        setPickerOpen(false);
        setPickerMode(null);
        setSelectedSize(null);
        setError('');
    };

    const confirmPick = () => {
        if (hasSizes && !selectedSize) {
            setError('Pick a size first');
            return;
        }

        const sizeToUse = selectedSize || 'No size';

        if (pickerMode === 'cart') {
            dispatch(
                addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.images?.[0] || '',
                    size: sizeToUse,
                })
            );
            closePicker();
        } else if (pickerMode === 'buy') {
            const link = buildSingleProductLink(product, sizeToUse);
            window.open(link, '_blank');
            closePicker();
        }
    };

    const goToDetail = () => {
        if (pickerOpen) return;
        navigate(`/product/${product.id}`);
    };

    const rating = product.rating || 4.5;

    return (
        <div className="product-card" onClick={goToDetail}>
            <div className="product-image">
                <img
                    src={product.images?.[0] || '/images/placeholder.jpg'}
                    alt={product.title}
                />
            </div>

            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>

                <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            color={i < Math.round(rating) ? '#ffc107' : '#e4e5e9'}
                            size={13}
                        />
                    ))}
                    <span className="rating-number">{rating}</span>
                </div>

                <div className="product-price">
                    ₦{product.price.toLocaleString()}
                </div>

                {/* Action area — either buttons OR picker */}
                <div className="product-actions">
                    {!pickerOpen ? (
                        <>
                            <button
                                className="btn-secondary"
                                onClick={(e) => openPicker('cart', e)}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="btn-primary"
                                onClick={(e) => openPicker('buy', e)}
                            >
                                Buy Now
                            </button>
                        </>
                    ) : (
                        <div
                            className="size-picker"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <p className="picker-label">
                                {hasSizes ? 'Pick a size:' : 'Confirm order'}
                            </p>

                            {hasSizes && (
                                <div className="size-chips">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            className={`size-chip ${
                                                selectedSize === size ? 'active' : ''
                                            }`}
                                            onClick={() => {
                                                setSelectedSize(size);
                                                setError('');
                                            }}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {error && <p className="picker-error">{error}</p>}

                            <div className="picker-actions">
                                <button
                                    className="btn-secondary"
                                    onClick={closePicker}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn-primary"
                                    onClick={confirmPick}
                                >
                                    {pickerMode === 'cart' ? 'Add' : 'Buy'}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
