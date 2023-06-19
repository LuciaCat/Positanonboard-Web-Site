import React, { useState } from "react";
import "./MainSectionPhoto.css";

function MainSectionPhoto() {
  const [imageLoadErrors, setImageLoadErrors] = useState([]);

  const handleImageError = (index) => {
    setImageLoadErrors((prevErrors) => [...prevErrors, index]);
  };

  const galleryImages = [
    {
      src: "../Assets/caroselboat1.jpeg",
      alt: "Logo Positanonboard in the boat",
    },
    {
      src: "../Assets/caroselboat2.jpeg",
      alt: "The boat in the sea",
    },
    {
      src: "../Assets/caroselboat3.jpeg",
      alt: "The view of Positano coast from the boat",
    },
    {
      src: "../Assets/caroselboat4.jpeg",
      alt: "The boat from the sky",
    },
    {
      src: "../Assets/caroselboat5.jpeg",
      alt: "The boat running in the sea",
    },
    {
      src: "../Assets/caroselboat6.jpeg",
      alt: "Inside the boat",
    },
    {
      src: "../Assets/caroselboat7.jpeg",
      alt: "Inside the boat",
    },
    {
      src: "../Assets/caroselboat8.jpeg",
      alt: "View of the Amalfi coast from the boat",
    },
    {
      src: "../Assets/caroselboat9.jpeg",
      alt: "The boat running in the sea, view from the sky",
    },
    {
      src: "../Assets/caroselboat10.jpeg",
      alt: "The boat is anchored in the port",
    },
  ];

  return (
    <>
      <section id="Photo" className="gallery">
        <div className="container">
          <h1 className="heading">Photo Gallery</h1>
          <div className="gallery">
            {galleryImages.map((image, index) => {
              if (imageLoadErrors.includes(index)) {
                return null; // Salta l'immagine se si è verificato un errore di caricamento
              }
              return (
                <div className="gallery-item" key={index}>
                  <img
                    className="gallery-image"
                    src={image.src}
                    alt={image.alt}
                    onError={() => handleImageError(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSectionPhoto;
