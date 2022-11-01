import styled from "@emotion/styled";

export const Button = ({ active, onClick, children }) => {
  const activeColor = "#FFD748";
  const notActiveColor = "rgba(255, 215, 72, 0.56)";

  const ModeButton = styled.button`
    background-color: ${active ? activeColor : notActiveColor};
    border-radius: 20px;
    font-family: Calibri;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #423f45;
    cursor: pointer;
    height: 50px;
  `;

  return <ModeButton onClick={onClick}>{children}</ModeButton>;
};
