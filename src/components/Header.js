import "../css/header.scss";

function Header() {
  return (
    <div className="header_all_wrap">
      <div className="header_wrap wfull">
        <a href="/morement" className="main_logo">
          Morement
        </a>

        <div className="header_nav">
          <a href="/morement">portfolio</a>
          <a href="/morement">contact</a>
          <a href="/morement">resume</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
