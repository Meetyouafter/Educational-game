import { css } from "@emotion/react";

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
  
const Item = ({ text = '', theme, id}) => {
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
      src={`/static/${theme}/${id}`}
    />
    <span css={textStyles}>{text}</span>
  </div>
  )
}

export default Item;