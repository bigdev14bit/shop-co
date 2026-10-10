// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
    const [menuOpen, setMenuOpen] = useState(false);
    const [query, setQuery] = useState('');
    const cartCount = useSelector(selectCartCount);
    const navigate = useNavigate();
    const location = useLocation();

    const closeMenu = () => setMenuOpen(false);

    const goToSection = (id) => {
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        const params = new URLSearchParams(location.search);
        if (value.trim()) {
            params.set('q', value);
        } else {
            params.delete('q');
        }

        navigate(`/shop?${params.toString()}`, { replace: true });
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">

                    <button
                        className="mobile-menu-btn"
                        aria-label="Open menu"
                        onClick={() => setMenuOpen(true)}
                    >
                        <FiMenu />
                    </button>

                    <Link to="/" className="logo">
                        MORDY STORE
                    </Link>

                    <ul className="nav-links">
                        <li><Link to="/shop">Shop</Link></li>
                        <li>
                            <button
                                className="nav-link-btn"
                                onClick={() => goToSection('about')}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                className="nav-link-btn"
                                onClick={() => goToSection('contact')}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>

                    <div className="nav-actions">

                        <div className={`search-box ${searchOpen ? 'mobile-search-open' : ''}`}>
                            <FiSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search for products..."
                                value={query}
                                onChange={handleSearchChange}
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
                                <FiShoppingCart size={22} className="icon" />
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

            {/* MOBILE DRAWER */}
            {menuOpen && (
                <div className="mobile-drawer-overlay" onClick={closeMenu}>
                    <div
                        className="mobile-drawer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mobile-drawer-header">
                            <span className="mobile-drawer-logo">MORDY STORE</span>
                            <button
                                className="mobile-drawer-close"
                                onClick={closeMenu}
                                aria-label="Close menu"
                            >
                                <FiX />
                            </button>
                        </div>

                        <Link
                            to="/shop"
                            className="mobile-drawer-link"
                            onClick={closeMenu}
                        >
                            Shop
                        </Link>

                        <button
                            className="mobile-drawer-link"
                            onClick={() => {
                                closeMenu();
                                goToSection('about');
                            }}
                        >
                            About
                        </button>

                        <button
                            className="mobile-drawer-link"
                            onClick={() => {
                                closeMenu();
                                goToSection('contact');
                            }}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
