

export const Number = ({ index }) => {
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
}
