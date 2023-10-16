// Import necessary modules and components
import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./Components/ErrorPage.tsx";
import Home from "./Components/Home.tsx";
import Iphone14Pro from "./Components/iPhone14Pro.tsx";
import Wrapper from "./Components/Wrapper.tsx";
import "./index.css";
import BuyPage from "./Components/BuyPage";
import ShoppingBag from "./Components/ShoppingBag";
import Watch from "./Components/Watch";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import WhereToBuy from "./Components/WhereToBuy.tsx";
import App from "./Components/App.tsx";
import NewiPadPro from "./Components/NewiPadPro.tsx";
import BuyPageWatch from "./Components/BuyPageWatch.tsx";
import BuyPageiPad from "./Components/BuyPageIPad.tsx";

// Create a BrowserRouter and define routes using createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />} errorElement="{<ErrorPage />}">
      <Route errorElement="{<ErrorPage />}">
        {/* Define various routes and their corresponding components */}
        <Route index element={<Home />} />
        <Route path="where-to-buy" element={<WhereToBuy />} />
        <Route path="iphone-14" element={<Iphone14Pro />} />
        <Route path="buy" element={<BuyPage />} />
        <Route path="shopping-bag" element={<ShoppingBag />} />
        <Route path="watch-pro" element={<Watch />} />
        <Route path="ipad-pro" element={<NewiPadPro />} />
        <Route path="buy-watch" element={<BuyPageWatch />} />
        <Route path="buy-ipad" element={<BuyPageiPad />} />
      </Route>
    </Route>
  )
);

// Render the application using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Wrap the app with RouterProvider */}
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
