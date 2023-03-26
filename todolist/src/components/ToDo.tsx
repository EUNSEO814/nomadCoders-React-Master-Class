import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atoms";

// option 1
const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: IToDo["category"]) => {
    console.log(newCategory);
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      //   console.log("targetIndex", targetIndex);
      //   const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: newCategory };
      //   console.log("oldToDo:", oldToDo, "newToDo:", newToDo);
      //   console.log("replace th to do in the index",targetIndex,"with",newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const deleteHandler = () => {
    setToDos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button onClick={() => onClick(Categories.TO_DO)}>TO DO</button>
      )}
      {category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>DOING</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>DONE</button>
      )}
      <button onClick={deleteHandler}>DELETE</button>
    </li>
  );
};

// option 2
// const ToDo = ({ text, category, id }: IToDo) => {
//   const setToDos = useSetRecoilState(toDoState);
//   const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     // console.log(e.currentTarget.name);
//     const {
//       currentTarget: { name },
//     } = e;
//     setToDos((oldToDos) => {
//       const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
//       //   console.log("targetIndex", targetIndex);
//       //   const oldToDo = oldToDos[targetIndex];
//       const newToDo = { text, id, category: name as any };
//       //   console.log("oldToDo:", oldToDo, "newToDo:", newToDo);
//       console.log(
//         "replace th to do in the index",
//         targetIndex,
//         "with",
//         newToDo
//       );
//       return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
//     });
//   };
//   return (
//     <li>
//       <span>{text}</span>
//       {category !== "TO_DO" && (
//         <button name="TO_DO" onClick={onClick}>
//           TO DO
//         </button>
//       )}
//       {category !== "DOING" && (
//         <button name="DOING" onClick={onClick}>
//           DOING
//         </button>
//       )}
//       {category !== "DONE" && (
//         <button name="DONE" onClick={onClick}>
//           DONE
//         </button>
//       )}
//     </li>
//   );
// };

export default ToDo;
