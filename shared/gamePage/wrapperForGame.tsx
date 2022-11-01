import styled from "@emotion/styled";

export const WrapperForGame = styled.div`
width: 980px;
height: 810px;
background-image: ${({theme}) => 
  `url(${(`/static/${theme}/background.png`)})`};
borderRadius: 50px;
`


