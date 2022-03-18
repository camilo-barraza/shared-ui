import React, { useState } from "react";
import { TextInput } from ".";
import { Div } from "../../styledConfig";

export default {
  component: TextInput,
  title: "Inputs/TextInput",
};

export const Base = () => {
  const [text, setText] = useState("");
  return (
    <>
      <TextInput
        placeholder={"placeholder text"}
        value={text}
        onChange={(v) => setText(v)}
      />
      <Div mt={30}>
        <pre>{JSON.stringify({ text }, null, 2)}</pre>
      </Div>
    </>
  );
};
