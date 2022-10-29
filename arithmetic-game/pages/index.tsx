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
import { ModeButtonUp } from "../shared/startPage/buttonUp";
import { ModeButtonDown } from "../shared/startPage/buttonDown";
import { Title } from "../shared/startPage/title";
import { ButtonPlay } from "../shared/startPage/buttonPlay";
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
              margin-top: 38px;
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
              margin-top: 68px;
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
              margin-top: 81px;
              flex-direction: row;
              justify-content: space-between;
              margin-left: 60px;
              margin-right: 60px;
            `}
          >
            <ModeButtonUp>По возрастанию</ModeButtonUp>
            <ModeButtonDown>По убыванию</ModeButtonDown>
          </div>

          <div
            css={css`
              display: flex;
              justify-content: center;
              margin-top: 99px;
            `}
          >
            <ButtonPlay>Играть</ButtonPlay>
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
