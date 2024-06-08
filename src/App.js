import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./css/common.scss";
import Main from "./components/Main";
import Header from "./components/Header";
import ToTop from "./components/ToTop";
import OurMorement from "./components/OurMorement";
import ProjectPage from "./components/ProjectPage";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div class="all_wrap">
      <div className="wrap">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/OurMorement" element={<OurMorement />} />
          <Route path="/:id" element={<ProjectPage />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

 


        <ToTop />
      </div>
    </div>
  );
}

export default App;
