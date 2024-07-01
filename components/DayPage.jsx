import { useParams } from "react-router-dom";

const DayPage = () => {
  const { day } = useParams();

  return (
    <div id={day}>
      <div id="venue-box">
        <button className="venue">RAMONA</button>
        <button className="venue">BUNDOBUST</button>
        <button className="venue">THREE LITTLE WORDS</button>
        <button className="venue">SHACK</button>
        <button className="venue">POINT BLANK SHOOTING</button>
        <button className="venue">NELL'S</button>
      </div>
      <h2 id="day">{day.toUpperCase()}</h2>
      <button id="hospo-bottom" link='/'>HOSPO</button>
    </div>
  );
};

export default DayPage;
