import { css } from "@emotion/react";
import { Container } from "../shared/startPage/container";
import { Button } from "../shared/startPage/button";
import { Title } from "../shared/startPage/title";
import { SuccessButton } from "../shared/startPage/successButton";
import { SliderInput } from "../shared/startPage/sliderInput";
import { useState } from "react";
import { WrapperForGame } from "../shared/gamePage/wrapperForGame";
import { WrapperForStart } from "../shared/startPage/wrapper";
import { ContainerForItems } from "../shared/gamePage/containerForItems";
import { GameElement } from "../shared/gamePage/element";
import { WinWindow } from "../shared/gamePage/winWindow";

const Home = () => {
  const [countOfElementsForGame, setCountOfElementsForGame] = useState("A");
  const [typeOfElementsForGame, setTypeOfElementsForGame] = useState(2);
  const [gameMode, setGameMode] = useState("asc");
  const [settingOfGame, setSettingOfGame] = useState(true);

  const handleGameModeChange = (type: string) => () => {
    setGameMode(type);
  };

  const changeStatusGame = () => {
    setSettingOfGame(!settingOfGame);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const variantesOfDesign = ["candies", "flowers", "toys", "coins"];
  const design = variantesOfDesign[randomIntFromInterval(0, 3)];

  const gameSettingPage = (
    <div>
      <WrapperForStart>
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
              value={typeOfElementsForGame}
              onChange={setTypeOfElementsForGame}
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
              value={countOfElementsForGame}
              onChange={setCountOfElementsForGame}
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
            <Button
              active={gameMode === "asc"}
              onClick={handleGameModeChange("asc")}
            >
              По возрастанию
            </Button>
            <Button
              active={gameMode === "desc"}
              onClick={handleGameModeChange("desc")}
            >
              По убыванию
            </Button>
          </div>

          <div
            css={css`
              display: flex;
              justify-content: center;
              margin-top: 99px;
            `}
          >
            <SuccessButton changeStatusGame={changeStatusGame}>
              Играть
              </SuccessButton>
          </div>
        </Container>
      </WrapperForStart>

      <WinWindow>
      <div
            css={css`
              padding-left: 300px;
            `}
          >
          123456
          </div>
      </WinWindow>

    </div>
  );

  const gamePage = (
    <div>
      <WrapperForGame design={design}>
      <div
      css={css`
        height: 500px;
        position:relative;
      `}
    >
          <GameElement
            count={countOfElementsForGame}
            mode={typeOfElementsForGame}
            design={design}
            gameMode={gameMode}
          />
        </div>
        <ContainerForItems design={design} />
      </WrapperForGame>
    </div>
  );

  return settingOfGame ? gameSettingPage : gamePage;
};

export default Home;
