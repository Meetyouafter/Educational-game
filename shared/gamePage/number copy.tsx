import { css } from "@emotion/react";

export const GameElement = ({ count, mode }) => {
  const variantesOfDesign = ["candies", "flowers", "toys", "coins"];

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

  const arrayWithNumbers = valuesForGameWithNumbers(count, mode);
  const minElementOfNumbers = Math.min(...arrayWithNumbers);
  const indexOfMinElement = arrayWithNumbers.indexOf(minElementOfNumbers);
  arrayWithNumbers.splice(indexOfMinElement, 1);
  arrayWithNumbers.push(minElementOfNumbers);

  return (
    <div
    css={css`
      height: 500px;
    `}
  >
    <div
      css={css`
        height: 500px;
      `}
    >
      <div
        css={css`
          position: relative;
          left: 20px;
          top: 200px;
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
          position: relative;
          left: 180px;
          top: 250px;
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
          position: relative;
          left: 350px;
          top: 180px;
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
          position: relative;
          left: 500px;
          top: 300px;
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
          position: relative;
          left: 700px;
          top: 200px;
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

      <div
        css={css`
          position: relative;
          left: 30px;
          top: 530px;
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
    </div>
    </div>
  );
};
