import auth from "../utils/auth";
import React from "react";
import { Link } from 'react-router-dom';


function Nav() {
    function showNav() {
        if (auth.loggedIn()) {
            return (
                <div>
                    <ul>
                        <li>
                            <a href="/" onClick={() => auth.logout()}>Logout</a>
                        </li>
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="nav-logged-out">
                    <ul className="ul-logged-out">
                        <li>
                            <Link to='/Signup' className="link">
                            Signup
                            </Link>
                        </li>
                        <li>
                            <Link to='/Login' className="link">
                            Login
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        }
    }

    return (
        <header>
            <div className="nav-logged-out" >
                <h2>
                    <Link to='/' className="nav-title">
                    Estrella Wedding
                    </Link>
                </h2>

                <nav>
                    {showNav()}
                </nav>
            </div>
        </header>
    )
};

export default Nav;