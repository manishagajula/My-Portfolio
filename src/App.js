// import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ProjectPage } from "./pages/Project";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              {/* <About /> */}
              <Skills />
              <Work />
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
