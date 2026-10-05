import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo">
                    SHOP.CO
                </Link>

                <ul className="nav-links">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/">On Sale</Link></li>
                    <li><Link to="/">New Arrivals</Link></li>
                    <li><Link to="/">Brands</Link></li>
                </ul>

                <div className="nav-actions">
                    <div className="search-box">
                        <FiSearch className="search-icon" />
                        <input type="text" placeholder="Search for products..." />
                    </div>

                    <div className="icons">
                        <FiShoppingCart size={22} className="icon" />
                        <FiUser size={22} className="icon" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
