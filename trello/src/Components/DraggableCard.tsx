import React from "react";
import { Draggable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

const Card = styled.div<{ isDragging: boolean }>`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0,0,0,0.5" : "none"};
`;

const Btn = styled.button`
  background-color: inherit;
  border: none;
`;
interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}
const DraggableCard = ({ toDoId, toDoText, index }: IDraggableCardProps) => {
  const value = useRecoilValue(toDoState);
  const setCard = useSetRecoilState(toDoState);
  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const oldToDos = { ...value };
    const filtered = Object.values(oldToDos);
    console.log("filtered", { ...filtered });
    console.log(oldToDos);
    // console.log({ ...value} );
    console.log("clicked!", toDoId, index);
  };
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDoText}
          <Btn onClick={deleteHandler}>
            <BsTrash />
          </Btn>
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
