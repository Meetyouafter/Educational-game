
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Item from './Item'
import EmptyItem from './EmptyItem'




const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  margin: `0`,
  borderRadius: 100,


  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: 'auto',
  overflow: 'auto',
});





const App = ({count, elementType, gameMode}) => {
  const [elementCount, setElementCount] = useState(count);
  const [finalItems, setFinalItems] = useState([]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const valuesForGameWithNumbers = (count, elementType) => {
    let result = [];
    let randomNumber;
    while (result.length <= count) {
      randomNumber = Math.floor(Math.random() * elementType);
      if (result.indexOf(randomNumber) == -1) {
        result.push(randomNumber);
      }
    }
    return result;
  };

  const numbersForGame = valuesForGameWithNumbers(count, elementType);
  const minElementOfNumbers = Math.min(...numbersForGame);
  const indexOfMinNumberElement = numbersForGame.indexOf(minElementOfNumbers);
  numbersForGame.splice(indexOfMinNumberElement, 1);
  const maxElementOfNumbers = Math.max(...numbersForGame);
  const indexOfMaxNumberElement =
  numbersForGame.indexOf(maxElementOfNumbers);
  numbersForGame.splice(indexOfMaxNumberElement, 1);

  const valuesForGameWithLetters = (count) => {
    const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    const result = [];
    let randomLetter;
    while (result.length <= count) {
      randomLetter = alphabet[randomIntFromInterval(0, 32)];
      if (result.indexOf(randomLetter) == -1) {
        result.push(randomLetter);
      }
    }
    return result;
  };

  const lettersForGame = valuesForGameWithLetters(count);
  const minElementOfLetters = lettersForGame.sort()[0];
  const indexOfMinLettersElement =
  lettersForGame.indexOf(minElementOfLetters);
  lettersForGame.splice(indexOfMinLettersElement, 1);
  const maxElementOfLetters = lettersForGame.sort()[count];
  const indexOfMaxLettersElement =
  lettersForGame.indexOf(maxElementOfLetters);
  lettersForGame.splice(indexOfMaxLettersElement, 1);


  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const itemToMove = elementCount[result.source.index];
    const newItems = elementCount.filter((idx) => idx !== result.source.index)

    if (gameMode === 'asc' && elementType !== 'A') {
        const itemToMove = numbersForGame[result.source.index];
       // const newItems = numbersForGame.filter((idx) => idx !== result.source.index)     
      const min = Math.min(...numbersForGame.map(item => item.content))
      if (itemToMove.content <= min) {
      //  setElementCount(newItems)
        setFinalItems([...finalItems, numbersForGame])
      }
    }

    if (gameMode === 'asc' && elementType === 'A') {
        const itemToMove = lettersForGame[result.source.index];
       // const newItems = lettersForGame.filter((idx) => idx !== result.source.index)     
      const min = Math.min(...lettersForGame.map(item => item.content))
      if (itemToMove.content <= min) {
      //  setElementCount(newItems)
        setFinalItems([...finalItems, lettersForGame])
      }
    }

    if (gameMode === 'desc' && elementType !== 'A') {
        const itemToMove = numbersForGame[result.source.index];
        // const newItems = numbersForGame.filter((idx) => idx !== result.source.index)      
      const max = Math.max(...numbersForGame.map(item => item.content))
      if (itemToMove.content >= max) {
       // setElementCount(newItems)
        setFinalItems([numbersForGame, ...finalItems])
      }
    }

    if (gameMode === 'desc' && elementType !== 'A') {
        const itemToMove = lettersForGame[result.source.index];
        // const newItems = lettersForGame.filter((idx) => idx !== result.source.index)      
      const max = Math.max(...lettersForGame.map(item => item.content))
      if (itemToMove.content >= max) {
       // setElementCount(newItems)
        setFinalItems([lettersForGame, ...finalItems])
      }
    }

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-1" direction="horizontal">
        {(provided, snapshot) => (
          <div
            className="list"
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            {elementCount.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index} shouldRespectForcePress={false}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <Item text={item.content} />
                  </div>
                )}
              </Draggable>
            ))}
          </div>)}
      </Droppable>

      <Droppable droppableId="droppable-2" direction="horizontal">
        {(provided, snapshot) => (
          <div
            className="list"
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            {gameMode === 'asc' && (
              <>
                {finalItems.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index} isDragDisabled>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <Item key={item.content} text={item.content} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {elementCount.map((item, index) => <EmptyItem key={item.content} />)}
              </>
            )}

            {gameMode === 'desc' && (
              <>
                {elementCount.map((item, index) => <EmptyItem key={item.content} />)}
                {finalItems.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index} isDragDisabled>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <Item key={item.content} text={item.content} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </>
            )}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;