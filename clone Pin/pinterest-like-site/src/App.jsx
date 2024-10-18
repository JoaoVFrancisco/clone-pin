import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ImageDetail from "./pages/ImageDetail";
import Header from "./pages/Header"; // Certifique-se de que está importando o Header corretamente
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Header sempre visível */}
        <Header />
        
        {/* Definindo as rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/image/:imageId" element={<ImageDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;