import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Header } from "./components/organisms/Header";

import "./index.css";
import { Error } from "./pages/Error";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
