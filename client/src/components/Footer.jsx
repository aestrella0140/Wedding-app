import React from "react";

const footer = () => {
    return (
        <footer className="footer container py-5">
      <div className="row">
        <div className="col-6">
          <h5>Contacts</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="mailto: astarfirstborn@hotmail.com">Email: astarfirstborn@hotmail.com</a></li>
            <li><a className="text-muted" href="#">Person Phone: 623-755-3094</a></li>
            <li><a className="text-muted" href="#"></a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="https://github.com/aestrella0140/Wedding-app">Repository</a></li>
            <li><a className="text-muted" href="#">Another resource</a></li>
          </ul>
        </div>
        <div className="col-12 col-md">
          <h5>CopyRight</h5>
          <small className="text-muted">&copy; 2025 <a className="text-muted" href="https://github.com/aestrella0140" target="_blank" rel="noopener noreferrer">aestrella0140</a> : All rights reserved</small>
        </div>
      </div>
    </footer>
    )
};

export default footer;