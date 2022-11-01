import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Item from "./Item";
import { css } from "@emotion/react";
import { WinModal } from "../winModal";

const gameModes = {
  ASC_MODE: "asc",
  DESC_MODE: "desc",
};

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  margin: 5, //distanse between elements
  borderRadius: 100,

  width: 131,
  height: 131,
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  height: 222,
  width: "calc(100% - 94px)",
});

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomItems = (count, elementType) => {
  if (elementType !== "A") {
    const valuesForGameWithNumbers = (count, elementType) => {
      const result = [];
      let randomNumber;
      while (result.length <= count) {
        randomNumber = Math.floor(Math.random() * elementType);
        if (result.indexOf(randomNumber) == -1) {
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
      while (result.length <= count) {
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
  const [items, setItems] = useState(getRandomItems(count, elementType));
  const [finalItems, setFinalItems] = useState([]);

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
                margin-top: 150px;
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
                      <Item
                        key={index}
                        id={item.id}
                        text={item.content}
                        theme={theme}
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
            height: 222px;
            width: calc(100% - 94px);
            background-image: url("/static/${theme}/container.png");
            background-repeat: round;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
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
                            <Item
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
                            <Item
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
