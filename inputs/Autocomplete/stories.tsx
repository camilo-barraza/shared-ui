import React, { useState } from "react";
import { Autocomplete } from ".";

export default {
  component: Autocomplete,
  title: "Inputs/Autocomplete",
};

const options = [
  { value: "test", label: "Test1" },
  { value: "test 2", label: "Test 2" },
  { value: "test 3", label: "Test 3" },
];

export const Base = () => {
  const [value, setValue] = useState(options[0].value);

  return (
    <Autocomplete
      label="Test label"
      placeholder="Select option..."
      onChange={(v) => setValue(v)}
      value={value}
      options={options}
    />
  );
};
