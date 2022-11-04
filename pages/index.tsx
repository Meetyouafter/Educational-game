import { useState } from "react";
import Game from "../shared/Game";
import { GameSetting } from "../shared/GameSetting";

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const themes = ["candies", "flowers", "toys", "coins"];
const theme = themes[randomIntFromInterval(0, 3)];

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

  return settingOfGame ? (
    <GameSetting
      elementCount={countOfElementsForGame}
      changeElementCount={setCountOfElementsForGame}
      elementType={typeOfElementsForGame}
      changeElementType={setTypeOfElementsForGame}
      changeStatusGame={changeStatusGame}
      changeModeGame={handleGameModeChange}
      gameMode={gameMode}
    />
  ) : (
    <>
      <Game
        theme={theme}
        count={countOfElementsForGame}
        elementType={typeOfElementsForGame}
        gameMode={gameMode}
      />
    </>
  );
};

export default Home;
