import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-bg text-fg selection:bg-accent/30 selection:text-fg min-h-screen antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
