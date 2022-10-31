/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const textStyles = css({
  fontFamily: "Calibri",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "56px",
  lineHeight: "68px",
  letterSpacing: "2px",
  color: "#FFFFFF",
  position: "absolute",
  zIndex: "1",
  paddingLeft: "70px",
  paddingTop: "70px",
});
  
const Item = ({ text = '', design, idx }) => {
  return (
    <div
    css={css`
      position: absolute;
    `}
  >
    <img
      css={css`
        position: absolute;
        z-index: 1;
      `}
      src={`/static/candies/item1.png`}
    />
    <span css={textStyles}>{text}</span>
  </div>
  )
}

export default Item;