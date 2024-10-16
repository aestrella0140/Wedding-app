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
        thumbnail: "us.jpeg",
        description: "description of image 1",
    },
    {
        original: meAndHer,
        thumbnail: "meAndHer.jpeg",
        description: "description of image 2",
    },
    {
        original: chapo,
        thumbnail: "chapo1.jpeg",
        description: "description of image 3",
    },
    {
        original: meAndLove,
        thumbnail: "meAndLove.jpeg",
        description: "description of image 4",
    },
    {
        original: "url-to-image1.png",
        thumbnail: "url-to-thumbnail5.png",
        description: "description of image 5",
    },
    {
        original: "url-to-image1.png",
        thumbnail: "url-to-thumbnail6.png",
        description: "description of image 6",
    },
];

const PhotoGallery = () => {

    const breakPointColObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <Masonry
        breakpointCols={breakPointColObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
        >
            {images.map((image, index) => (
            <div key={index} className="image">
            <Gallery
             items={images}
             showThumbnails={true}
             showPlayButton={true}
             showFullscreenButton={true} 
             showNav={true}/>

            </div>

            ))}
        </Masonry>
    );
};

export default PhotoGallery;