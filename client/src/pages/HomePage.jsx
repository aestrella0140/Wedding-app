import React from "react";
import { Link } from "react-router-dom";
import usThumbnail from "../assets/us_THUMBNAIL.jpg";
import flowerTopper from "../assets/flower-topper-flipped-removebg-preview.png";
import styles from "./homePage.module.css";
import CountDown from "../components/countDown";

const HomePage = () => {
  return (
    <main className={styles.home}>
      <img
        src={flowerTopper}
        alt="eucalyptus drawing"
        className={styles.topper}
      />
      <h1 className={`${styles.title} rounded`}>Adrian & Tatiana</h1>
      <nav className={`${styles.nav} home-link text-white p-1 rounded mx-auto`}>
        <ul className="d-flex justify-content-center list-unstyled">
          <li className="mx-3">
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li className="mx-3">
            <Link to="/RSVP">RSVP</Link>
          </li>
          <li className="mx-3">
            <Link to="/Event">Directions</Link>
          </li>
          <li className="mx-3">
            <Link to="/Registry">Registry</Link>
          </li>
          <li className="mx-3">
            <Link to="/Story">Our Story</Link>
          </li>
        </ul>
      </nav>

      <div className="story">
        <CountDown targetDate="2026-02-23T00:00:00" />
        <p>
          We're so excited to celebrate our special day with all of you. Here,
          you'll find everything you need to know about our big day, from event
          details to RSVP and more! Thank you for being part of our journey — we
          can't wait to see you on February 23, 2026!
        </p>

        <aside className="aside">
          <div className="aside-p">
            <h4>RECEPTION</h4>
            <p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=246727+N+181st+Dr,Surprise,AZ"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                The Ranch
              </a>
            </p>
          </div>
          <section className={`${styles.imageSection} home-image my-4`}>
            <img src={usThumbnail} alt="Adrian and Tatiana.." className="img" />
          </section>
        </aside>
      </div>
    </main>
  );
};

export default HomePage;
