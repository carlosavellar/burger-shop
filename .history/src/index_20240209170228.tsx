import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "./store";
import { Provider } from "react-redux";

import "./style.scss";
import Information from "./pages/Information";
import FoodItem from "./pages/FoodItem";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/allergy-information",
    element: <Information />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/foods/:id",
    element: <FoodItem />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
