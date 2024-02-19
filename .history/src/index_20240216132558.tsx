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
// import ErrorBoundary from "./components/ErrorBoundary";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import ErrorBoundary from "./components/ErrorBoundary";

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
  <Provider store={store}>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </Provider>
);
