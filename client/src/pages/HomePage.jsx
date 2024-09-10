import React from "react";
import { Link } from "react-router-dom";
import thumbnail from '../assets/us_THUMBNAIL.jpg';

const homePage = () => {
  return (
    <div className="home">
      <h1>Adrian & Tatiana</h1>
      <div className="home-link">
        <ul>
          <li>
            <Link to="/Story" >Share your Story</Link>
          </li>
          <li>
            <Link to="/Gallery" >Gallery</Link>
          </li>
          <li>
            <Link to='/RSVP' >RSVP</Link>
          </li>
        </ul>
      </div>

      <div>
        <p>Feburary 23, 2026 Phoenix, AZ</p>
      </div>
    {/*short paragraph*/}
      <div>
        <p>We first met in preschool. I remember Tatiana's dad telling me to always protect her on the first day of kindergarden. Even then I knew we would be friends from then on.

        </p>
      </div>

      <div >
        <img src={thumbnail} alt="" className="img"/>
      </div>
    </div>
  );
};

export default homePage;
