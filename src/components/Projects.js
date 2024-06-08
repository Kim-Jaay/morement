import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import MainProject from "../data/MainList.js";
import AllProject from "../data/AllList.js";

function Projects() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="wfull">
      <div className="project_all_wrap">
        <div className="main_project_all_wrap">
          <div className="project_title"  data-aos="fade-up"
          data-aos-duration="500">The Main Projects of Morement</div>
          <div className="main_project_wrap">
            {MainProject.map((it, idx) => {
              return (
                <div className="main_project"
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
                </div>
              );
            }).reverse()}
          </div>
        </div>

        <div className="all_project_all_wrap">
          <div className="project_title"  data-aos="fade-up"
          data-aos-duration="500">All Projects of Morement</div>
          <div className="all_project_wrap">
            {AllProject.map((it, idx) => {
              return (
                <div className="all_project"
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={50 * idx}
                  data-aos-duration="300"
                >
                  <Link to={it.link}>
                    <div className="all_project_list">
                      <div className="all_project_list_title">
                        <div>{it.title}</div>
                      </div>

                      <div className="all_project_list_field">
                        <div>{it.field}</div>
                      </div>

                      <div className="all_project_list_desc">
                        <div>{it.des2}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }).reverse()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
