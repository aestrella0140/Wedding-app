import React from "react";
import { Link } from "react-router-dom";

const DirectionsMap = () => {
  return (
    <div className="event">
       <nav className="navbar p-2">
               <ul className="navbar-nav d-flex flex-row justify-content-center list-unstyled ">
                 <li className="nav-item mx-3">
                   <Link to="/" className="nav-link">
                     Home
                   </Link>
                 </li>
                 <li className="nav-item mx-3">
                   <Link to="/Gallery" className="nav-link">
                     Gallery
                   </Link>
                 </li>
                 <li className="nav-item mx-3">
                   <Link to="/RSVP" className="nav-link">
                     RSVP
                   </Link>
                 </li>
                 <li className="nav-item mx-3">
                   <Link to="/Event" className="nav-link">
                     Directions
                   </Link>
                 </li>
                 <li className="nav-item mx-3">
                   <Link to="/Registry" className="nav-link">
                     Registry
                   </Link>
                 </li>
               </ul>
             </nav>
      <div className="card">
        <p>Click the Link to our Wedding venue for Directions!</p>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=123+Main+St,New+York,NY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default DirectionsMap;
