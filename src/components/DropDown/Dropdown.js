import "./Dropdown.css";
const Dropdown = (props) => {
  return (
    <select
      className="drop"
      value={props.dropdownCurrentValue}
      onChange={(e) => props.onDropdownChange(e.target.value)}
    >
      {props.options.map((otionsvalue, i) => {
        <option key={i} value={otionsvalue}>
          {otionsvalue}
        </option>;
      })}
    </select>
  );
};

export default Dropdown;
