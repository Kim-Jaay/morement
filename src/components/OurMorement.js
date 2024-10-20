import React from "react";
import Footer from "./Footer";
import "../css/ourmorement.scss";

function OurMorement() {
  return (
    <div>
      <div className="ourmorement_all_wrap">
        <div className="wfull">
          <div className="ourmorement_con_wrap">
            <div className="morement_01 ourmorement_con" data-aos="fade-up">
              <div>More</div>
              <div className="ourmorement_con_in">지금 보다 더</div>
            </div>
            <div className="morement_02 ourmorement_con" data-aos="fade-up">
              <div>Moment</div>
              <div className="ourmorement_con_in">모든 순간을</div>
            </div>
            <div className="morement_03 ourmorement_con">
              <div data-aos="fade-up">Your</div>
              <div data-aos="fade-up" className="morement_square"></div>
              <div data-aos="fade-up">Morement</div>
            </div>

            <div className="morement_04 ourmorement_con">
              <img
                data-aos="fade-up"
                src={process.env.PUBLIC_URL + `/images/sub/square_01.png`}
                alt=""
              />
            </div>

            <div className="morement_05 ourmorement_con">
              <img
                data-aos="fade-up"
                src={process.env.PUBLIC_URL + `/images/sub/square_02.png`}
                alt=""
              />
            </div>

            <div className="morement_06 ourmorement_con">
              <img
                data-aos="fade-up"
                src={process.env.PUBLIC_URL + `/images/sub/square_03.png`}
                alt=""
              />
            </div>

            <div className="morement_07 ourmorement_con" data-aos="fade-up">
              <div>Morement</div>
              <div className="ourmorement_con_in">담아내다</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurMorement;
