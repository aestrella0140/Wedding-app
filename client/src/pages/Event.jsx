import React from "react";
import { Link } from "react-router-dom";
import directions from "../assets/directions.png";

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
        <img src={directions} alt="Map of location of venue with hyper link" />
        <p>Click the Link to our Wedding venue for Directions!</p>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=246727+N+181st+Dr,Surprise,AZ"
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
