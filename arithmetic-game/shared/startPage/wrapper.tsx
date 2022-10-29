import styled from "@emotion/styled";
import { css } from "@emotion/react";

const pageWrapper = css({
  width: "980px",
  height: "810px",
  left: "0px",
  top: "0px",
  background: "blue",
  margin: "0",
  position: "relative",
});

export const Wrapper = styled.div`
  ${pageWrapper};
`;
