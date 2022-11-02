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

const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const valuesForGameWithNumbers = (count, elementType) => {
  const result = [];

  while (result.length <= count) {
    const randomNumber = Math.floor(Math.random() * elementType);

    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }

  return result;
};

const valuesForGameWithLetters = (count) => {
  const result = [];

  while (result.length <= count) {
    const randomLetter = alphabet[getRandomNumber(0, 32)];

    if (!result.includes(randomLetter)) {
      result.push(randomLetter);
    }
  }

  return result;
};

const getRandomItems = (count, elementType) => {
  if (elementType !== "A") {
    return valuesForGameWithNumbers(count, elementType).map((count, idx) => ({
      id: `item${idx}.png`,
      content: count,
    }));
  } else {
    return valuesForGameWithLetters(count).map((count, idx) => ({
      id: `item${idx}.png`,
      content: count,
    }));
  }
};

const GameLogic = ({ gameMode, count, theme, elementType }) => {
  const arrayWithNumbers = getRandomItems(count, elementType);
  const arrayWithNumbersContent = arrayWithNumbers.map((item) => item.content);

  const minElement = Math.min(...arrayWithNumbersContent);
  const maxElement = Math.max(...arrayWithNumbersContent);
  const indexOfMinElement = arrayWithNumbersContent.indexOf(minElement);
  const indexOfMaxElement = arrayWithNumbersContent.indexOf(maxElement);
  const randomItems = arrayWithNumbers.slice();

  const itemsForASC = (arrayWithNumbers) => {
    arrayWithNumbers.splice(indexOfMinElement, 1);
    return arrayWithNumbers;
  };

  const itemsForDESC = (arrayWithNumbers) => {
    arrayWithNumbers.splice(indexOfMaxElement, 1);
    return arrayWithNumbers;
  };

  const [items, setItems] = useState(
    gameMode === "asc"
      ? itemsForASC(arrayWithNumbers)
      : itemsForDESC(arrayWithNumbers)
  );
  const [finalItems, setFinalItems] = useState(
    gameMode === "asc"
      ? randomItems.splice(indexOfMinElement, 1)
      : randomItems.splice(indexOfMaxElement, 1)
  );

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
                        width={""}
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
