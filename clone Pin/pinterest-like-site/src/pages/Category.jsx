import React from 'react';
import { useParams, Link } from 'react-router-dom';
import images from '../data/images';

function Category() {
  const { categoryId } = useParams(); // Capturando o parâmetro da URL
  const filteredImages = images.filter((image) => image.category === categoryId);

  return (
    <div className="gallery-container">
      <div className="gallery">
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <Link key={image.id} to={`/image/${image.id}`}>
              <img src={image.src} alt={image.title} />
            </Link>
          ))
        ) : (
          <p>Nenhuma imagem encontrada para esta categoria.</p>
        )}
      </div>
    </div>
  );
}

export default Category;
