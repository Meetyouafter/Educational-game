import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Item from "./Item";
import { css } from "@emotion/react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item${k}`,
    //id: `item-${k}`,
    content: getRandomInt(0, 100),
  }));

  const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  margin: `0 ${grid}px 0 0`,
  borderRadius: 100,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  padding: grid,
  overflow: "auto",
});

const GameLogic = ({ gameMode, count, design }) => {
  const [items, setItems] = useState(getItems(count));
  const [finalItems, setFinalItems] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const itemToMove = items[result.source.index];
    const newItems = items.filter((item, idx) => idx !== result.source.index);

    if (gameMode === "asc") {
      const min = Math.min(...items.map((item) => item.content));
      if (itemToMove.content <= min) {
        setItems(newItems);
        setFinalItems([...finalItems, itemToMove]);
      }
    }

    if (gameMode === "desc") {
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
      `}
    />
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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