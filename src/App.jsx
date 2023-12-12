import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import Navabar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Readmore from "./Components/Readmore";
import Event from "./Pages/Event";
import Menu from "./Pages/Menu";
import Carrers from "./Pages/Carrers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/ReadMore" element={<Readmore />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Career" element={<Carrers/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
