import { css } from "@emotion/react";
import { Container } from "../shared/startPage/container";
import { Button } from "../shared/startPage/button";
import { Title } from "../shared/startPage/title";
import { SuccessButton } from "../shared/startPage/successButton";
import { SliderInput } from "../shared/startPage/sliderInput";
import { useState } from "react";
import { WrapperForGame } from "../shared/gamePage/wrapperGame";
import { WrapperForStart } from "../shared/startPage/wrapper";
import { ContainerForItems } from "../shared/gamePage/containerGame";

const Home = () => {
  const [gameValues, setGameValues] = useState("A");
  const [objectsCount, setObjectsCount] = useState(2);
  const [gameMode, setGameMode] = useState("asc");
  const [setting, setSetting] = useState(true);

  const handleGameModeChange = (type:string) => () => {
    setGameMode(type)
    console.log(gameMode)
  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const valuesForGameWithNumbers = (quantity, maxValue) => {
    let result = [];
    for (let i = 1; i <= quantity; i += 1) { 
      let t = randomIntFromInterval(1, maxValue);
      result.push(t)
    }
    return result;
  }

const arrayWithNumbers = valuesForGameWithNumbers(gameValues, objectsCount)
const minElementOfNumbers = Math.min(...arrayWithNumbers)
const indexOfMinElement = arrayWithNumbers.indexOf(minElementOfNumbers)
arrayWithNumbers.splice(indexOfMinElement, 1)
  

/*
const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

  const getValuesForGameWithLetters = (quantity) => {
    let result = [];
    for (let i = 1; i <= quantity; i += 1) {
      result.push(alphabet[randomIntFromInterval(1, 33)])
    }
    return result;
  }
*/

  const changeStatusGame = () => {
    setSetting(!setting);
  };

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
            <Button active={gameMode === 'asc'} onClick={handleGameModeChange("asc")}>
              По возрастанию
            </Button>
            <Button active={gameMode === 'desc'} onClick={handleGameModeChange("desc")}>
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
            <SuccessButton changeStatusGame={changeStatusGame} />
          </div>
        </Container>
      </WrapperForStart>
    </div>
  );



  const gamePage = (
    <div>
      <WrapperForGame>
        <div
          css={css`
            height: 500px;
            
          `}
        >
          <div
            css={css`
            position:relative;
      left:20px; top:200px;
            `}
          >
            <img
              css={css`
                position: absolute;
                z-index: 1;
              `}
              src="/static/candies/item1.png"
            />
            <span
              css={css`
                font-size: 42px;
                color: white;
                position: absolute;
                padding-top: 40px;
                padding-left: 40px;
                z-index: 2;
              `}
            >
              {arrayWithNumbers[0]}
            </span>
          </div>
          <div
            css={css`
            position:relative;
            left:180px; top:250px;
            `}
          >
            <img
              css={css`
                position: absolute;
                z-index: 1;
              `}
              src="/static/candies/item2.png"
            />
            <span
              css={css`
                font-size: 42px;
                color: white;
                position: absolute;
                padding-top: 40px;
                padding-left: 40px;
                z-index: 2;
              `}
            >
              {arrayWithNumbers[1]}
              
            </span>
          </div>
          <div
            css={css`
            position:relative;
            left:350px; top:180px;
            `}
          >
            <img
              css={css`
                position: absolute;
                z-index: 1;
              `}
              src="/static/candies/item3.png"
            />
            <span
              css={css`
                font-size: 42px;
                color: white;
                position: absolute;
                padding-top: 40px;
                padding-left: 40px;
                z-index: 2;
              `}
            >
              {arrayWithNumbers[2]}
              
            </span>
          </div>
          <div
            css={css`
            position:relative;
            left:500px; top:300px;
            `}
          >
            <img
              css={css`
                position: absolute;
                z-index: 1;
              `}
              src="/static/candies/item4.png"
            />
            <span
              css={css`
                font-size: 42px;
                color: white;
                position: absolute;
                padding-top: 40px;
                padding-left: 40px;
                z-index: 2;
              `}
            >
              {arrayWithNumbers[3]}
              
            </span>
          </div>
          <div
            css={css`
            position:relative;
            left:700px; top:200px;
            `}
          >
            <img
              css={css`
                position: absolute;
                z-index: 1;
              `}
              src="/static/candies/item5.png"
            />
            <span
              css={css`
                font-size: 42px;
                color: white;
                position: absolute;
                padding-top: 40px;
                padding-left: 40px;
                z-index: 2;
              `}
            >
              {arrayWithNumbers[4]}
            </span>
          </div>
          </div>

          <div
            css={css`
            position:relative;
            left:30px; top:40px;
            `}
          >
            <img
              css={css`
                position: absolute;
                z-index: 1;
              `}
              src="/static/candies/item0.png"
            />
            <span
              css={css`
                font-size: 42px;
                color: white;
                position: absolute;
                padding-top: 40px;
                padding-left: 40px;
                z-index: 2;
              `}
            >
              {minElementOfNumbers}
            </span>
          </div>
        <ContainerForItems>Lol</ContainerForItems>
      </WrapperForGame>
    </div>
  );

  return setting ? gameSettingPage : gamePage;
};

export default Home;
