import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { SuccessButton } from "../startPage/successButton";

const winTextStyles = css({
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
});

const textStyles = css({
  fontFamily: "Circe Rounded",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "40px",
  lineHeight: "51px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#5F40A1",
});

export const WinWindow = ({ children }) => {
  return (
    <div
      css={css({
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
      })}
    >
      <img
        css={css`
          position: absolute;
          z-index: 1;
        `}
        src="/static/starForWinWindow.png"
      />
      <img
        css={css`
          position: absolute;
          z-index: 1;
        `}
        src="/static/starForWinWindow.png"
      />
      <img
        css={css`
          position: absolute;
          z-index: 1;
        `}
        src="/static/starForWinWindow.png"
      />
      <img
        css={css`
          position: absolute;
          z-index: 1;
        `}
        src="/static/starForWinWindow.png"
      />
      <span css={winTextStyles}>Победа!</span>
      <span css={textStyles}>Молодец! Ты успешно справился с заданием!</span>
    <SuccessButton>Заново</SuccessButton>
    </div>
  );
};
