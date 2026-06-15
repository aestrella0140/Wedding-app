import React from "react";
import { Link } from "react-router-dom";
import directions from "../assets/directions.png";

const DirectionsMap = () => {
  return (
    <div className="event">
      <nav className="navbar event-link p-2">
        <ul className="navbar-nav d-flex flex-row justify-content-center list-unstyled ">
          <li className="mx-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/Gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          {/* <li className="mx-3">
            <Link to="/RSVP" className="nav-link">
              RSVP
            </Link>
          </li> */}
          <li className="mx-3">
            <Link to="/Registry" className="nav-link">
              Registry
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/Story" className="nav-link">
              Our Story
            </Link>
          </li>
        </ul>
      </nav>

      <div className="card border-0 shadow-lg rounded-4 p-4 text-center">
        <h3 className="mb-4">Wedding Information</h3>

        <div className="event-info text-start">

          <div className="info-item mb-4">
            <h5>Ceremony Time</h5>
            <p className="mb-0">The ceremony will start at <strong>4:00PM</strong>, so dont be late.</p>
          </div>

          <div className="info-item mb-4">
            <h5>Bar information</h5>
            <p className="mb-0">
              There will be a bar with a limited menu. If you want a certain
              type of alcohol bring your own.
            </p>
          </div>

            <div className="info-item mb-4">
            <p className="mb-0">
              Our bartenders will be working for tips So please bring cash! Venmo and
              Zelle will also be available.
            </p>
            </div>
          
          <div className="info-item mb-4">
            <h5>Seating</h5>
            <p className="mb-0">
              There will only be a few reserved seating otherwise all tables
              will be open.
            </p>
          </div>

          <div className="info-item mb-4">
            <h5>Entertainment</h5>
            <p className="mb-0">
              We will have a DJ and a photobooth, as well as a photographer
              during the whole event.
            </p>

          </div>
        </div>

        <div className="mt-4">
        <img src={directions} alt="Map of location of venue with hyper link" className="img-fluid rounded-4 shadow-sm" />

        </div>

        <div className="mt-4">
        <p className="mb-3">
          Click the Link to our Wedding venue for Directions!
        </p>
        <a
          className="btn btn-outline-dark py-2 rounded-pill"
          href="https://www.google.com/maps/dir/?api=1&destination=246727+N+181st+Dr,Surprise,AZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </a>

        </div>
      </div>
    </div>
  );
};

export default DirectionsMap;
