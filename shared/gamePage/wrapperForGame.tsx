import styled from "@emotion/styled";

export const WrapperForGame = styled.div`
width: 980px;
height: 810px;
background-image: ${({design}) => 
  `url(${(`/static/${design}/background.png`)})`};
borderRadius: 50px;
`


