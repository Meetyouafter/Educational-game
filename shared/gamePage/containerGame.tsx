import styled from "@emotion/styled";
import { css } from "@emotion/react";

const container = css({
width: "886px",
height: "222px",
backgroundImage: 'url("/static/candies/container.png")',
borderRadius: "50px",
});

export const ContainerForItems = styled.div`
  ${container};
`;
