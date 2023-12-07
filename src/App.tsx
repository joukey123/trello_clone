import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Lists = styled.div`
  background-color: white;
  max-width: 200px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`;
const List = styled.div`
  background-color: #47c2ff;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  color: black;
`;

function App() {
  const dragEnd = () => {};
  const toDos = ["a", "b", "c", "d", "e", "f"];
  return (
    <DragDropContext onDragEnd={dragEnd}>
      <Wrap>
        <Droppable droppableId="one">
          {(magic) => (
            <Lists ref={magic.innerRef} {...magic.droppableProps}>
              {toDos.map((toDo, index) => (
                <Draggable draggableId={toDo} index={index}>
                  {(magic) => (
                    <List
                      ref={magic.innerRef}
                      {...magic.draggableProps}
                      {...magic.dragHandleProps}
                    >
                      {toDo}
                    </List>
                  )}
                </Draggable>
              ))}
              {magic.placeholder}
            </Lists>
          )}
        </Droppable>
      </Wrap>
    </DragDropContext>
  );
}

export default App;
