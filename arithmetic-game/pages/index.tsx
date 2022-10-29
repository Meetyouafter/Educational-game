import { css } from "@emotion/react";
import {
  Animated,
  Basic,
  bounce,
  Combined,
  Pink,
  BasicExtended,
  ComponentSelectorsExtended,
} from "../shared/styles";
import { Wrapper } from "../shared/startPage/wrapper";
import { Container } from "../shared/startPage/container";
import { ModeButton1} from "../shared/startPage/modeButton1";
import {
  StartButton,
  Title,
} from "../shared/startPage/playBoard";
import { SliderInput } from "../shared/startPage/sliderInput";
import { useState } from "react";

const Home = () => {
  const [gameValues, setGameValues] = useState("A");
  const [objectsCount, setObjectsCount] = useState(2);

  return (
    <div>
      <Wrapper>
        <Container>
          <div
            css={css`
              margin-top: 40px;
              dsplay: flex;
            `}
          >
            <Title>Кол-во предметов</Title>
          </div>
          <div
            css={css`
              margin-top: 39px;
              width: 366px;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <SliderInput
              value={objectsCount}
              onChange={setObjectsCount}
              marks={[2, 3, 4, 5]}
            />
          </div>
          <div
            css={css`
              margin-top: 69px;
            `}
          >
            <Title>Значения</Title>
          </div>
          <div
            css={css`
              margin-top: 40px;
              width: 531px;
              display: flex;
              justify-content: space-between;
              align-item: center;
            `}
          >
            <SliderInput
              value={gameValues}
              onChange={setGameValues}
              marks={["A", 9, 19, 50, 99, 999]}
            />
          </div>

          <div
            css={css`
              display: flex;
              margin-top: 85px;
              flex-direction: row;
              justify-content: space-between;
              margin-left: 80px;
              margin-right: 40px;
            `}
          >
            <ModeButton1>По возрастанию</ModeButton1>
            <ModeButton2>По убыванию</ModeButton2>
          </div>

          <div
            css={css`
              display: flex;
              justify-content: center;
              margin-top: 103px;
            `}
          >
            <StartButton>Играть</StartButton>
          </div>
        </Container>
      </Wrapper>

      <Basic>Cool Styles</Basic>

      <Pink>Pink text2</Pink>

      <Combined>
        With <code>:hover</code>.
      </Combined>

      <Animated animation={bounce}>Let's bounce.</Animated>

      <ComponentSelectorsExtended>
        <BasicExtended>Nested</BasicExtended>
      </ComponentSelectorsExtended>
    </div>
  );
};

export default Home;
