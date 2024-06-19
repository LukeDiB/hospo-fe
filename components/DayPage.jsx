import { useParams } from "react-router-dom";

const DayPage = () => {
  const { day } = useParams();

  return (
    <div
      id="dayPage"
      style={{ "background-color": "#3D6B3B", 'margin': 0, 'padding': '1000px' }}
    >
      <h1 className="venue">RAMONA</h1>
      <h1 className="venue">BUNDOBUST</h1>
      <h1 className="venue">THREE LITTLE WORDS</h1>
      <h1 className="venue">SHACK</h1>
      <h1 className="venue">POINT BLANK SHOOTING</h1>
      <h1 className="venue">NELL'S</h1>
      <h2>{day.toUpperCase()}</h2>
    </div>
  );
};

export default DayPage;
