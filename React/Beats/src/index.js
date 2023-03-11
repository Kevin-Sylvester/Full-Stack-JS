import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider,useLocation} from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App  value= {''}/>,
  },
    {
    path: "/Specs",
    element: <App  value= {'Specs'}/>,
  },
  {
    path: "/Case",
    element: <App value= {'Case'}/>,
  },
  {
    path: "/Products",
    element: <App value= {'Products'}/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
