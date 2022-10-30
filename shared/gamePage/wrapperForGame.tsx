import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const WrapperForGame = styled.div`
width: 980px;
height: 810px;
background-image: ${({design}) => 
  `url(${(`/static/${design}/background.png`)})`};
borderRadius: 50px;
`


