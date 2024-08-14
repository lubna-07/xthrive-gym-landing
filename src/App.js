import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import WhatIsXthrive from "./components/what-is-xthrive/WhatIsXthrive";
import Testimonials from "./components/testimonials/Testimonials";
import OurPhilosophy from "./components/philosophy/OurPhilosophy";
import FindGym from "./components/find-a-gym/FindGym";
import { MainLayout, SimpleLayout } from "./Layout";
import XthriveHsr from "./components/find-a-gym/gyms/XthriveHsr";
import Landing from "./components/landing/Landing";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Landing /></MainLayout>} />
        <Route path="/what-is-xthrive" element={<MainLayout><WhatIsXthrive /></MainLayout>} />
        <Route path="/our-philosophy" element={<MainLayout><OurPhilosophy /></MainLayout>} />
        <Route path="/testimonials" element={<MainLayout><Testimonials /></MainLayout>} />
        <Route path="/find-a-gym" element={<SimpleLayout><FindGym /></SimpleLayout>} />
        <Route path="/find-a-gym/xthrive-hsr" element={<MainLayout><XthriveHsr /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
