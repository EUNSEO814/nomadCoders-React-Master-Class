import { useRecoilValue } from "recoil";
import { toDoSelector } from "./atoms";
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

  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {/* {toDos.map((toDo) => <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />)} */}
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
