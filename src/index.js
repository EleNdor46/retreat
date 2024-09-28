import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import App from "./app/App";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
const root = ReactDOM.createRoot(document.getElementById("root"));

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/Courses",
    element: <CoursesPage />,
  },
  {
    path: "/About",
    element: <AboutPage />,
  },
]);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </BrowserRouter>
);
