import { css } from "@emotion/react";
import styled from "@emotion/styled";

const container = css({
    width: "100px",
    height: "100px",
    fontSize: "20px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    borderRadius: "100px",
  background: "blue",
boxShadow: "inset 0px 4px 25px rgba(0, 0, 0, 0.25)",
})
  
const EmptyItem = ({ text = '' }) => {
  return (
    <div css={container}>
      {text}
    </div>
  )
}

export default EmptyItem;