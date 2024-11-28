import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(null);

  const handleChange = (e) => {
    if (!isActive) {
      setIsActive(true);
    } else if (e.target.value == "") {
      setIsActive(false);
    }
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
    setIsActive(false);
  };
  
  return { value, onChange: handleChange, isActive, reset };
};
