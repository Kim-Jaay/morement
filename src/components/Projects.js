import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import "../css/projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import MainProject from "../data/List.js";

function Projects() {
    useEffect(() => {
        AOS.init({});
    }, [])
  return (
    <div className="wfull">
      <div className="project_all_wrap">
        <div className="project_title">The Main Projects of Morement</div>
        <div className="sgap"></div>
        <div className="project_wrap">
          {MainProject.map((it, idx) => {
            return (
              <li
                key={idx}
                data-aos="fade-up"
                data-aos-delay={50 * idx}
                data-aos-duration="300"
              >
                <Link to={it.link}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/images/project/thumbnail/thumb_0${idx + 1}.png`
                    }
                    alt=""
                  />
                </Link>
              </li>
            );
          }).reverse()}
        </div>
      </div>
    </div>
  );
}

export default Projects;
