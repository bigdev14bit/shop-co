// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    FiSearch,
    FiShoppingCart,
    FiMenu,
    FiX,
} from 'react-icons/fi';
import { selectCartCount } from '../store/cartSlice';
import './Navbar.css';

function Navbar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const cartCount = useSelector(selectCartCount);

    return (
        <nav className="navbar">
            <div className="nav-container">

                <button
                    className="mobile-menu-btn"
                    aria-label="Open menu"
                >
                    <FiMenu />
                </button>

                <Link to="/" className="logo">
                    MORDY STORE
                </Link>

                <ul className="nav-links">
                    <li><Link to="/shop">Shop</Link></li>
                </ul>

                <div className="nav-actions">

                    <div
                        className={`search-box ${
                            searchOpen ? 'mobile-search-open' : ''
                        }`}
                    >
                        <FiSearch className="search-icon" />

                        <input
                            type="text"
                            placeholder="Search for products..."
                        />
                    </div>

                    <button
                        className="mobile-search-btn"
                        onClick={() => setSearchOpen(!searchOpen)}
                        aria-label="Search"
                    >
                        {searchOpen ? <FiX /> : <FiSearch />}
                    </button>

                    <div className="icons">
                        <Link to="/cart" className="icon-link" aria-label="Cart">
                            <FiShoppingCart size={24} className="icon" />
                            {cartCount > 0 && (
                                <span className="cart-badge" key={cartCount}>
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
