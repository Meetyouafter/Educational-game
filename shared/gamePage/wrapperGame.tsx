import styled from "@emotion/styled";
import { css } from "@emotion/react";

const pageWrapper = css({
  width: "980px",
  height: "810px",
  backgroundImage: 'url("/static/candies/background.png")',
});

export const WrapperForGame = styled.div`
  ${pageWrapper};
`;
