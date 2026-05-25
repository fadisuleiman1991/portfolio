import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-fg antialiased selection:bg-accent/30 selection:text-fg">
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
