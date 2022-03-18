import React from "react";
import { TooltipProvider } from ".";
import { Div } from "../styledConfig/utils";

export default {
  component: TooltipProvider,
  title: "Overlay/TooltipProvider",
};
export const Base = () => (
  <TooltipProvider tooltip="Delete" placement="bottom-start" mt={40}>
    <Div border p={10} w={300}>
      Hover me
    </Div>
  </TooltipProvider>
);
