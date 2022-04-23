import React, { useImperativeHandle, useRef } from "react";

const CustomeInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const onBlur = () => {};
  function focusOnInput() {
    inputRef.current.focus();
  }
  useImperativeHandle(ref, () => {
    return {
      focusFromParent: focusOnInput,
    };
  });
  return (
    <div>
      <input
        ref={inputRef}
        type={props.type}
        placeholder={props.placeholdertext}
        name={props.controlName}
        value={props.value}
        onChange={(e) => props.onValChange(e)}
        onBlur={onBlur}
      />
    </div>
  );
});

export default CustomeInput;
