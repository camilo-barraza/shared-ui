import { DateTime } from "luxon";
import React from "react";
import styled from "styled-components";
import { Div } from "../styledConfig/utils";

export const Test = () => {
  return (
    <Div>
      <pre>{JSON.stringify({ currentTime: DateTime.now() }, null, 2)}</pre>{" "}
    </Div>
  );
};
