import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import "./index.css";

import SignupForm from "./pages/Signup.jsx";
import LoginForm from "./pages/Login.jsx";
import HomePage from "./pages/HomePage.jsx";
import Gallery from "./pages/Gallery.jsx";
import Story from "./pages/Story.jsx";
import Rsvp from "./pages/RSVP.jsx";
import DirectionsMap from "./pages/Event.jsx";
import Registry from "./pages/Registry.jsx";
import Admin from "./pages/Admin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "Login",
        element: <LoginForm />,
      },
      {
        path: "Signup",
        element: <SignupForm />,
      },
      {
        path: "Gallery",
        element: <Gallery />,
      },
      {
        path: "Story",
        element: <Story />,
      },
      {
        path: "rsvp",
        element: <Rsvp />,
      },
      
      {
        path: "Event",
        element: <DirectionsMap />,
      },
      {
        path: "Registry",
        element: <Registry />,
      },
      {
        path: "Admin",
        element: <Admin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
