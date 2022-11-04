/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import GameItem from "./GameItem";
import { css } from "@emotion/react";
import { WinModal } from "./WinModal";

const gameModes = {
  ASC_MODE: "asc",
  DESC_MODE: "desc",
};

const ImageForUpMode = styled.img`
  position: absolute;
  left: 53px;
  top: 480px;
`;
const ImageForDownMode = styled.img`
  position: absolute;
  left: 600px;
  top: 480px;
`;
const WrapperForGame = styled.div`
  width: 980px;
  height: 810px;
  background-image: ${({ theme }) =>
    `url(${`/static/${theme}/background.png`})`};
  borderradius: 50px;
`;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  borderRadius: 100,
  marginTop: 0,
  width: 131,
  height: 131,
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  height: 300,
  width: "calc(100% - 194px)",
});

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
const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
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
      value: "",
    }));
  } else {
    return valuesForGameWithLetters(count).map((count, idx) => ({
      id: `item${idx}.png`,
      content: count,
      value: count.charCodeAt(),
    }));
  }
};

const GameLogic = ({ gameMode, count, theme, elementType }) => {
  const randomItems = getRandomItems(count, elementType);
  const arrayWithDataForSort =
    elementType !== "A"
      ? randomItems.map((item) => item.content)
      : randomItems.map((item) => item.value);

  const minElement = Math.min(...arrayWithDataForSort);
  const maxElement = Math.max(...arrayWithDataForSort);

  const indexOfMinElement = arrayWithDataForSort.indexOf(minElement);
  const indexOfMaxElement = arrayWithDataForSort.indexOf(maxElement);

  const itemsForASC = (randomItems) => {
    const result = randomItems.slice();
    result.splice(indexOfMinElement, 1);
    return result;
  };

  const itemsForDESC = (randomItems) => {
    const result = randomItems.slice();
    result.splice(indexOfMaxElement, 1);
    return result;
  };

  const [items, setItems] = useState(
    gameMode === "asc" ? itemsForASC(randomItems) : itemsForDESC(randomItems)
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
      const min = Math.min(
        ...items.map((item) =>
          elementType !== "A" ? item.content : item.value
        )
      );
      if (
        (elementType !== "A" ? itemToMove.content : itemToMove.value) <= min
      ) {
        setItems(newItems);
        setFinalItems([...finalItems, itemToMove]);
      }
    }
    if (gameMode === gameModes.DESC_MODE) {
      const max = Math.max(
        ...items.map((item) =>
          elementType !== "A" ? item.content : item.value
        )
      );
      if (
        (elementType !== "A" ? itemToMove.content : itemToMove.value) >= max
      ) {
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
    <WrapperForGame theme={theme}>
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
                padding-left: 100px;
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
            height: 230px;
            width: 900px;
            margin-left: 40px;
            background-image: url("/static/${theme}/container.png");
            background-repeat: round;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 40px;
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
                  height: 500px;
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
                    <ImageForUpMode src="/static/upMode.png" />
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
                    <ImageForDownMode src="/static/downMode.png" />
                  </>
                )}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      {finalItems.length === count + 1 && <WinModal />}
    </WrapperForGame>
  );
};

export default GameLogic;
