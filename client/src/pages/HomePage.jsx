import React from "react";
import { Link } from "react-router-dom";
import usThumbnail from '../assets/us_THUMBNAIL.jpg';
import flowerTopper from '../assets/flower-topper-flipped-removebg-preview.png';
import styles from './homePage.module.css';

const homePage = () => {
  return (
    <main className={styles.home}>
      <img src={flowerTopper} alt="eucalyptus drawing" className={styles.topper} />
      <h1 className={`${styles.title} text-white rounded`}>Adrian & Tatiana</h1>
      <nav className={`${styles.nav} home-link text-white p-1 rounded mx-auto`}>
        <ul className="d-flex justifycontent-center list-unstyled">
          <li className="mx-3">
            <Link to='/HomePage'>Home</Link>
          </li>
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
      </nav>

      <div className="mx-4">
        <p className="lead">Feburary 23, 2026 Phoenix, AZ</p>
      </div>
    {/*short paragraph*/}
      <section className={styles.story}>
        <p>We first met in preschool. I remember Tatiana's dad telling me to always protect her on the first day of kindergarden. Even then I knew we would be friends from then on.

        </p>
      </section>

      <section className={`${styles.imageSection} home-image my-4`}>
        <img src={usThumbnail} alt="Adrian and Tatiana.." className="img"/>
      </section>
    </main>
  );
};

export default homePage;
