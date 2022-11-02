import styled from "@emotion/styled";
import { PrimeButton } from "./PrimeButton";

const WinText = styled.span`
  font-family: Circe Rounded Alt;
  font-style: normal;
  font-weight: 700;
  font-size: 128px;
  line-height: 163px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  background: linear-gradient(180deg, #fff9d8 8.65%, #ffe44f 69.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Text = styled.span`
  font-family: "Circe Rounded";
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  margin-top: 35px;
  margin-bottom: 73px;
  line-height: 51px;
  display: flex;
  akign-text: center;
  align-items: center;
  text-align: center;
  color: #5f40a1;
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
  position: absolute;
  z-index: 1;
`;

const Container = styled.div`
  box-sizing: border-box;
  margin-left: 11px;
  margin-top: 10px;
  width: 660px;
  height: 520px;
  border: 20px solid #7f75f0;
  border-image: linear-gradient(
    to left bottom,
    rgba(103, 223, 137, 1),
    rgba(255, 255, 255, 0.8),
    rgba(170, 146, 210, 0.7),
    rgba(141, 103, 223, 0)
  );
  border-image-slice: 1;
  background: #ffffff;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const FirstStar = styled.img`
  position: absolute;
  width: 140px;
  top: 121px;
  left: 123px;
`;

const SecondStar = styled.img`
  position: absolute;
  width: 220px;
  top: 480px;
  left: 56px;
`;

const ThirdStar = styled.img`
  position: absolute;
  width: 220px;
  top: 246px;
  left: 695px;
`;

const FourthStar = styled.img`
  position: absolute;
  width: 125px;
  top: 560px;
  left: 753px;
`;
const handleClick = () => location.reload();

export const WinModal = () => {
  return (
    <Modal>
      <Container>
        <FirstStar src="/static/starForWinWindow.png" />
        <SecondStar src="/static/starForWinWindow.png" />
        <ThirdStar src="/static/starForWinWindow.png" />
        <FourthStar src="/static/starForWinWindow.png" />
        <WinText>Победа!</WinText>
        <Text>Молодец! Ты успешно справился с заданием!</Text>
        <PrimeButton onClick={handleClick}>Заново</PrimeButton>
      </Container>
    </Modal>
  );
};
