import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Support from "./LandingPage/Support/SupportPage";
import Home from "./LandingPage/Home/HomePage";
import Pricing from "./LandingPage/Pricing/PricingPage.jsx";
import Product from "./LandingPage/Product/ProductPage.jsx";
import About from "./LandingPage/About/AboutPage.jsx";
import Signup from "./LandingPage/Signup/Hero.jsx";
import NotFound from "./LandingPage/NotFound.jsx";
import Navbar from "./LandingPage/Navbar.jsx";
import Footer from "./LandingPage/Footer.jsx";
import "react-toastify/dist/ReactToastify.css";
import Login from "./LandingPage/Login.jsx";
import ProtectedRoute from "./LandingPage/ProtectRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
