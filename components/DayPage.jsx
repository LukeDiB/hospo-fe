import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DayPage = () => {
  const { day } = useParams();
  const [venue, setVenue] = useState("");
  const handleClick = () => {
    window.location.href = `/`;
  };

  const handleClickVenue = (event) => {
    setVenue(event.target.id);
    (window.location.href = `/${day}/${venue}`);
    // figure out how to bring 'ramona' into url
  };

  return (
    <div id={day}>
      <div id="venue-box">
        <button
          className="venue"
          onClick={handleClickVenue}
          id="ramona"
        >
          RAMONA
        </button>
        <button
          className="venue"
          onClick={handleClickVenue}
        >
          BUNDOBUST
        </button>
        <button
          className="venue"
          onClick={handleClickVenue}
        >
          THREE LITTLE WORDS
        </button>
        <button
          className="venue"
          onClick={handleClickVenue}
        >
          SHACK
        </button>
        <button
          className="venue"
          onClick={handleClickVenue}
        >
          POINT BLANK SHOOTING
        </button>
        <button
          className="venue"
          onClick={handleClickVenue}
        >
          NELL'S
        </button>
      </div>
      <h2 id="day">{day.toUpperCase()}</h2>
      <div id="hospo-div">
        <button
          id="hospo-bottom"
          onClick={() => handleClick()}
        >
          HOSPO
        </button>
      </div>
    </div>
  );
};

export default DayPage;
