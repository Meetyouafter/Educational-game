import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Item from "./Item";
import { css } from "@emotion/react";

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  margin: 5, //distanse between elements
  borderRadius: 100,
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  paddingTop: 100, //to up and down
  overflow: "auto",
});

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomItems = (count, elementType) => {
  if (elementType !== 'A') {
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


const GameLogic = ({ gameMode, count, design, elementType }) => {
  const [items, setItems] = useState(getRandomItems(count, elementType));
  const [finalItems, setFinalItems] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const itemToMove = items[result.source.index];
    const newItems = items.filter((item, idx) => idx !== result.source.index);

    if (gameMode === "asc") {
      const min = Math.min(...items.map((item) => item.content));
      setFinalItems([...finalItems, min]);
      if (itemToMove.content <= min) {
        setItems(newItems);
        setFinalItems([...finalItems, itemToMove]);
      }
    }

    if (gameMode === "desc") {
      const max = Math.max(...items.map((item) => item.content));
      setFinalItems([...finalItems, max]);
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
      `}
    />
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      console.log(design)
      <Droppable droppableId="droppable-1" direction="horizontal">
        {(provided, snapshot) => (
          <div
            className="list"
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
            css={css`
              margin-bottom: 200px;
              display: flex;
              column-gap: 200px;
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
                    <Item text={item.content} design={design} />
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="droppable-2" direction="horizontal">
        {(provided, snapshot) => (
          <div
            className="list"
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
            css={css`
              height: 230px;
              background-image: url("/static/${design}/container.png");
              background-repeat: no-repeat;
              border-radius: 50px;
              display: flex;
              column-gap: 100px;
              align-items: center;
              justify-content: center;
            `}
          >
            {gameMode === "asc" && (
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
                        <Item key={item.content} text={item.content} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {items.map((item) => (
                  <NewEmptyItem key={item.id} />
                ))}
              </>
            )}

            {gameMode === "desc" && (
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
};

export default GameLogic;
