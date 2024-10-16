import React from "react";
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
    description: "description of image 1",
  },
  {
    original: meAndHer,
    thumbnail: meAndHer,
    description: "description of image 2",
  },
  {
    original: chapo,
    thumbnail: chapo,
    description: "description of image 3",
  },
  {
    original: meAndLove,
    thumbnail: meAndLove,
    description: "description of image 4",
  },
];

const PhotoGallery = () => {
  const breakPointColObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakPointColObj}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {images.map((image, index) => (
        <div key={index} className="image-gallery-container">
          <Gallery
            items={images}
            showThumbnails={true}
            showPlayButton={true}
            showFullscreenButton={true}
            showNav={true}
          />
        </div>
      ))}
    </Masonry>
  );
};

export default PhotoGallery;
