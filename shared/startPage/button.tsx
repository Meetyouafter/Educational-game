import styled from "@emotion/styled";
import { css } from "@emotion/react";
import cn from 'classnames';

export const Button = ({ active, onClick, children }) => {

  const activeColor = "#FFD748";
  const notActiveColor = "blue";
console.log(active)  
  return (
    <button
      css={css({
        backgroundColor: `${{active} ? "red" : "green"}`,
        "border-radius": "20px",
        "font-family": "Calibri",
        "font-style": "normal",
        "font-weight": "700",
        "font-size": "32px",
        "line-height": "39px",
        color: "#423F45",
        cursor: "pointer",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};