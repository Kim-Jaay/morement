import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./css/common.scss";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ToTop from "./components/ToTop";

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
        </Routes>
        <Footer/>
        <Projects/>


        <ToTop />
      </div>
    </div>
  );
}

export default App;
