import React from 'react';
import { useParams, Link } from 'react-router-dom';
import images from '../data/images';

function Category() {
  const { categoryName } = useParams();
  const filteredImages = images.filter((image) => image.category === categoryName);

  return (
    <div>
      {/* Removendo o header duplicado */}

      <div className="gallery">
        {filteredImages.map((image) => (
          <Link key={image.id} to={`/image/${image.id}`}>
            <img src={image.src} alt={image.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;