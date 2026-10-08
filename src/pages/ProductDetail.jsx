// src/pages/ProductDetail.jsx
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaStar, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { products } from '../data/products';
import { addToCart } from '../store/cartSlice';
import { buildSingleProductLink } from '../utils/whatsapp';
import Navbar from '../components/Navbar';
import './ProductDetail.css';

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = products.find((p) => p.id === Number(id));

    const [selectedSize, setSelectedSize] = useState(null);
    const [sizeError, setSizeError] = useState('');
    const [addedFeedback, setAddedFeedback] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    if (!product) {
        return (
            <>
                <Navbar />
                <div className="pd-not-found">
                    <h2>Product not found</h2>
                    <Link to="/shop" className="pd-back-link">← Back to shop</Link>
                </div>
            </>
        );
    }

    const hasSizes = Array.isArray(product.sizes) && product.sizes.length > 0;
    const images = product.images && product.images.length > 0
        ? product.images
        : ['/images/placeholder.jpg'];

    const handleAddToCart = () => {
        if (hasSizes && !selectedSize) {
            setSizeError('Please pick a size');
            return;
        }

        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: images[0],
            size: selectedSize || 'No size',
        }));

        setSizeError('');
        setAddedFeedback(true);
        setTimeout(() => setAddedFeedback(false), 2000);
    };

    const handleBuyNow = () => {
        if (hasSizes && !selectedSize) {
            setSizeError('Please pick a size');
            return;
        }

        const link = buildSingleProductLink(
            product,
            selectedSize || 'No size'
        );
        window.open(link, '_blank');
    };

    const openLightbox = (index) => {
        setActiveImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const nextImage = (e) => {
        e.stopPropagation();
        setActiveImageIndex((i) => (i + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setActiveImageIndex((i) => (i - 1 + images.length) % images.length);
    };

    const rating = product.rating || 4.5;

    return (
        <>
            <Navbar />

            <div className="pd-page">
                <div className="pd-container">

                    <button
                        onClick={() => navigate('/shop')}
                        className="pd-back-link"
                    >
                        ← Back to shop
                    </button>

                    <div className="pd-layout">

                        {/* LEFT: IMAGES */}
                        <div className="pd-images">
                            <div
                                className="pd-main-image"
                                onClick={() => openLightbox(activeImageIndex)}
                            >
                                <img
                                    src={images[activeImageIndex]}
                                    alt={product.title}
                                />
                            </div>

                            {images.length > 1 && (
                                <div className="pd-thumbs">
                                    {images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            className={`pd-thumb ${
                                                idx === activeImageIndex ? 'active' : ''
                                            }`}
                                            onClick={() => setActiveImageIndex(idx)}
                                        >
                                            <img src={img} alt={`${product.title} ${idx + 1}`} />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* RIGHT: INFO */}
                        <div className="pd-info">
                            <h1 className="pd-title">{product.title}</h1>

                            <div className="pd-rating">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        color={i < Math.round(rating) ? '#ffc107' : '#e4e5e9'}
                                        size={16}
                                    />
                                ))}
                                <span className="pd-rating-number">{rating}</span>
                            </div>

                            <div className="pd-price">
                                ₦{product.price.toLocaleString()}
                            </div>

                            <p className="pd-description">{product.description}</p>

                            {hasSizes && (
                                <div className="pd-size-section">
                                    <p className="pd-label">Pick a size</p>
                                    <div className="pd-size-chips">
                                        {product.sizes.map((size) => (
                                            <button
                                                key={size}
                                                className={`pd-size-chip ${
                                                    selectedSize === size ? 'active' : ''
                                                }`}
                                                onClick={() => {
                                                    setSelectedSize(size);
                                                    setSizeError('');
                                                }}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                    {sizeError && (
                                        <p className="pd-error">{sizeError}</p>
                                    )}
                                </div>
                            )}

                            <div className="pd-actions">
                                <button
                                    className="pd-btn-secondary"
                                    onClick={handleAddToCart}
                                >
                                    {addedFeedback ? 'Added ✓' : 'Add to Cart'}
                                </button>
                                <button
                                    className="pd-btn-primary"
                                    onClick={handleBuyNow}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* LIGHTBOX */}
            {lightboxOpen && (
                <div className="pd-lightbox" onClick={closeLightbox}>
                    <button
                        className="pd-lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        <FaTimes />
                    </button>

                    {images.length > 1 && (
                        <button
                            className="pd-lightbox-nav pd-lightbox-prev"
                            onClick={prevImage}
                            aria-label="Previous"
                        >
                            <FaChevronLeft />
                        </button>
                    )}

                    <img
                        src={images[activeImageIndex]}
                        alt={product.title}
                        className="pd-lightbox-image"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {images.length > 1 && (
                        <button
                            className="pd-lightbox-nav pd-lightbox-next"
                            onClick={nextImage}
                            aria-label="Next"
                        >
                            <FaChevronRight />
                        </button>
                    )}
                </div>
            )}
        </>
    );
}

export default ProductDetail;
