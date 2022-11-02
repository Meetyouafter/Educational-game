/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import GameItem from "./GameItem";
import { css } from "@emotion/react";
import { WinModal } from "./WinModal";

const gameModes = {
  ASC_MODE: "asc",
  DESC_MODE: "desc",
};

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  margin: 5, //distanse between elements
  borderRadius: 100,
  marginTop: 0,

  width: 131,
  height: 131,
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  height: 300,
  width: "calc(100% - 94px)",
});

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomItems = (count, elementType) => {
  if (elementType !== "A") {
    const valuesForGameWithNumbers = (elementCount, elementTypes) => {
      const result = [];
      let randomNumber;
      while (result.length <= elementCount) {
        randomNumber = Math.floor(Math.random() * elementTypes);
        if (result.indexOf(randomNumber) === -1) {
          result.push(randomNumber);
        }
      }
      return result;
    };
    return valuesForGameWithNumbers(count, elementType).map((count, idx) => ({
      id: `item${idx}.png`,
      content: count,
    }));
  } else {
    const valuesForGameWithLetters = (count) => {
      const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
      const result = [];
      let randomLetter;
      while (result.length <= count + 1) {
        randomLetter = alphabet[getRandomNumber(0, 32)];
        if (result.indexOf(randomLetter) == -1) {
          result.push(randomLetter);
        }
      }
      return result;
    };
    return valuesForGameWithLetters(count).map((count, idx) => ({
      id: `item${idx}.png`,
      content: `${count}`,
    }));
  }
};

const GameLogic = ({ gameMode, count, theme, elementType }) => {



  const arrayWithNumbers = getRandomItems(count, elementType);
  const arrayWithNumbersContent = arrayWithNumbers.map((item, idx) => item.content)
  const minElementOfNumbers = Math.min(...arrayWithNumbersContent);
  const maxElementOfNumbers = Math.max(...arrayWithNumbersContent);
  const indexOfMinElement = arrayWithNumbersContent.indexOf(minElementOfNumbers);
  const indexOfMaxElement = arrayWithNumbersContent.indexOf(maxElementOfNumbers);
  //const randomItems = gameMode === 'asc' ? arrayWithNumbers.splice(indexOfMinElement, 1) : arrayWithNumbers.splice(indexOfMaxElement, 1)
  const randomItems = arrayWithNumbers.splice(indexOfMinElement, 1)
//  arrayWithNumbers.splice(indexOfMinElement, 1);
  //arrayWithNumbers.push(minElementOfNumbers);
  console.log(count)
  console.log(elementType)
  console.log(arrayWithNumbers)
  /*
  console.log(arrayWithNumbers[0])
  console.log(arrayWithNumbers[1])
  console.log(arrayWithNumbers[2])
  console.log(arrayWithNumbers[3])
  console.log(arrayWithNumbers[4])
  console.log(arrayWithNumbers[5])
  console.log(arrayWithNumbers[6])
  console.log(arrayWithNumbersContent)
  console.log(minElementOfNumbers)
  //console.log(maxElementOfNumbers)
  console.log(indexOfMinElement)
  //console.log(indexOfMaxElement)
  console.log(randomItems, 'randomItems')

*/
  const [items, setItems] = useState(gameMode === 'asc' ? arrayWithNumbers.splice(indexOfMinElement, 1) : arrayWithNumbers.splice(indexOfMaxElement, 1));
  const [finalItems, setFinalItems] = useState(gameMode === 'asc' ? [minElementOfNumbers] : [maxElementOfNumbers]);
  console.log(items)
  console.log(finalItems)
 
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const itemToMove = items[result.source.index];
    const newItems = items.filter((item, idx) => idx !== result.source.index);
    if (gameMode === gameModes.ASC_MODE) {
      const min = Math.min(...items.map((item) => item.content));
      if (itemToMove.content <= min) {
        setItems(newItems);
        setFinalItems([...finalItems, itemToMove]);
      }
    }
    if (gameMode === gameModes.DESC_MODE) {
      const max = Math.max(...items.map((item) => item.content));
      if (itemToMove.content >= max) {
        setItems(newItems);
        setFinalItems([itemToMove, ...finalItems]);
      }
    }
  };
  const NewEmptyItem = () => (
    <div
      css={css`
        width: 131px;
        height: 131px;
        background-image: url("/static/ellipse.png");
        background-repeat: no-repeat;
      `}
    />
  );

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-1" direction="horizontal">
          {(provided, snapshot) => (
            <div
              className="list"
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
              css={css`
                padding-top: 220px;
                display: flex;
                justify-content: center;
                column-gap: 200px; // between elements
              `}
            >
              {items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                  shouldRespectForcePress={false}
                >
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
                      <GameItem
                        key={index}
                        id={item.id}
                        text={item.content}
                        theme={theme}
                        width={''}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>

        <div
          css={css`
            height: 320px;
            width: 990px;
            background-image: url("/static/${theme}/container.png");
            background-repeat: round;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 0px;
          `}
        >
          <Droppable droppableId="droppable-2" direction="horizontal">
            {(provided, snapshot) => (
              <div
                className="list"
                ref={provided.innerRef}
                {...provided.droppableProps}
                css={css`
                  display: inline-flex;
                  column-gap: 4px;
                  align-items: center;
                  justify-content: center;
                `}
              >
                {gameMode === gameModes.ASC_MODE && (
                  <>
                    {finalItems.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                        isDragDisabled
                      >
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
                            <GameItem
                              key={index}
                              id={item.id}
                              text={item.content}
                              theme={theme}
                              width={"131px"}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {items.map((item) => (
                      <NewEmptyItem key={item.id} />
                    ))}
                    <img
                      css={css`
                        position: absolute;
                        left: 53px;
                        top: 480px;
                      `}
                      src="/static/upMode.png"
                    />
                  </>
                )}

                {gameMode === gameModes.DESC_MODE && (
                  <>
                    {items.map((item) => (
                      <NewEmptyItem key={item.id} />
                    ))}
                    {finalItems.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                        isDragDisabled
                      >
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
                            <GameItem
                              key={index}
                              id={item.id}
                              text={item.content}
                              theme={theme}
                              width={"131px"}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    <img
                      css={css`
                        position: absolute;
                        left: 600px;
                        top: 480px;
                      `}
                      src="/static/downMode.png"
                    />
                  </>
                )}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      {finalItems.length === count + 1 && <WinModal />}
    </>
  );
};

export default GameLogic;
