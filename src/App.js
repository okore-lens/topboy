import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import Contact from "./components/layout/pages/contact/Contact";
import Discography from "./components/layout/pages/discography/Discography";
import Events from "./components/layout/pages/events/Events";
import Home from "./components/layout/pages/home/Home";
import Merch from "./components/layout/pages/merch/Merch";
import Services from "./components/layout/pages/services/Services";

function App() {
  return (
    <div className="App">
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
