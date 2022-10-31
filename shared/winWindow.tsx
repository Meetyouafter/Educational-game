import styled from "@emotion/styled";
import { SuccessButton } from "./startPage/successButton";

const WinText = styled.span`
fontFamily: "Circe Rounded Alt ",
fontStyle: "normal",
fontWeight: "400",
fontSize: "128px",
lineHeight: "163px",
background: "linear-gradient(180deg, #FFF9D8 8.65%, #FFE44F 69.58%)",
webkitBackgroundClip: "text",
webkitTextFillColor: "transparent",
backgroundClip: "text",
textFillColor: "transparent",
`;

const Text = styled.span`
  fontFamily: "Circe Rounded",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "40px",
  lineHeight: "51px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#5F40A1",
  `;

const Container = styled.div`
  "box-sizing": "border-box",
  width: "699px",
  height: "660px",
  border: "20px solid #7F75F0",
  "border-image":
    "linear-gradient(to left bottom #101F32, #7F75F0, #101F32)",
  "border-image-slice": "1",
  background: "#ffffff",
  "border-radius": "40px",
  marginLeft: "300px",
  `;

export const WinWindow = () => {
  return (
    <Container>
      <img src="/static/starForWinWindow.png" />
      <img src="/static/starForWinWindow.png" />
      <img src="/static/starForWinWindow.png" />
      <img src="/static/starForWinWindow.png" />
      <WinText>Победа!</WinText>
      <Text>Молодец! Ты успешно справился с заданием!</Text>
      <SuccessButton>Заново</SuccessButton>
    </Container>
  );
};
