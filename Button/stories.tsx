import React from "react";
import { Button } from ".";

export default {
  component: Button,
  title: "Inputs/Button",
};
export const Base = () => <Button w={300}>test</Button>;
export const Secondary = () => <Button variant="secondary">test</Button>;
