import '../css/main.scss'

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
        </div>
      </div>
    </div>
  );
}

export default Main;
