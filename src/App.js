import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./css/common.scss";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div class="all_wrap">
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
