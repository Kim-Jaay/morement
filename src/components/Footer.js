import "../css/footer.scss";

import React from "react";

function Footer() {
  return (
    <div className="footer_all_wrap">
      <div className="wfull">
        <div className="footer_top">
          <a href="/morement" className="main_logo">
            Morement
          </a>
          <div>Juhyun Kim</div>
          <div>Service Designer & Front-End Developer</div>
        </div>
        <div className="sssgap"></div>
        <div className="footer_bot">
          <div>This website is designed for personal portfolios.</div>
          <div>This website is optimized for Chrome PC screens.</div>
          <div>© 2022-2024 Jay. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
