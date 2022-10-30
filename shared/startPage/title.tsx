import styled from "@emotion/styled";
import { css } from "@emotion/react";

const title = css({
  "font-family": "Helvetica",
  "font-style": "normal",
  "font-weight": "700",
  "font-size": "33px",
  "line-height": "45px",
  display: "flex",
  "align-items": "center",
  "text-align": "center",
  color: "#423F45",
  "justify-content": "center",
});

export const Title = styled.div`
  ${title};
`;
