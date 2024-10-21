import React from 'react';
import { useParams } from 'react-router-dom';
import images from '../data/images';
import styles from './ImageDetail.module.css'; // Importar o CSS module

function ImageDetail() {
  const { imageId } = useParams();
  const image = images.find(img => img.id === parseInt(imageId)); // Encontre a imagem com base no ID

  if (!image) {
    return <div>Imagem não encontrada</div>; // Exibir mensagem se a imagem não for encontrada
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image.src} alt={image.title} /> {/* Imagem à esquerda */}
      <div className={styles.textContainer}> {/* Texto à direita */}
        <h1 className={styles.title}>{image.title}</h1>
        <p className={styles.description}>{image.description}</p> {/* Exibindo a descrição da imagem */}
      </div>
    </div>
  );
}

export default ImageDetail;
