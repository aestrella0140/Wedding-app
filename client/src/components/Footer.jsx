import React from "react";

const footer = () => {
    return (
        <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          <small className="d-block mb-3 text-muted">&copy; 2025</small>
        </div>
        <div className="col-6 col-md">
          <h5>Section</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Cool stuff</a></li>
            <li><a className="text-muted" href="#">Random feature</a></li>
            <li><a className="text-muted" href="#">Team feature</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Resource</a></li>
            <li><a className="text-muted" href="#">Another resource</a></li>
          </ul>
        </div>
      </div>
    </footer>
    )
};

export default footer;