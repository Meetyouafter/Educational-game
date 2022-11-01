import styled from "@emotion/styled";
import Item from "../gamePage/Item";

const Button = styled.button`
  background: #38df7a;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-family: Helvetica;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  height: 67px;
  width: 263px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 72px;
  margin-left: 4px;
`;

const handleClick = () => location.reload()

export const FinallButton = ({children}) => {
  return <Button onClick={handleClick}>{children}</Button>;
};
