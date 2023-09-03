import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register/Register.tsx";
import Login from "./pages/Login/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
