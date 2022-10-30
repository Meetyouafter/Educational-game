import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ContainerForItems = styled.div`
width: 886px;
height: 222px;
background-image: ${({design}) => 
  `url(${(`/static/${design}/container.png`)})`};
borderRadius: 50px;
`
