import React from "react";
import { Link } from "react-router-dom";

const Registry = () => {
  return (
    <section className="registry">
      <nav className="registry-nav p-2">
        <ul className="list-unstyled justify-content-center d-flex flex-row">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/Story">Our Story</Link>
          </li>

          <li className="mx-3">
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li className="mx-3">
            <Link to="/Event">Directions</Link>
          </li>
          <li className="mx-3">
            <Link to="/RSVP">RSVP</Link>
          </li>
        </ul>
      </nav>

      <h2>Our Registry</h2>
      <div className="card">
        <div>
          <p>
            We're so greatful for your love and support, If you'd like to bless
            us with a gift, You can find our registries here:
          </p>
          <ul>
            <li>
              <a href="#">target</a>
            </li>
            <li>
              {" "}
              <a href="#">walmart</a>
            </li>
            <li>
              <a href="#">Honeymoon Fund</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Registry;
