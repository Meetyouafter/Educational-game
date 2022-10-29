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
import {
  FirstModeLine,
  ModeButton,
  SecondModeLine,
  StartButton,
  Title,
  Values,
} from "../shared/startPage/playBoard";

const Home = () => (
  <div>
    <Wrapper>
      <Container>
      <div
          css={css`
            margin-top: 57px;
          `}>
        <Title>Кол-во предметов</Title>
</div>
        <div
          css={css`
            margin-top: 16px;
            display: flex;
            justify-content: space-around;
          `}
        >
          <Values>2</Values>
          <Values>3</Values>
          <Values>4</Values>
          <Values>5</Values>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            margin-top: 2.58px;

          `}
        >
          <FirstModeLine></FirstModeLine>
        </div>
        <div
          css={css`
            margin-top: 54px;
          `}
        >
        <Title>Значения</Title>
        </div>
        <div
          css={css`
            margin-top: 18px;
            display: flex;
            justify-content: space-around;
          `}
        >
          <Values>А</Values>
          <Values>9</Values>
          <Values>19</Values>
          <Values>50</Values>
          <Values>99</Values>
          <Values>999</Values>
        </div>

        <div
          css={css`
            display: flex;
            margin-top: 3px;
            justify-content: center;
          `}
        >
          <SecondModeLine></SecondModeLine>
        </div>

        <div
          css={css`
            display: flex;
            margin-top: 73px;
            flex-direction: row;
            justify-content: space-around;
          `}
        >
          <ModeButton>По возрастанию</ModeButton>
          <ModeButton>По убыванию</ModeButton>
        </div>

        <div
          css={css`
            display: flex;
            justify-content: center;
            margin-top: 99.56px;
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

export default Home;
