import React from "react";
import auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_RSVPS } from "../utils/queries";

const Admin = () => {
const { loading, error, data } = useQuery(GET_RSVPS);

    if (!auth.loggedIn()) {
        return <p>You must be logged in to view this page.</p>;
    }
    
    if (loading) {
        return <p>Loading RSVP submissions.</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="Admin">
            <h1>RSVP submissions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Attending</th>
                        <th>Guests</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    {data.getRSVPs.map((submission) => (
                    <tr key={submission._id}>
                        <td>{submission.name}</td>
                        <td>{submission.email}</td>
                        <td>{submission.attending ? "Yes" : "No"}</td>
                        <td>{submission.guests}</td>
                        <td>{submission.address}</td>
                        <td>{submission.city}</td>
                        <td>{submission.state}</td>
                        <td>{submission.zip}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default Admin;