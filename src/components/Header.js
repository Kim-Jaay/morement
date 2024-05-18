import "../css/header.scss";

function Header() {
  return (
    <div className="header_all_wrap">
      <div className="header_wrap">
        <a href="/" className="header_main_logo">
          Morement
        </a>

        <div className="header_nav">
          <a href="/">portfolio</a>
          <a href="/">contact</a>
          <a href="/">resume</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
