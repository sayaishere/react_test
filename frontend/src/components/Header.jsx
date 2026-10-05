import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/products">Product Catalog</Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/products">Products</Link>
                    <Link className="nav-link" to="/add-product">Add Product</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;