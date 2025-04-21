import { forwardRef, useImperativeHandle, useState } from "react";

import "./../components.css";

const TTMFETextInput = forwardRef(({ label, onChange }, ref) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    onChange(event.target.value);
    setValue(event.target.value);
  };

  useImperativeHandle(ref, () => ({
    clear: () => setValue(""),
  }));

  return (
    <input
      type="text"
      placeholder={label}
      className="ttmfe:p-2 ttmfe:p-x-4 ttmfe:text-black ttmfe:bg-white ttmfe:border ttmfe:rounded-lg"
      value={value}
      onChange={handleChange}
    />
  );
});

export default TTMFETextInput;
