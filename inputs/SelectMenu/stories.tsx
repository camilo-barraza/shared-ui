import React, { useState } from "react";
import { SelectMenu } from ".";
import { MenuItem } from "../..";
import { Div } from "../../styledConfig";
import { Button } from "../../buttons";

export default {
  component: SelectMenu,
  title: "Inputs/SelectMenu",
};
const menuItems = [
  { value: "test", label: "Test1" },
  { value: "test 2", label: "Test 2" },
  { value: "test 3", label: "Test 3" },
];

export const Base = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [value, setValue] = useState(menuItems[0].value);

  return (
    <Div w={300}>
      <Button onClick={() => setIsMenuOpen(true)}>Open Menu</Button>
      <SelectMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        {menuItems.map((o, index) => (
          <Div key={index}>
            <MenuItem
              isLast={index === menuItems.length - 1}
              isSelected={value === o.value}
              onClick={() => {
                setValue(o.value);
                setIsMenuOpen(false);
              }}
            >
              {o.label}
            </MenuItem>
          </Div>
        ))}
      </SelectMenu>
    </Div>
  );
};
