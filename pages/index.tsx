import { Container } from "../shared/startPage/container";
import { Button } from "../shared/startPage/button";
import { Title } from "../shared/startPage/title";
import { MajorButton } from "../shared/startPage/majorButton";
import { SliderInput } from "../shared/startPage/sliderInput";
import { useState } from "react";
import { WrapperForGame } from "../shared/gamePage/wrapperForGame";
import { WrapperForStart } from "../shared/startPage/wrapperForStart";
import styled from "@emotion/styled";
import GameLogic from "../shared/gamePage/gameLogic";

const Home = () => {
  const [countOfElementsForGame, setCountOfElementsForGame] = useState(2);
  const [typeOfElementsForGame, setTypeOfElementsForGame] = useState("A");
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

  const gameModes = {
    ASC_MODE: "asc",
    DESC_MODE: "desc",
  };

  const themes = ["candies", "flowers", "toys", "coins"];
  const theme = themes[randomIntFromInterval(0, 3)];

  const BlockForFirstTitle = styled.div`
    display: flex;
    margin-top: 41px;
    margin-left: 183px;
  `;
  const BlockForSecondTitle = styled.div`
    margin-top: 70px;
  `;
  const BlockForFistSlider = styled.div`
    margin-top: 36px;
    margin-left: 157px;
    width: 355px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const BlockForSecondSlider = styled.div`
    margin-top: 38px;
    margin-left: 76px;
    width: 519px;
    display: flex;
    justify-content: space-between;
    align-item: center;
  `;
  const GameModeControls = styled.div`
    display: flex;
    margin-top: 81px;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 75px;
    margin-right: 70px;
  `;
  const StartGameButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 95px;
  `;

  const gameSettingPage = (
    <div>
      <WrapperForStart>
        <Container>
          <BlockForFirstTitle>
            <Title>Кол-во предметов</Title>
          </BlockForFirstTitle>
          <BlockForFistSlider>
            <SliderInput
              value={countOfElementsForGame}
              onChange={setCountOfElementsForGame}
              marks={[2, 3, 4, 5]}
            />
          </BlockForFistSlider>
          <BlockForSecondTitle>
            <Title>Значения</Title>
          </BlockForSecondTitle>
          <BlockForSecondSlider>
            <SliderInput
              value={typeOfElementsForGame}
              onChange={setTypeOfElementsForGame}
              marks={["A", 9, 19, 50, 99, 999]}
            />
          </BlockForSecondSlider>
          <GameModeControls>
            <Button
              active={gameMode === gameModes.ASC_MODE}
              onClick={handleGameModeChange(gameModes.ASC_MODE)}
            >
              По возрастанию
            </Button>
            <Button
              active={gameMode === gameModes.DESC_MODE}
              onClick={handleGameModeChange(gameModes.DESC_MODE)}
            >
              По убыванию
            </Button>
          </GameModeControls>
          <StartGameButton>
            <MajorButton onClick={changeStatusGame}>
              Играть
            </MajorButton>
          </StartGameButton>
        </Container>
      </WrapperForStart>
    </div>
  );

  const gamePage = (
    <div>
      <WrapperForGame theme={theme}>
        <GameLogic
          theme={theme}
          count={countOfElementsForGame}
          elementType={typeOfElementsForGame}
          gameMode={gameMode}
        />
      </WrapperForGame>
    </div>
  );

  return settingOfGame ? gameSettingPage : gamePage;
};

export default Home;
