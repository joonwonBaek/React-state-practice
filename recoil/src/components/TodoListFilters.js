import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atoms/todoAtoms";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilters = ({ target: { value } }) => {
    setFilter(value);
  };
  return (
    <div>
      Filters:
      <select value={filter} onChange={updateFilters}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default TodoListFilters;
