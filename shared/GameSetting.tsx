import { Button } from "../shared/ModeButton";
import { PrimeButton } from "../shared/PrimeButton";
import { SliderInput } from "../shared/SliderInput";
import styled from "@emotion/styled";

const WrapperForStart = styled.div`
  width: 980px;
  height: 810px;
  background-image: url("/static/startPageBackground.png");
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #423f45;
  justify-content: center;
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 700px;
  height: 660px;
  border: 20px solid;
  border-image: linear-gradient(
    to left bottom,
    rgba(127, 117, 240, 1),
    rgba(16, 31, 50, 1)
  );
  border-image-slice: 1;
  background: #ffffff;
  border-radius: 40px;
  align-items: center;
  margin-top: 31px;
  margin-right: 5px;
`;
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
const gameModes = {
  ASC_MODE: "asc",
  DESC_MODE: "desc",
};

export const GameSetting = ({
  elementCount,
  gameMode,
  changeElementCount,
  elementType,
  changeElementType,
  changeStatusGame,
  changeModeGame,
}) => {
  return (
    <div>
      <WrapperForStart>
        <Container>
          <BlockForFirstTitle>
            <Title>Кол-во предметов</Title>
          </BlockForFirstTitle>
          <BlockForFistSlider>
            <SliderInput
              value={elementCount}
              onChange={changeElementCount}
              marks={[2, 3, 4, 5]}
            />
          </BlockForFistSlider>
          <BlockForSecondTitle>
            <Title>Значения</Title>
          </BlockForSecondTitle>
          <BlockForSecondSlider>
            <SliderInput
              value={elementType}
              onChange={changeElementType}
              marks={["A", 9, 19, 50, 99, 999]}
            />
          </BlockForSecondSlider>
          <GameModeControls>
            <Button
              active={gameMode === gameModes.ASC_MODE}
              onClick={changeModeGame(gameModes.ASC_MODE)}
            >
              По возрастанию
            </Button>
            <Button
              active={gameMode === gameModes.DESC_MODE}
              onClick={changeModeGame(gameModes.DESC_MODE)}
            >
              По убыванию
            </Button>
          </GameModeControls>
          <StartGameButton>
            <PrimeButton onClick={changeStatusGame}>Играть</PrimeButton>
          </StartGameButton>
        </Container>
      </WrapperForStart>
    </div>
  );
};
