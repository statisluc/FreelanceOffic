import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import HomePage from "./components/HomePage.jsx";

import NotFound from "./components/NotFound.jsx";
import Contact from "./components/Contact.jsx";
import Pricing from "./components/Pricing.jsx";
import FAQ from "./components/FAQ.jsx";
import Portfolio from "./components/Portfolio.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "Contact", element: <Contact /> },
      { path: "Pricing", element: <Pricing /> },
      { path: "FAQ", element: <FAQ /> },
      { path: "Portfolio", element: <Portfolio /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
