import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import "./index.scss";

import SafeComponent from "./SafeComponent";
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";

const App = ({ children }) => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header />
    </SafeComponent>
    <div className="my-20">{children || <div>Home Page</div>}</div>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: (
      <App>
        <PDPContent />
      </App>
    ),
  },
]);

createRoot(document.getElementById("app")).render(
  <RouterProvider router={router} />
);
