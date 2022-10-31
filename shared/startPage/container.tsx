import styled from "@emotion/styled";
import { css } from "@emotion/react";

const container = css({
  "box-sizing": "border-box",
  width: "699px",
  height: "660px",
  border: "20px solid #7F75F0",
  "border-image": "linear-gradient(to left bottom #101F32, #7F75F0, #101F32)",
  "border-image-slice": "1",
  background: "#ffffff",
  "border-radius": "40px",
  alignItems: "center",
});

export const Container = styled.div`
  ${container};
`;
