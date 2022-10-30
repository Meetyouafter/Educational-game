import { css } from "@emotion/react";

export const GameElement = ({ count, mode, design }) => {
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

  const arrayWithNumbers = valuesForGameWithNumbers(mode, count);
  const minElementOfNumbers = Math.min(...arrayWithNumbers);
  const indexOfMinElement = arrayWithNumbers.indexOf(minElementOfNumbers);
  arrayWithNumbers.splice(indexOfMinElement, 1);
  arrayWithNumbers.push(minElementOfNumbers);

  const textStyles = css({
fontFamily: 'Calibri',
fontStyle: "normal",
fontWeight: "400",
fontSize: "56px",
lineHeight: "68px",
letterSpacing: "2px",
color: "#FFFFFF",
  })

  return (
    <div>
        {arrayWithNumbers.map((element) => {
            return (
            <div>
            <img src={`/static/${design}/item${arrayWithNumbers.indexOf(element)}.png`} 
              />
            <span
            css={textStyles}>{element}</span>
          </div>
          )
        })}
    </div>
    
  );
};
