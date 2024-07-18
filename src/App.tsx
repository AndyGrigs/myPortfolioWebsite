import { Routes, Route } from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About"; // Ensure this path is correct
import { Projects } from "./pages/Projects"; // Ensure this path is correct
import { Certification } from "./pages/Certification"; // Ensure this path is correct
import { Contacts } from "./pages/Contacts"; // Ensure this path is correct

// Create a history object

const App: React.FC = () => {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </section>
  );
};

export default App;
