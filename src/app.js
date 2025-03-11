import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import "./app.scss";
import Home from "./components/home/Home";
const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
