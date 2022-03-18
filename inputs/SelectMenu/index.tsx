import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePopper } from "react-popper";
import { Div, DivThemeCSSProps } from "shared-ui/styledConfig";

export const SelectMenuBackdrop = styled(Div)`
  position: fixed;
  top: 0px;
  left: 0px;
  margin: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 99999999;
  display: flex;
`;

export const SelectMenuDiv = styled(Div)`
  padding: 16px;
  background-color: white;
  border: solid 1px ${(p) => p.theme.colors.gray5};
  position: absolute;
  border-radius: 16px;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  margin-top: 4px;
  max-height: 300px;
  z-index: 10000000000;
  box-shadow: 0px 0px 16px ${(p) => p.theme.colors.black};
  ${(p) => p.theme.css.scrollbarDark};
`;

type Props = {
  isOpen?: boolean;
  onClose?: any;
  children: any;
} & DivThemeCSSProps;

export const SelectMenu = ({
  isOpen = false,
  onClose = null,
  children,
  ...props
}: Props) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: "bottom",
    }
  );

  useEffect(() => {
    if (update) update();
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Div ref={setReferenceElement} pRelative {...props}>
          <SelectMenuBackdrop onClick={onClose} />
          <SelectMenuDiv
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            {children}
          </SelectMenuDiv>
        </Div>
      )}
    </>
  );
};
