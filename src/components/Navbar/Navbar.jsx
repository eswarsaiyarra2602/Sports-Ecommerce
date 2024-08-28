import React from 'react';
import './Navbar.css';

function Navbar() {
  const handleOrdersClick = () => {
    // Handle the click event
    console.log("Orders & Returns button clicked");
  };

  return (
    <section id="navbar">
      <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" href="/">Victory Vault</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link" onClick={handleOrdersClick}>
                <i className="fa-solid fa-right-left"></i> Orders & Returns
              </button>
            </li>
            <li className="nav-item position-relative">
              <a className="nav-link" href="/wishlist">
                <i className="fa-solid fa-heart"></i>
                <span className="badge">5</span> {/* Counter badge */}
                Wishlist
              </a>
            </li>
            <li className="nav-item position-relative">
              <a className="nav-link" href="/cart">
                <i className="fa-solid fa-shopping-cart"></i>
                <span className="badge">3</span> {/* Counter badge */}
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                <i className="fa-solid fa-user"></i> Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;