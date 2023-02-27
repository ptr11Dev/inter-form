import "./PointItem.css";

const PointItem = (props) => {
  const { id, title, description } = props.point;
  return (
    <li key={id} className="pointItemContainer">
      <div className="pointItemContainer__icon">
        <div className="sampleIcon"></div>
      </div>
      <div className="pointItemContainer__content">
        <h2 className="pointItemContainer__title">{title}</h2>
        <p className="pointItemContainer__description">{description}</p>
      </div>
    </li>
  );
};
export default PointItem;
