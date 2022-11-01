import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { SuccessButton } from "./startPage/successButton";
import { FinallButton } from "./startPage/finallButton";

const WinText = styled.span`
font-family: Circe Rounded Alt;
font-style: normal;
font-weight: 700;
font-size: 128px;
line-height: 163px;
display: flex;
align-items: center;
margin-top: 10px;

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
font-size: 44px;
margin-top: 35px;
line-height: 51px;
display: flex;
akign-text: center;
align-items: center;
text-align: center;
color: #5F40A1;
`;

const Modal = styled.div`
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
`;

const Container = styled.div`
  box-sizing: border-box;
  margin-left: 11px;
  margin-top: 10px;
  width: 660px;
  height: 520px;
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

const handleClick = (e) => {
  e.prevent.default();
  SpeechRecognitionAlternative
}

export const WinModal = () => {
  return (
    <Modal>
      <Container>
        <img
          css={css`
            position: absolute;
            width: 140px;
            top: 121px;
            left: 123px;
          `}
          src="/static/starForWinWindow.png"
        />
        <img
          css={css`
            position: absolute;
            width: 220px;
            top: 480px;
            left: 56px;
          `}
          src="/static/starForWinWindow.png"
        />
        <img
          css={css`
            position: absolute;
            width: 220px;
            top: 246px;
            left: 695px;
          `}
          src="/static/starForWinWindow.png"
        />
        <img
          css={css`
            position: absolute;
            width: 125px;
            top: 560px;
            left: 753px;
          `}
          src="/static/starForWinWindow.png"
        />
        <WinText>Победа!</WinText>
        <Text>Молодец! Ты успешно справился с заданием!</Text>
        <FinallButton>Заново</FinallButton>
      </Container>
    </Modal>
  );
};
