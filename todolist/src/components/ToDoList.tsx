import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  // useRecoilState -> 첫 요소가 상태의 값이며, 두번째 요소가 호출되었을 때 주어진 값을 업데이트하는 setter 함수인 튜플을 리턴함. useState랑 비숫함.
  // const [toDos, setToDos] = useRecoilState(toDoState);
  // const toDos = useRecoilValue(toDoState); -> value만 필요할때
  // const setToDos = useSetRecoilState(toDoState); -> value변경 함수만 필요할때 . 각각 필요에 따라 사용하기.

  // const toDos = useRecoilValue(toDoState);
  // console.log(toDos);

  //   Selectors

  // Selector는 파생된 state(derived state)의 일부를 나타낸다.
  // 즉, 기존 state를 가져와서, 기존 state를 이용해 새로운 state를 만들어서 반환할 수 있다. 기존 state를 이용만할 뿐 변형시키지 않는다. derived state는 다른 데이터에 의존하는 동적인 데이터를 만들 수 있기 때문에 강력한 개념이다.
  // const selectorOutput = useRecoilValue(toDoSelector);
  // console.log(selectorOutput);

  // const [toDo, doing, done] = useRecoilValue(toDoSelector);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value);
  };
  // console.log(category);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

export default ToDoList;
