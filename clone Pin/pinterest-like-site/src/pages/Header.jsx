import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Certifique-se de que o estilo está correto

function Header({ setCurrentPage }) {
  const handleLogoClick = () => {
    setCurrentPage(1); // Redefine para a primeira página quando a logo é clicada
  };

  return (
    <header className="header">
      <div className="logo">
        {/* Link que redireciona para a página inicial e envolve a logo */}
        <Link to="/" onClick={handleLogoClick}>
          <img src="/Mario.jpg" alt="Logo do site" />
        </Link>
      </div>
      <nav className="categories">
        <Link to="/">Home</Link>
        <Link to="/category/Natureza">Aleatorios</Link>
        <Link to="/category/Tecnologia">Meme</Link>
        <Link to="/category/Animais">Explorar</Link>
      </nav>
    </header>
  );
}

export default Header;
