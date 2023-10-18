import { MouseEventHandler, useEffect } from "react";
import { TaskAtom, taskListAtom } from "./atom";
import { useSetAtom } from "jotai";

type TaskProps = {
  task: TaskAtom;
};

function TaskStatus({ className, id }: { className: string; id: string }) {
  const setTaskList = useSetAtom(taskListAtom);

  useEffect(() => {
    console.warn("rendering TaskStatus");
  });

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = () => {
    // Change task status

    setTaskList((taskList) => {
      const currentTask = taskList.find((task) => task.id === id);
      if (currentTask) {
        currentTask.isComplete = !currentTask?.isComplete;
      }
      return taskList;
    });
  };

  return (
    <button onClick={handleOnClick} className={`status status--${className}`}>
      {" "}
    </button>
  );
}

function Task({ task }: TaskProps) {
  const statusClassname = task.isComplete ? "done" : "todo";

  useEffect(() => {
    console.warn("rendering Task");
  });

  return (
    <div className="task-item">
      {task.label} <TaskStatus className={statusClassname} id={task.id} />
    </div>
  );
}

export default Task;
