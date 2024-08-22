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
                <div>
                    <ul>
                        <li>
                            <Link to='/Signup'>
                            Signup
                            </Link>
                        </li>
                        <li>
                            <Link to='/Login'>
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
            <div>
                <h2>
                    <Link to='/'>
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