import { useRecoilValue } from "recoil";
import { TodoItemCreator } from "./components/TodoItemCreator";
import { TodoItem } from "./components/TodoItem";
import TodoListFilters from "./components/TodoListFilters";
import { filteredTodoListState } from "./atoms/todoAtoms";
import { currentUserNameQuery } from "./atoms/UserAtoms";
import TodoListStats from "./components/TodoListStats";
import { Suspense } from "react";

function App() {
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  console.log(filteredTodoList);

  return (
    <div>
      <TodoListStats />
      <Suspense fallback={<div>...loading</div>}>
        <CurrentUserInfo />
      </Suspense>
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;

function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>;
}
