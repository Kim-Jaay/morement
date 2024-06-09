import "../css/header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_all_wrap">
      <div className="header_wrap wfull">
        <a href="/morement" className="main_logo">
          morement
        </a>

        <div className="header_nav">
          <a
            href={process.env.PUBLIC_URL + "/Resume_KimJuHyun.pdf"}
            download="Resume_김주현"
          >
            Resume
          </a>
          <Link to="/ContactForm">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
