import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./Components/ErrorPage.jsx";
import Home from "./Components/Home.jsx";
import Iphone14Pro from "./Components/Iphone14Pro.tsx";
import Wrapper from "./Components/Wrapper.tsx";
import "./index.css"
import BuyPage from './components/BuyPage';




import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import WhereToBuy from "./Components/WhereToBuy.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="where-to-buy" element={<WhereToBuy />} />
        <Route path="iphone-14" element={<Iphone14Pro />} />
        <Route path="where-to-buy/buy" element={<BuyPage/>} />
    
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
