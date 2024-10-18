import React from 'react';
import { useParams } from 'react-router-dom';
import images from '../data/images';

function ImageDetail() {
  const { imageId } = useParams();
  const image = images.find(img => img.id === parseInt(imageId)); // Encontre a imagem com base no ID

  if (!image) {
    return <div>Imagem não encontrada</div>; // Exibir mensagem se a imagem não for encontrada
  }

  return (
    <div>
      <h1>{image.title}</h1>
      <img src={image.src} alt={image.title} />
      <p>{image.description}</p> {/* Exibindo a descrição da imagem */}
    </div>
  );
}

export default ImageDetail;
