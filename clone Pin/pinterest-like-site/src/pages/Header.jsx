import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Certifique-se de que o estilo está correto

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* Logo que redireciona para a página inicial */}
        <Link to="/">Logo</Link>
      </div>
      <nav className="categories">
        <Link to="/">Home</Link>
        <Link to="/category/1">Natureza</Link>
        <Link to="/category/2">Tecnologia</Link>
        <Link to="/category/3">Animais</Link>
      </nav>
    </header>
  );
}

export default Header;
