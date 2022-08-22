import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Discography from "./pages/discography/Discography";
import Events from "./pages/events/Events";
import Home from "./pages/home/Home";
import Merch from "./pages/merch/Merch";
import Services from "./pages/services/Services";

function App() {
  return (
    <div className="App">
      {/* Hello TopBoy */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
