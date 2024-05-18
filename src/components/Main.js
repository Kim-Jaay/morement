import "../css/main.scss";

function Main() {
  return (
    <div class="main_all_wrap">
      <div className="main_wrap">
        <div className="main">
          <video
            autoPlay
            loop
            muted
            src={process.env.PUBLIC_URL + "/images/main/main.mp4"}
            className="main_visual_video"
          />
          <div className="main_title_wrap">
            <div className="main_title main_title1">BREAK</div>
            <div className="main_title main_title2">OUT OF THE</div>
            <div className="main_title main_title3">FRAME</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
