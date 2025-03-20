import React from "react";
import { Link } from "react-router-dom";
import styles from "./homePage.module.css";

const Registry = () => {
  return (
    <section className="registry">
      <nav
        className={`${styles.nav} navbar shadow-sm p-1 mx-auto p-2`}
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <ul className="navbar-nav d-flex flex-row justify-content-center">
          <li className="nav-item mx-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/Story" className="nav-link">
              Our Story
            </Link>
          </li>

          <li className="nav-item mx-3">
            <Link to="/Gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/Registry" className="nav-link">
              Registry
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/RSVP" className="nav-link">
            RSVP
            </Link>
          </li>
        </ul>
      </nav>

      <h2>Our Registry</h2>
      <div className="card">
        <div>
        <p>
          We're so greatful for your love and support, If you'd like to bless us
          with a gift, You can find our registries here:
        </p>
        <ul>
          <li><a href="#">target</a></li>
          <li> <a href="#">walmart</a></li>
          <li><a href="#">Honeymoon Fund</a></li>
        </ul>
        </div>
      </div>
    </section>
  );
};

export default Registry;
