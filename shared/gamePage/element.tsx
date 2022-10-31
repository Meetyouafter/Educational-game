import { css } from "@emotion/react";

export const GameElement = ({ count, mode, design, gameMode }) => {
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const valuesForGameWithNumbers = (count, mode) => {
    let result = [];
    let randomNumber;
    while (result.length <= count) {
      randomNumber = Math.floor(Math.random() * mode);
      if (result.indexOf(randomNumber) == -1) {
        result.push(randomNumber);
      }
    }
    return result;
  };

  const numbersForUpMode = valuesForGameWithNumbers(mode, count);
  const minElementOfNumbers = Math.min(...numbersForUpMode);
  const indexOfMinNumberElement = numbersForUpMode.indexOf(minElementOfNumbers);
  numbersForUpMode.splice(indexOfMinNumberElement, 1);

  const numbersForDownMode = valuesForGameWithNumbers(mode, count);
  const maxElementOfNumbers = Math.max(...numbersForDownMode);
  const indexOfMaxNumberElement =
    numbersForDownMode.indexOf(maxElementOfNumbers);
  numbersForDownMode.splice(indexOfMaxNumberElement, 1);

  const valuesForGameWithLetters = (count) => {
    const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    let result = [];
    let randomLetter;
    while (result.length <= count) {
      randomLetter = alphabet[randomIntFromInterval(0, 32)];
      if (result.indexOf(randomLetter) == -1) {
        result.push(randomLetter);
      }
    }
    return result;
  };

  const lettersForUpMode = valuesForGameWithLetters(count);
  const minElementOfLetters = lettersForUpMode.sort()[0];
  const indexOfMinLettersElement =
    lettersForUpMode.indexOf(minElementOfLetters);
  lettersForUpMode.splice(indexOfMinLettersElement, 1);

  const lettersForDownMode = valuesForGameWithLetters(count);
  const maxElementOfLetters = lettersForDownMode.sort()[count - 1];
  const indexOfMaxLettersElement =
    lettersForDownMode.indexOf(maxElementOfLetters);
  lettersForDownMode.splice(indexOfMaxLettersElement, 1);

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
    if (gameMode === "asc") {
      if (count !== "A") {
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
        );
      }
        return (
          <div>
            {lettersForUpMode}
            {minElementOfLetters}

            {lettersForUpMode.map((element, idx) => {
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
                    src={`/static/${design}/item${lettersForUpMode.indexOf(
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
        );
    }
    if (gameMode === "desc") {
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
      );
    }
  };

  return <>{gameView()}</>;
};
