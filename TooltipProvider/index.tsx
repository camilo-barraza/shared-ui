import { Placement } from "@popperjs/core";
import React, { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";
import { Div, DivThemeCSSProps } from "../styledConfig/utils";

type TooltipContentProps = {
  isActionable?: boolean;
};
export const TooltipContent = styled(Div)<TooltipContentProps>`
  ${(p) => p.theme.css.body4};
  color: ${(p) => p.theme.colors.white};
  background: ${(p) => p.theme.colors.black};
  border-radius: 4px;
  padding: 10px;
  pointer-events: none;
  z-index: 1000;
`;

type TooltipProps = {
  tooltip: JSX.Element | string;
  placement?: Placement;
} & DivThemeCSSProps;
export const TooltipProvider: React.FC<TooltipProps> = ({
  tooltip,
  placement = "top-start",
  children,
  ...props
}) => {
  const [isDisplayingTooltip, setIsDisplayingTooltip] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement,
    }
  );

  useEffect(() => {
    if (update) update();
  }, [isDisplayingTooltip]);

  return (
    <Div
      dim={"100%"}
      ref={setReferenceElement}
      onMouseOver={() => setIsDisplayingTooltip(true)}
      onMouseOut={() => setIsDisplayingTooltip(false)}
      {...props}
    >
      {children}
      {isDisplayingTooltip && tooltip && (
        <TooltipContent
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {tooltip}
        </TooltipContent>
      )}
    </Div>
  );
};
