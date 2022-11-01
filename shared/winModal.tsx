import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { SuccessButton } from "./startPage/successButton";

const WinText = styled.span`
font-family: 'Circe Rounded Alt ';
font-style: normal;
font-weight: 400;
font-size: 128px;
line-height: 163px;
display: flex;
align-items: center;

background: linear-gradient(180deg, #FFF9D8 8.65%, #FFE44F 69.58%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`;

const Text = styled.span`
font-family: 'Circe Rounded';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 51px;
display: flex;
align-items: center;
text-align: center;
color: #5F40A1;

  `;

const Modal = styled.div<{ active }>`
  width: 980px;
  height: 810px;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  transform: scale(${(props) => (props.active ? 1 : 0)});
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 699px;
  height: 660px;
  border: 20px solid #7f75f0;
  border-image: linear-gradient(to left bottom #101f32, #7f75f0, #101f32);
  border-image-slice: 1;
  background: #ffffff;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const WinModal = ({ active, setActive }) => {
  return (
    <Modal active={active} onClick={() => setActive(false)}>
      <Container>
        <img
          css={css`
            position: absolute;
            width: 100px;
            top: 50px;
            left: 200px;
          `}
          src="/static/starForWinWindow.png"
        />
        <img
          css={css`
            position: absolute;
            width: 100px;
            top: 50;
            left: 0;
          `}
          src="/static/starForWinWindow.png"
        />
        <img
          css={css`
            position: absolute;
            width: 100px;
            top: 0;
            rigth: 0;
          `}
          src="/static/starForWinWindow.png"
        />
        <img
          css={css`
            position: absolute;
            width: 100px;
            bottom: 0;
            rigth: 0;
          `}
          src="/static/starForWinWindow.png"
        />
        <WinText>Победа!</WinText>
        <Text>Молодец! Ты успешно справился с заданием!</Text>
        <SuccessButton>Заново</SuccessButton>
      </Container>
    </Modal>
  );
};
