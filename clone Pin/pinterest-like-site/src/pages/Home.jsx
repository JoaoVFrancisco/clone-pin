import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../data/images';
import './Home.css'; // Importar arquivo de estilo específico para a Home

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const handlePrevPage = () => setCurrentPage(currentPage - 1);
  
  const displayedImages = images.slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage);

  return (
    <div>
      <div className="gallery">
        {displayedImages.map((image) => (
          <Link key={image.id} to={`/image/${image.id}`}>
            <img src={image.src} alt={image.title} />
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
}

export default Home;
