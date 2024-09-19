import React from "react";
import { Link } from "react-router-dom";
import usThumbnail from '../assets/us_THUMBNAIL.jpg';
import flowerTopper from '../assets/flower-topper-flipped-removebg-preview.png';

const homePage = () => {
  return (
    <div className="home container">
      <img src={flowerTopper} alt="eucalyptus drawing" className="topper" />
      <h1 className="ms-auto my-4 text-white rounded">Adrian & Tatiana</h1>
      <div className="home-link text-white p-1 rounded mx-auto">
        <ul className="d-flex justifycontent-center list-unstyled">
          <li className="mx-3">
            <Link to="/Story" >Share your Story</Link>
          </li>
          <li className="mx-3">
            <Link to="/Gallery" >Gallery</Link>
          </li>
          <li className="mx-3">
            <Link to='/RSVP' >RSVP</Link>
          </li>
        </ul>
      </div>

      <div className="mx-4">
        <p className="lead">Feburary 23, 2026 Phoenix, AZ</p>
      </div>
    {/*short paragraph*/}
      <div>
        <p>We first met in preschool. I remember Tatiana's dad telling me to always protect her on the first day of kindergarden. Even then I knew we would be friends from then on.

        </p>
      </div>

      <div className="home-image my-4">
        <img src={usThumbnail} alt="Adrian and Tatiana.." className="img"/>
      </div>
    </div>
  );
};

export default homePage;
