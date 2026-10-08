// src/pages/Cart.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import Footer from '../components/Footer';
import {
    selectCartItems,
    selectCartTotal,
    updateQuantity,
    removeFromCart,
    clearCart,
} from '../store/cartSlice';
import { buildWhatsAppLink } from '../utils/whatsapp';
import Navbar from '../components/Navbar';
import './Cart.css';

function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const items = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    const [confirmOpen, setConfirmOpen] = useState(false);

    const handleIncrease = (item) => {
        dispatch(updateQuantity({
            id: item.id,
            size: item.size,
            color: item.color,
            quantity: item.quantity + 1,
        }));
    };

    const handleDecrease = (item) => {
        if (item.quantity <= 1) {
            dispatch(removeFromCart({
                id: item.id,
                size: item.size,
                color: item.color,
            }));
            return;
        }

        dispatch(updateQuantity({
            id: item.id,
            size: item.size,
            color: item.color,
            quantity: item.quantity - 1,
        }));
    };

    const handleRemove = (item) => {
        dispatch(removeFromCart({
            id: item.id,
            size: item.size,
            color: item.color,
        }));
    };

    const handleCheckout = () => {
        const link = buildWhatsAppLink(items);
        if (!link) return;
        window.open(link, '_blank');
        dispatch(clearCart());
    };

    const handleClearCart = () => {
        dispatch(clearCart());
        setConfirmOpen(false);
    };

    // =========================
    // EMPTY STATE
    // =========================
    if (items.length === 0) {
        return (
            <>
                <Navbar />
                <div className="cart-page">
                    <div className="cart-container">
                        <Link to="/shop" className="cart-back-link">
                            ← Back to shop
                        </Link>

                        <div className="cart-empty">
                            <h2>Your cart is empty</h2>
                            <p>Looks like you haven't added anything yet.</p>
                            <button
                                className="cart-btn-primary"
                                onClick={() => navigate('/shop')}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    // =========================
    // CART WITH ITEMS
    // =========================
    return (
        <>
            <Navbar />

            <div className="cart-page">
                <div className="cart-container">

                    <Link to="/shop" className="cart-back-link">
                        ← Back to shop
                    </Link>

                    <h1 className="cart-title">Your Cart</h1>

                    <div className="cart-layout">

                        {/* LEFT: ITEMS */}
                        <div className="cart-items">
                            {items.map((item) => (
                                <div
                                    className="cart-item"
                                    key={`${item.id}-${item.size || 'any'}-${item.color || 'any'}`}
                                >
                                    <div className="cart-item-image">
                                        <img
                                            src={item.image || '/images/placeholder.jpg'}
                                            alt={item.title}
                                        />
                                    </div>

                                    <div className="cart-item-info">
                                        <h3 className="cart-item-title">
                                            {item.title}
                                        </h3>

                                        {item.size && item.size !== 'No size' && (
                                            <p className="cart-item-variant">
                                                Size: <strong>{item.size}</strong>
                                            </p>
                                        )}

                                        <p className="cart-item-price">
                                            ₦{item.price.toLocaleString()}
                                        </p>

                                        <div className="cart-item-controls">
                                            <button
                                                className="cart-qty-btn"
                                                onClick={() => handleDecrease(item)}
                                                aria-label="Decrease quantity"
                                            >
                                                <FaMinus size={11} />
                                            </button>

                                            <span className="cart-qty-value">
                                                {item.quantity}
                                            </span>

                                            <button
                                                className="cart-qty-btn"
                                                onClick={() => handleIncrease(item)}
                                                aria-label="Increase quantity"
                                            >
                                                <FaPlus size={11} />
                                            </button>

                                            <button
                                                className="cart-remove-btn"
                                                onClick={() => handleRemove(item)}
                                                aria-label="Remove item"
                                            >
                                                <FaTrash size={11} />
                                                <span>Remove</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="cart-item-subtotal">
                                        ₦{(item.price * item.quantity).toLocaleString()}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT: SUMMARY */}
                        <aside className="cart-summary">
                            <h2 className="cart-summary-title">
                                Order Summary
                            </h2>

                            <div className="cart-summary-row">
                                <span>Subtotal</span>
                                <span>₦{total.toLocaleString()}</span>
                            </div>

                            <div className="cart-summary-total">
                                <span>Total</span>
                                <span>₦{total.toLocaleString()}</span>
                            </div>

                            <button
                                className="cart-btn-primary cart-checkout-btn"
                                onClick={handleCheckout}
                            >
                                Checkout on WhatsApp
                            </button>

                            <button
                                className="cart-btn-secondary"
                                onClick={() => setConfirmOpen(true)}
                            >
                                Clear Cart
                            </button>
                        </aside>

                    </div>
                </div>
            </div>

            {/* CONFIRM DIALOG */}
            {confirmOpen && (
                <div
                    className="cart-modal-overlay"
                    onClick={() => setConfirmOpen(false)}
                >
                    <div
                        className="cart-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>Clear your cart?</h3>
                        <p>
                            This will remove all {items.length} item
                            {items.length > 1 ? 's' : ''} from your cart.
                            This cannot be undone.
                        </p>

                        <div className="cart-modal-actions">
                            <button
                                className="cart-btn-secondary"
                                onClick={() => setConfirmOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="cart-btn-danger"
                                onClick={handleClearCart}
                            >
                                Yes, Clear
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}

export default Cart;
