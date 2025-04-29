import React, { useState } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Masonry from "react-masonry-css";
import iceBar from "../assets/iceBar.jpeg";
import meAndLove from "../assets/meAndLove.jpeg";
import chapo from "../assets/chapo1.jpeg";
import chapoPortrait from '../assets/chapo_portrait.jpeg';
import disney from '../assets/disney.jpeg';
import littleFamily from '../assets/little_family.jpeg';
import prom from '../assets/prom.jpeg';  

import styles from "./homePage.module.css";
import { Link } from "react-router-dom";


const images = [
  {
    original: iceBar,
    thumbnail: iceBar,
    description: "Us at the ice bar in the Venetian Resort Las Vegas!"
  },
  {
    original: chapo,
    thumbnail: chapo,
    description: "Chapo being crazys",
  },
  {
    original: meAndLove,
    thumbnail: meAndLove,
    description: "Our first time at Disney together!",
  },
  {
    original: chapoPortrait,
    thumbnail: chapoPortrait,
    description: "Chapo sitting like a good boy for his photoshoot."
  },
  {
    original: disney,
    thumbnail: disney,
    description: "Our first time at Disneyland!"
  },
  {
    original: littleFamily,
    thumbnail: littleFamily,
    description: "The three of us at Del Monte beach in Monterey California."
  },
  {
    original: prom,
    thumbnail: prom,
    description: "Our photo of us together on our way to senior prom."
  }
];

const PhotoGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const breakPointColObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const openGallery = (index) => {
    setSelectedImageIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setSelectedImageIndex(null);
    setGalleryOpen(false);
  };

  return (
    <main className="Gallery">
      <div className="gallery-header">
        <h2 className="gallery-h2">Estrella Life Photos</h2>
        <p>
          Click on the images and browse the gallery that gives a little little
          backstory!
        </p>
      </div>

      <nav className={`${styles.nav} p-1 rounded mx-auto`}>
        <ul className="d-flex  list-unstyled">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/Story">Our Story</Link>
          </li>

          <li className="mx-3">
            <Link to="/RSVP">RSVP</Link>
          </li>
        </ul>
      </nav>

      <Masonry
        breakpointCols={breakPointColObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index} className="image-gallery-container">
            <img
              src={image.thumbnail}
              alt={`image ${index + 1}`}
              style={{ width: "75%", cursor: "pointer" }}
              onClick={() => openGallery(index)}
            />
          </div>
        ))}
      </Masonry>

      {galleryOpen && (
        <div className="modal-overlay" onClick={closeGallery}> 
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeGallery}>
              &times;
            </button>
          <Gallery
            
            items={images}
            showThumbnails={true}
            showPlayButton={false}
            showFullscreenButton={true}
            showNav={true}
            startIndex={selectedImageIndex}
          />
          </div>
        </div>
      )}
    </main>
  );
};

export default PhotoGallery;
