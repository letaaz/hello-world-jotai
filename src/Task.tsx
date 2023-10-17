import { TaskAtom } from "./atom";

type TaskProps = {
  task: TaskAtom;
};

function Task({ task }: TaskProps) {
  const statusClassname = task.isComplete ? "done" : "todo";

  return (
    <div className="task-item">
      {task.label}{" "}
      <span className={`status status--${statusClassname}`}> </span>
    </div>
  );
}

export default Task;
