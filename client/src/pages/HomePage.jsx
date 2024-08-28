import React from "react";
import { Link } from "react-router-dom";

const homePage = () => {
  return (
    <div>
      <h1>Adrian & Tatiana</h1>
      <div>
        <ul>
          <li>
            <Link to="/Story">Story</Link>
          </li>
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link to='/RSVP'>RSVP</Link>
          </li>
        </ul>
      </div>

      <div>
        <p>Feburary 23, 2026 Phoenix, AZ</p>
      </div>
    </div>
  );
};

export default homePage;
