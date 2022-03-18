import React from "react";
import { Div } from "shared-ui/styledConfig";
import styled from "styled-components";
import { closeIcon } from "../icons";

export const ModalContainer = styled(Div)`
  top: 0px;
  left: 0px;
  margin: 0px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000000000;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  div {
    pointer-events: auto;
  }
`;

export const ModalBackdrop = styled(Div)`
  position: fixed;
  top: 0px;
  left: 0px;
  margin: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 99999999;
  background: black;
  opacity: 0.38;
`;

export const ModalWrapper = styled(Div)`
  background: ${(props) => props.theme.colors.white};
  padding: 32px 40px;
  border-radius: 8px;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.32);
`;

export const ModalCloseIcon = styled(Div)`
  height: 0;
  display: flex;
  flex-direction: row-reverse;
`;

export const Modal = ({
  isOpen = false,
  onClose = null,
  children,
  withCloseIcon = true,
  withBackdropClose = true,
  className = "",
}) => {
  return (
    <>
      {isOpen && (
        <Div className={className}>
          <ModalBackdrop onClick={withBackdropClose ? onClose : null} />
          <ModalContainer>
            <ModalWrapper>
              {withCloseIcon && (
                <ModalCloseIcon>
                  <Div clickable mt={-10} mr={-20} onClick={onClose}>
                    {closeIcon}
                  </Div>
                </ModalCloseIcon>
              )}
              <Div>{children}</Div>
            </ModalWrapper>
          </ModalContainer>
        </Div>
      )}
    </>
  );
};
