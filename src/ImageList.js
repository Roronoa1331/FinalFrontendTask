import React from 'react';
import './App.css';
export default function ImageList({ images }) {
  return (
    <div className="imageList">
      {images.map((image, index) => (
        <img key={index} src={image.urls.small} alt={image.alt} />
      ))}   
    </div>
  );
}   
