import "./PointsList.css";

import PointItem from "../PointItem/PointItem";

function PointsList({ data, amount }) {
  const points = amount ? data.points.slice(0, amount) : data.points;
  return (
    <ul className="pointsListContainer">
      {points.map((point) => (
        <PointItem key={point.id} point={point} />
      ))}
    </ul>
  );
}

export default PointsList;
