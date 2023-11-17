import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
        </ul>
      </nav>

      <div className="site-logo">
        LOGO
      </div>

      <div className="cart-widget">
        Account
      </div>
    </header>
  );
}

export default Header;