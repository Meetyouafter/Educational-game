import styled from "@emotion/styled";

const Button = styled.button`
  background: #38df7a;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-family: Helvetica;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  height: 60px;
  width: 260px;
  color: #ffffff;
  cursor: pointer;
`;

export const SuccessButton = ({ changeStatusGame, children }) => {
  return <Button onClick={changeStatusGame}>{children}</Button>;
};
