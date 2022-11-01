import styled from "@emotion/styled";

export const Container = styled.div`
  box-sizing: border-box;
  width: 660px;
  height: 620px;
  border: 20px solid;
  border-image: linear-gradient(
    to left bottom,
    rgba(127, 117, 240, 1),
    rgba(16, 31, 50, 1)
  );
  border-image-slice: 1;
  background: #ffffff;
  border-radius: 40px;
  align-items: center;
  margin-top: 31px;
  margin-right: 5px;
`;
