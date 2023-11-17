import React from "react";

function Header() {
  return (
    <header>

      <div className="site-logo">
        {"<coffee />"}
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Account</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;