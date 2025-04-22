import React, { useState, useEffect } from "react";
import auth from "../utils/auth";
import { Link } from "react-router-dom";

const footer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(auth.loggedIn());
  }, []);

  const handleLogout = () => {
    auth.logout();
    setIsLoggedIn(false);
  };
  return (
    <footer className="footer container py-5">
      <div className="row">
        <div className="col-6">
          <h5>Contacts</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a
                href="mailto: astarfirstborn@hotmail.com"
              >
                Email: astarfirstborn@hotmail.com
              </a>
            </li>
            <li>
              <a href="#">
                Person Phone: 623-755-3094
              </a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a
                href="https://github.com/aestrella0140/Wedding-app"
              >
                Repository
              </a>
            </li>
            <li>
              <div >
                <div>
                {!isLoggedIn && (
                  <div className="row">
                    <ul className="col-6 ">
                      <li className="list-unstyled">
                        <Link className="ad-link text-small" to="login">
                          Admin
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
                {isLoggedIn && (
                  <div>
                    <button onClick={handleLogout}>Logout</button>
                    <div>
                      <Link to="Admin">Admin</Link>
                    </div>
                  </div>
                )}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md">
          <h5>CopyRight</h5>
          <small className="text-muted">
            &copy; 2025{" "}
            <a
              href="https://github.com/aestrella0140"
              target="_blank"
              rel="noopener noreferrer"
            >
              aestrella0140
            </a>{" "}
            : All rights reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default footer;
