import { Container } from "../shared/startPage/container";
import { Button } from "../shared/startPage/button";
import { Title } from "../shared/startPage/title";
import { SuccessButton } from "../shared/startPage/successButton";
import { SliderInput } from "../shared/startPage/sliderInput";
import { useState } from "react";
import { WrapperForGame } from "../shared/gamePage/wrapperForGame";
import { WrapperForStart } from "../shared/startPage/wrapperForStart";
import { GameElement } from "../shared/gamePage/gameElement";
import Game from "../shared/gamePage/gameLogic";
import styled from "@emotion/styled";

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

  const variantesOfDesign = ["candies", "flowers", "toys", "coins"];
  const design = variantesOfDesign[randomIntFromInterval(0, 3)];

  const DivForFistTitle = styled.div`
    display: flex;
    margin-top: 41px;
    margin-left: 183px;
  `;
  const DivForSecondTitle = styled.div`
    margin-top: 70px;
  `;
  const DivForFistSlider = styled.div`
    margin-top: 36px;
    margin-left: 157px;
    width: 355px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const DivForSecondSlider = styled.div`
    margin-top: 38px;
    margin-left: 76px;
    width: 519px;
    display: flex;
    justify-content: space-between;
    align-item: center;
  `;
  const DivForButtons = styled.div`
    display: flex;
    margin-top: 81px;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 75px;
    margin-right: 70px;
  `;
  const DivForSuccessButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 95px;
  `;

  const DivForGameElement = styled.div`
    height: 320px;
    position: relative;
  `;

  const gameSettingPage = (
    <div>
      <WrapperForStart>
        <Container>
          <DivForFistTitle>
            <Title>Кол-во предметов</Title>
          </DivForFistTitle>
          <DivForFistSlider>
            <SliderInput
              value={countOfElementsForGame}
              onChange={setCountOfElementsForGame}
              marks={[2, 3, 4, 5]}
            />
          </DivForFistSlider>
          <DivForSecondTitle>
            <Title>Значения</Title>
          </DivForSecondTitle>
          <DivForSecondSlider>
            <SliderInput
              value={typeOfElementsForGame}
              onChange={setTypeOfElementsForGame}
              marks={["A", 9, 19, 50, 99, 999]}
            />
          </DivForSecondSlider>
          <DivForButtons>
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
          </DivForButtons>
          <DivForSuccessButton>
            <SuccessButton changeStatusGame={changeStatusGame}>
              Играть
            </SuccessButton>
          </DivForSuccessButton>
        </Container>
      </WrapperForStart>
    </div>
  );

  const gamePage = (
    <div>
      <WrapperForGame design={design}>
        <DivForGameElement>
          <GameElement
            count={countOfElementsForGame}
            mode={typeOfElementsForGame}
            design={design}
            gameMode={gameMode}
          />
        </DivForGameElement>
        <Game
          design={design}
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
