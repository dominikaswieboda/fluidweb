import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import { PortfolioPage } from "./components/PortfolioPage.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/fluidweb">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolio/:id" element={<PortfolioPage />} />
    </Routes>
  </BrowserRouter>
);