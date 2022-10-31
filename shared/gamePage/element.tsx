import { css } from "@emotion/react";

export const GameElement = ({ count, mode, design, gameMode }) => {
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const valuesForGameWithNumbers = (quantity, maxValue) => {
    let result = [];
    for (let i = 1; i <= quantity; i += 1) {
      let t = randomIntFromInterval(1, maxValue);
      result.push(t);
    }
    return result;
  };

  const numbersForUpMode = valuesForGameWithNumbers(mode, count);
  numbersForUpMode.push(randomIntFromInterval(0, count));
  const minElementOfNumbers = Math.min(...numbersForUpMode);
  const indexOfMinElement = numbersForUpMode.indexOf(minElementOfNumbers);
  numbersForUpMode.splice(indexOfMinElement, 1);

  const numbersForDownMode = valuesForGameWithNumbers(mode, count);
  numbersForDownMode.push(randomIntFromInterval(0, count));
  const maxElementOfNumbers = Math.max(...numbersForDownMode);
  const indexOfMaxElement = numbersForDownMode.indexOf(maxElementOfNumbers);
  numbersForDownMode.splice(indexOfMaxElement, 1);

  const textStyles = css({
    fontFamily: "Calibri",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "56px",
    lineHeight: "68px",
    letterSpacing: "2px",
    color: "#FFFFFF",
    position: "absolute",
    zIndex: "1",
    paddingLeft: "70px",
    paddingTop: "70px",
  });

  const gameView = () => {
    if (gameMode === 'asc') {
      return (
        <div>
        {numbersForUpMode.map((element, idx) => {
          return (
            <div
              css={css`
                position: absolute;
                padding-left: ${200 * idx}px;
              `}
            >
              <img
                css={css`
                  position: absolute;
                  z-index: 1;
                `}
                src={`/static/${design}/item${numbersForUpMode.indexOf(
                  element
                )}.png`}
              />
              <span css={textStyles}>{element}</span>
            </div>
          );
        })}
        <div
          css={css`
            position: absolute;
            padding-top: 400px;
            padding-left: 100px;
          `}
        >
          <img src={`/static/upMode.png`} />
        </div>
  
        <div
          css={css`
            position: absolute;
            padding-top: 600px;
          `}
        >
          <img
            css={css`
              position: absolute;
              z-index: 1;
            `}
            src={`/static/${design}/item5.png`}
          />
          <span css={textStyles}>{minElementOfNumbers}</span>
        </div>
      </div>
      )
    }
    if (gameMode === 'desc') {
      return (
        <div>
        {numbersForDownMode.map((element, idx) => {
          return (
            <div
              css={css`
                position: absolute;
                padding-left: ${200 * idx}px;
              `}
            >
              <img
                css={css`
                  position: absolute;
                  z-index: 1;
                `}
                src={`/static/${design}/item${numbersForDownMode.indexOf(
                  element
                )}.png`}
              />
              <span css={textStyles}>{element}</span>
            </div>
          );
        })}
        <div
          css={css`
            position: absolute;
            padding-top: 400px;
            padding-left: 600px;
          `}
        >
          <img src={`/static/downMode.png`} />
        </div>
  
        <div
          css={css`
            position: absolute;
            padding-top: 600px;
            padding-left: 700px;
          `}
        >
          <img
            css={css`
              position: absolute;
              z-index: 1;
            `}
            src={`/static/${design}/item5.png`}
          />
          <span css={textStyles}>{maxElementOfNumbers}</span>
        </div>
      </div>
      )
    }
  }

  return (
    <>{gameView()}</>

  );
};
