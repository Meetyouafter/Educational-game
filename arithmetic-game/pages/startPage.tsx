import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StartPageStyles } from "../shared/styles";


const StartPageWrapper = styled.div`
  width: 980px;
  height: 810px;
  left: 0px;
  top: 0px;

  background: blue;
`;

const Frame = styled.div`
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  width: 699px;
  height: 660px;
  left: 139px;
  top: 91px;

  background: #ffffff;
  border-radius: 40px;

  margin: 91px 142px 59px 139px;
`;

const Title = styled.div`
  justify-content: center;
  margin-top: 57px;

  left: 34.8%;
  right: 35.1%;
  top: 18.27%;
  bottom: 76.3%;

  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #423f45;
`;
const FirstModeBox = styled.div`

  width: 366px;
  height: 21px;
  left: 305px;
  top: 238px;
  margin: 0;

  background: #ffd748;
  border-radius: 10px;
`;

const SecondModeBox = styled.div`
position: absolute;
width: 531px;
height: 21px;
left: 223px;
top: 405px;

background: #FFD748;
border-radius: 10px;
`

const FontForChoice = styled.div`
  width: 226px;
  height: 39px;
  left: 242px;
  top: 501px;

  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  justify-content: space-between;

  display: flex;
  align-items: center;

  color: #423f45;
`;

const FontForGameMode = styled.div`
  width: 11.79px;
  height: 27.42px;
  left: 310px;
  top: 209px;

  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #4f4b61;
`;

const ChoiceFrame = styled.div`

  width: 271px;
  height: 44.44px;
  left: 489px;
  top: 499px;

  background: #ffd748;
  border-radius: 20px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

const PlayContainer = styled.div`

  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #38df7a;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const PlayFont = styled.div`
  left: 28.08%;
  right: 29.62%;
  top: 6.67%;
  bottom: 20%;

  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;

  color: #ffffff;
`;

const StartPage = () => {
  return (
    <StartPageWrapper>
      <Frame>
          <Title>Кол-во предметов</Title>
          <div
    css={css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 366px;
      height: 21px;
      left: 305px;
      top: 238px;
      margin-top: 16px;
      margin-bottom: 2.58px;
    `}>
          <FontForChoice>2</FontForChoice>
          <FontForChoice>3</FontForChoice>
          <FontForChoice>4</FontForChoice>
          <FontForChoice>5</FontForChoice>
          </div>
          <FirstModeBox></FirstModeBox>
          <Title>Значения</Title>

         
      </Frame>
    </StartPageWrapper>
  );
};

export default StartPage;

/*
<div>
          <ChoiceFrame>
            <FontForChoice>По возрастанию</FontForChoice>
          </ChoiceFrame>

          <ChoiceFrame>
            <FontForChoice>По убыванию</FontForChoice>
          </ChoiceFrame>
          </div>
*/
