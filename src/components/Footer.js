import "../css/footer.scss";

import React from "react";

function Footer() {
  return (
    <div className="footer_all_wrap">
      <div className="wfull">
        <div className="footer_title">Our Morement</div>
        <div className="footer_con">
          <div className="footer_top">
            <a href="/morement" className="main_logo">
              Jay, morement
            </a>
            <div>Juhyun Kim</div>
            <div>Service Designer & Front-End Developer</div>
            <div className="ssgap"></div>
            <div><b>T </b><a href="callto:01075788546"> +82 10 7578 8546</a></div>
            <div><b>E </b><a href="mailto:kimjay.824@gmail.com"> kimjay.824@gmail.com</a></div>
          </div>

          <div className="footer_bot">
            <div>This website is designed for personal portfolios.</div>
            <div>© 2022-2024 Jay. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
