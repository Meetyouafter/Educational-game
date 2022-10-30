import styled from "@emotion/styled";
import { css } from "@emotion/react";
import cn from 'classnames';

export const ModeButtonDown = ({ active, changeClass }) => {
  
  return (
    <button
      css={css({
        background: `${active === "down" ? "#FFD748" : "rgba(255, 215, 72, 0.56)"}`,
        "width": "230px",
        "border-radius": "20px",
        "font-family": "Calibri",
        "font-style": "normal",
        "font-weight": "700",
        "font-size": "32px",
        "line-height": "39px",
        color: "#423F45",
        cursor: "pointer",
      })}
      onClick={changeClass}
    >
      Играть
    </button>
  );
};