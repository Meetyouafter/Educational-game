import styled from "@emotion/styled";

export const WrapperForGame = styled.div`
  height: 100vh;
  background-image: ${({ theme }) =>
    `url(${`/static/${theme}/background.png`})`};
  background-repeat: round;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
