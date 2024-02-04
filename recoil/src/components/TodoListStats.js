import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatState } from "../atoms/todoAtoms";

const TodoListStats = () => {
  const { totalNum, totalCompleteNum, totalUncompleteNum, percentCompleted } =
    useRecoilValue(todoListStatState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <ul>
      <li>Total Items: {totalNum}</li>
      <li>Items Completed: {totalCompleteNum}</li>
      <li>Items Not Completed: {totalUncompleteNum}</li>
      <li>Percent Completed: {formattedPercentCompleted}</li>
    </ul>
  );
};

export default TodoListStats;
