import Days from "./Days";

function Home() {
    return (
      <>
          <p id="hospo">HOSPO</p>
          <div id="homepage">
            <div id="wrap">
              <img
                id="homeimage"
                src="src/assets/Drinks.png"
              />
            </div>
            <div id="textoverlap">
              <p className="hometext">FOR THE INDUSTRY</p>
              <p className="hometext">BY THE INDUSTRY</p>
            </div>
        </div>
        <Days id='days'/>
      </>
    );
}

export default Home