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
  arrayWithNumbers.push(randomIntFromInterval(0, count));
  const minElementOfNumbers = Math.min(...arrayWithNumbers);
  const indexOfMinElement = arrayWithNumbers.indexOf(minElementOfNumbers);
  arrayWithNumbers.splice(indexOfMinElement, 1);

  const textStyles = css({
fontFamily: 'Calibri',
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
  })

  return (
    <div>
        {arrayWithNumbers.map((element, idx) => {
            return (
              <div
              css={css`
                position: absolute;
                padding-left: ${200 * idx}px;
              `}
            >
            <img css={css`
                position: absolute;
                z-index: 1;
              `}
              src={`/static/${design}/item${arrayWithNumbers.indexOf(element)}.png`} 
              />
            <span
            css={textStyles}>{element}</span>
          </div>
          )
        })}
        <div
              css={css`
                position: absolute;
                padding-top: 700px;
              `}
            >
                    <img 
              src={`/static/${design}/item5.png`} 
              />
            <span
            css={textStyles}>{minElementOfNumbers}</span>
          </div>
    </div>

    
  );
};
