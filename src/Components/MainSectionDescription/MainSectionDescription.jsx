import "./MainSectionDescription.css";

function MainSectionDescription() {
  return (
    <>
      <section className="Description">
        <div className="descriptionContenitor">
          <div className="videoSea videoplayer">
            {/* <img src="../Assets/mare-barca.jpg" alt="JI, Mavic Pro - Sea and Boat" /> */}
            <video
              width="380"
              controls
              playsInline
              preload="auto"
              muted
              autoPlay
            >
              <source src="../Assets/positano.mp4" type="video/mp4" autoPlay />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="motto">
            <p>
              "Sailing is like living in another world: a world of peace,
              tranquility and beauty. The sea is not just a place to go, but a
              way of being."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSectionDescription;