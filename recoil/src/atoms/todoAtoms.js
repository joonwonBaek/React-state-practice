import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatState = selector({
  key: "todoListStatState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompleteNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompleteNum = totalNum - totalCompleteNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompleteNum / totalNum;

    return {
      totalNum,
      totalCompleteNum,
      totalUncompleteNum,
      percentCompleted,
    };
  },
});
