import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import "./app.scss";
import "./assets/styles/global.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import NotFound from "./components/notFound/NotFound";
import Footer from "./components/footer/Footer";
import store from "./redux/store";
import { Provider } from "react-redux";
const UserDetail = lazy(() => import("./components/userDetail/UserDetail"));
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route
              path="contact"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="user-detail/:id"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <UserDetail />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
