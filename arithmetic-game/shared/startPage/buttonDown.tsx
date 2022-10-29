import styled from "@emotion/styled";
import { css } from "@emotion/react";

const modeButtonDown = css({
  background: "#FFD748",
  "width": "230px",
  "border-radius": "20px",
  "font-family": "Calibri",
  "font-style": "normal",
  "font-weight": "700",
  "font-size": "32px",
  "line-height": "39px",
  color: "#423F45",
});

export const ModeButtonDown = styled.button`
  ${modeButtonDown};
`;