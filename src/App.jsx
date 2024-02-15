import './App.css'
import Nav from './components/Nav'
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Services from "../src/pages/Services";
import Works from "../src/pages/Works";
import Pricing from "../src/pages/Pricing";
import Contact from "../src/pages/Contact";
import NotFound from './pages/NotFound';
import {Routes,Route} from "react-router-dom";



function App() {

  return (
    <>
    <Nav/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
