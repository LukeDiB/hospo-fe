import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import HospoButton from "./HospoButton";

const DayPage = () => {
  const { day } = useParams();
  const [venue, setVenue] = useState("");
  const navigate = useNavigate();
  

  const handleClickVenue = (event) => {
    const venueId = event.target.id;
    setVenue(venueId);
    navigate(`/${day}/${venueId}`);
  };

  return (
    <div id={day}>
      <div id="venue-box">
        <button
          className="venue"
          onClick={handleClickVenue}
          id="ramona"
          key="ramona"
        >
          RAMONA
        </button>
        <button
          className="venue"
          onClick={handleClickVenue}
          id="bundobust"
          key="bundobust"
        >
          BUNDOBUST
        </button>
        <button
          className="venue"
          onClick={handleClickVenue}
          id="threelittlewords"
          key="threelittlewords"
        >
          THREE LITTLE WORDS
        </button>
        <button
          className="venue"
          onClick={handleClickVenue}
          id='shack'
          key='shack'
        >
          SHACK
        </button>
        <button
          className="venue"
          onClick={handleClickVenue}
          id='pointblankshooting'
          key='pointblankshooting'
        >
          POINT BLANK SHOOTING
        </button>
        <button
          className="venue"
          onClick={handleClickVenue}
          id='nells'
          key='nells'
        >
          NELL'S
        </button>
      </div>
      <h2 id="day">{day.toUpperCase()}</h2>
      {HospoButton()}
    </div>
  );
};

export default DayPage;
