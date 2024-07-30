import { useParams } from "react-router-dom";
import HospoButton from "./HospoButton";

function VenuePage() {
  const { day, venue } = useParams();
  console.log(useParams());
  return (
    <div id="venue-page-div">
      <h1 id="venue-page-title">{venue.toUpperCase()}</h1>
      <div id="venue-page-title-div"></div>
      <h2>{day.toUpperCase()}</h2>
      <h3>50% OFF ENTIRE BILL</h3>
      {HospoButton()}
    </div>
  );
}

export default VenuePage;
