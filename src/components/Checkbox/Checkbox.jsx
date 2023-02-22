import "./Checkbox.css";

const Checkbox = (props) => {
  const { name, labelValue, inputType, change, isChecked, additionalProps } =
    props;
  return (
    <div className="checkboxContainer">
      <input
        className="checkboxContainer__input"
        type={inputType}
        id={name}
        name={name}
        onChange={change}
        checked={isChecked}
        {...additionalProps}
      />
      <label htmlFor={name} className="checkboxContainer__label">
        {labelValue}
      </label>
    </div>
  );
};
export default Checkbox;
