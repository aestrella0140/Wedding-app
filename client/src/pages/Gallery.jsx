import React, { useState } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Masonry from "react-masonry-css";
import us from "../assets/us.jpeg";
import meAndHer from "../assets/meAndHer.jpeg";
import meAndLove from "../assets/meAndLove.jpeg";
import chapo from "../assets/chapo1.jpeg";

const images = [
  {
    original: us,
    thumbnail: us,
    description: "me and love at the 2000 themed music event!",
  },
  {
    original: meAndHer,
    thumbnail: meAndHer,
    description: "Tatiana and me at the Ice bar in Vegas!",
  },
  {
    original: chapo,
    thumbnail: chapo,
    description: "Chapo being crazy",
  },
  {
    original: meAndLove,
    thumbnail: meAndLove,
    description: "Our first time at Disney together!",
  },
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
    <div>

    <div>
      <h2>Our story</h2>
      <p>this is our life gallery showing all our great times with a little backstory!</p>
    </div>

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
        <Gallery
        className="gallery-container"
          items={images}
          showThumbnails={true}
          showPlayButton={false}
          showFullscreenButton={true}
          showNav={true}
          startIndex={selectedImageIndex}
          isOpen={galleryOpen}
          onClose={closeGallery}
        />
      )}
    </div>
  );
};

export default PhotoGallery;
