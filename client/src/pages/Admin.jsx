import * as React from "react";
import auth from "../utils/auth";
import { useQuery } from "@apollo/client";

const admin = () => {
    if (auth.loggedIn()) {
        return (
            <div></div>
        )
    }
};