import "./Input.css";

const Input = (props) => {
  const {
    name,
    labelValue,
    inputType,
    placeholder,
    required,
    change,
    isChecked,
    additionalProps,
    additionalContainerStyle,
  } = props;
  return (
    <div className="inputContainer" style={additionalContainerStyle}>
      <label htmlFor={name} className="inputContainer__label">
        {labelValue}:
      </label>
      <input
        className={`inputContainer__input ${name}`}
        type={inputType}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={change}
        checked={isChecked}
        {...additionalProps}
      />
    </div>
  );
};
export default Input;
