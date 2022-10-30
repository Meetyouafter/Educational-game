import styled from "@emotion/styled";
import { css } from "@emotion/react";

const pageWrapper = css({
  width: "980px",
  height: "810px",
  backgroundImage: 'url("/static/startPageBackground.png")',
  margin: "0",
});

export const Wrapper = styled.div`
  ${pageWrapper};
`;
