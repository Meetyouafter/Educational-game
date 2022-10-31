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
    border: "1px solid green",
})
  
const Item = ({ text = '' }) => {
  return (
    <div css={container}>
      {text}
    </div>
  )
}

export default Item;