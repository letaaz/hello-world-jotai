import { useAtom } from "jotai";
import { taskListAtom } from "./atom";
import Task from "./Task";

function TaskList() {
  const [list] = useAtom(taskListAtom);
  const emptyListMessage = "EMPTY LIST FOR NOW";
  const isTaskListEmpty = !list || list.length == 0;

  return isTaskListEmpty ? (
    emptyListMessage
  ) : (
    <ul className="card">
      {list.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
