import "../css/main.scss";
import Footer from "./Footer";
import Projects from "./Projects";

function Main() {
  return (
    <div class="main_all_wrap">
      <div className="main_wrap">
        <div className="main">
          <video
            autoPlay
            loop
            muted
            playsinline
            src={process.env.PUBLIC_URL + "/images/main/main3.mp4"}
            className="main_visual_video"
          />
          <div className="main_title_wrap1 wfull" data-aos="fade-up">
            
            <div className="main_title main_title1-1">
              I always try to craft
            </div>

            <div className="main_title main_title1-2">
              new experiences through challenges
            </div>

            <div className="main_title main_title1-3">
              and immersion.
            </div>

          </div>
        </div>
      </div>
      <Footer />
      <Projects />
    </div>
  );
}

export default Main;
