import React from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Masonry from "react-masonry-css";

const images = [
    {
        original: "url-to-image1.png",
        thumbnail: "url-to-thumbnail1.png",
        description: "description of image 1",
    },
    {
        original: "url-to-image2.png",
        thumbnail: "url-to-thumbnail2.png",
        description: "description of image 2",
    },
    {
        original: "url-to-image1.png",
        thumbnail: "url-to-thumbnail3.png",
        description: "description of image 3",
    },
    {
        original: "url-to-image1.png",
        thumbnail: "url-to-thumbnail4.png",
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
    return (
        <div>
            <Gallery items={images} />
        </div>
    );
};

export default PhotoGallery;