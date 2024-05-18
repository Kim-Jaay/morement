import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./css/common.scss";
import Main from "./components/Main";
import Header from "./components/Header";

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
      </div>
    </div>
  );
}

export default App;
