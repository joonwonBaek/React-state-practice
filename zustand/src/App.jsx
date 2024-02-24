import { useEffect } from "react";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import { useUserStore } from "./store/useUserStore";

const App = () => {
  const { fetch, user } = useUserStore();
  console.log("user", user);
  useEffect(() => {
    fetch(1);
  }, [fetch]);
  return (
    <div>
      <Counter />
      <TodoList />
      <p>{user.name}</p>
    </div>
  );
};

export default App;
