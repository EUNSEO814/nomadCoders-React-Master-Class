import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
});
// type categories = "TO_DO" | "DOING" | "DONE";

// Enums

// 열거형은 TypeScript가 제공하는 기능 중 하나.
// enum은 열거형으로 이름이 있는 상수들의 집합을 정의할 수 있음.
// 열거형을 사용하면 의도를 문서화 하거나 구분되는 사례 집합을 더 쉽게 만들수 있음.
//  TypeScript는 숫자와 문자열-기반 열거형을 제공함.

// 숫자 열거형 (Numeric enums)
// enum Direction {
// Up = 1,
// Down,
// Left,
// Right,
// }

// 문자열 열거형 (String enums)
// enum Direction {
// Up = "UP",
// Down = "DOWN",
// Left = "LEFT",
// Right = "RIGHT",
// }

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);

    // if (category === "TO_DO")
    //   return toDos.filter((toDo) => toDo.category === "TO_DO");
    // if (category === "TO_DO")
    //   return toDos.filter((toDo) => toDo.category === "DOING");
    // if (category === "TO_DO")
    //   return toDos.filter((toDo) => toDo.category === "DONE");
  },
});
