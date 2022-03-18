import React, { useState } from "react";
import { Button } from "../Button";
import { Div } from "../styledConfig";
import { Modal } from "./index";

export default {
  component: Modal,
  title: "Overlay/Modal",
};

export const Base = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button w={300} onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Div w={300}>test content</Div>
      </Modal>
    </>
  );
};
