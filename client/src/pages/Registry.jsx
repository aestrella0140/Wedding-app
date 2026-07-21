import React from "react";
import { Link } from "react-router-dom";

const Registry = () => {
  return (
    <section className="registry">
      <nav className="registry-nav  p-2">
        <ul className="list-unstyled  justify-content-center position-relative ">
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
            <Link to="/Event">Info</Link>
          </li>
          {/* <li className="mx-3">
            <Link to="/RSVP">RSVP</Link>
          </li> */}
        </ul>
      </nav>
      <div className="registry-hero">
        <h2>Honeyfund</h2>

        <div className="divider">
          <span>✿</span>
        </div>

        <div>
          <p className="lead">
            We're so grateful for your love and support, If you'd like to bless
            us with a gift, You can find our registries here:
          </p>
          <a
            href="https://www.honeyfund.com/site/TatianaandAdrian2027"
            target="_blank"
            rel="noreferrer"
            className="honeyfund-btn"
          >
            <span className="shadow"></span>
              <span className="edge"></span>
                <span className="front">
                  <span>Honeyfund</span>
                </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Registry;
