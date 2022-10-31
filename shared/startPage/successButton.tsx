import styled from "@emotion/styled";
import { css } from "@emotion/react";

const successButton = css({
  background: "#38DF7A",
  "box-shadow": "0px 4px 5px rgba(0, 0, 0, 0.1)",
  "border-radius": "20px",
  "font-family": "Helvetica",
  "font-style": "normal",
  "font-weight": "400",
  "font-size": "32px",
  "line-height": "44px",
  height: "60px",
  width: "260px",
  color: "#FFFFFF",
  cursor: "pointer",
});

export const SuccessButton = ({ changeStatusGame, children }) => {
  return (
    <button
      css={successButton}
      onClick={changeStatusGame}
    >
      {children}
    </button>
  );
};
