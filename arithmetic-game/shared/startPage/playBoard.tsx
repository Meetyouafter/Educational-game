import styled from "@emotion/styled";
import { css } from "@emotion/react";

const title = css({
  "font-family": "Helvetica",
  "font-style": "normal",
  "font-weight": "700",
  "font-size": "32px",
  "line-height": "44px",
  display: "flex",
  "align-items": "center",
  "text-align": "center",
  color: "#423F45",
  "justify-content": "center",
});

export const Title = styled.div`
  ${title};
`;

const startButton = css({
  background: "#38DF7A",
  "box-shadow": "0px 4px 5px rgba(0, 0, 0, 0.1)",
  "border-radius": "20px",
  "font-family": "Helvetica",
  "font-style": "normal",
  "font-weight": "400",
  "font-size": "32px",
  "line-height": "44px",
  color: "#FFFFFF",
});

export const StartButton = styled.button`
  ${startButton};
`;

const modeButton = css({
  background: "#FFD748",
  "width": "250px",
  "border-radius": "20px",
  "font-family": "Calibri",
  "font-style": "normal",
  "font-weight": "700",
  "font-size": "32px",
  "line-height": "39px",
  color: "#423F45",
});

export const ModeButton = styled.button`
  ${modeButton};
`;

