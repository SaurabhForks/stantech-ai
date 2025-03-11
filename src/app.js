import React, { lazy, Suspense } from "react"; // Import React, lazy, and Suspense for code splitting and lazy loading.
import ReactDom from "react-dom/client"; // Import ReactDom for rendering to the DOM.
import { BrowserRouter, Routes, Route, Outlet } from "react-router"; // Import routing components from react-router-dom.
import "./app.scss"; // Import global application styles.
import "./assets/styles/global.scss"; // Import global styles.
import "@fontsource/roboto/300.css"; // Import Roboto font weights.
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "./components/home/Home"; // Import the Home component.
import Header from "./components/header/Header"; // Import the Header component.
import NotFound from "./components/notFound/NotFound"; // Import the NotFound component.
import Footer from "./components/footer/Footer"; // Import the Footer component.
import store from "./redux/store"; // Import the Redux store.
import { Provider } from "react-redux"; // Import the Provider component from react-redux.

// Lazy load components for code splitting. These will be loaded only when they are needed.
const UserDetail = lazy(() => import("./components/userDetail/UserDetail"));
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));

/**
 * AppLayout component - A layout component that wraps the main content with the Header and Footer.
 * It uses the Outlet component from react-router-dom to render the child routes.
 */
const AppLayout = () => {
  return (
    <>
      <Header /> {/* Render the Header component. */}
      <Outlet /> {/* Render the child route component here. */}
      <Footer /> {/* Render the Footer component. */}
    </>
  );
};

// Create a root for rendering the application.
const root = ReactDom.createRoot(document.getElementById("root"));

// Render the application to the root element.
root.render(
  <React.StrictMode>
    {" "}
    {/* Enable strict mode for additional development checks. */}
    <Provider store={store}>
      {" "}
      {/* Provide the Redux store to the application. */}
      <BrowserRouter>
        {" "}
        {/* Enable routing with BrowserRouter. */}
        <Routes>
          {" "}
          {/* Define the application routes. */}
          <Route element={<AppLayout />}>
            {" "}
            {/* Define the layout route. */}
            <Route index element={<Home />} /> {/* Define the home route. */}
            <Route
              path="contact" // Define the contact route.
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  {/* Show a loading fallback while the component is loading. */}
                  <Contact /> {/* Render the Contact component. */}
                </Suspense>
              }
            />
            <Route
              path="about" // Define the about route.
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  {/* Show a loading fallback while the component is loading. */}
                  <About /> {/* Render the About component. */}
                </Suspense>
              }
            />
            <Route
              path="user-detail/:id" // Define the user detail route with a dynamic ID parameter.
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  {/* Show a loading fallback while the component is loading. */}
                  <UserDetail /> {/* Render the UserDetail component. */}
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />{" "}
            {/* Define the catch-all route for 404 errors. */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
