import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import TitleBlock from "./components/TitleBlock";
import OurMethod from "./components/about/OurMethod";
import WhatIsXthrive from "./components/about/WhatIsXthrive";
import Footer from "./components/Footer";
import Testimonials from "./components/testimonials/Testimonials";
import OurPhilosophy from "./components/philosophy/OurPhilosophy";
import FindGym from "./components/find-a-gym/FindGym";

function App() {
  return (
    <Router>
      <TitleBlock />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/what-is-xthrive" element={<WhatIsXthrive />} />
        <Route path="/our-philosophy" element={<OurPhilosophy />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/find-a-gym" element={<FindGym />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
