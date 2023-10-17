import { ChangeEventHandler, FormEventHandler } from "react";
import { taskAtom, taskListAtom } from "./atom";
import { useAtom } from "jotai";

// type AddTaskProps = {
//   setTaskList: (task: string) => void;
// };

function AddTask() {
  const [task, setTask] = useAtom(taskAtom);
  const [, setTaskList] = useAtom(taskListAtom);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value;
    const taskId = `${value.toLowerCase}-${Math.random() * 100}`;
    setTask({
      id: taskId,
      label: value,
      isComplete: false,
    });
  };

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // Vérifier si la tâche est non nulle (pas vide)
    if (task) {
      // Ajoutez la tâche à la liste de tâche
      setTaskList((taskLists) => [...taskLists, task]);
      console.warn("Ajoutez la tâche");
    }
  };

  return (
    <form className="card card--inline" onSubmit={handleOnSubmit}>
      <label htmlFor="new_task">Whatchu gonna do next ?</label>

      <input
        type="text"
        id="new_task"
        name="new_task"
        placeholder=""
        value={task.label ?? ""}
        onChange={handleOnChange}
      />
    </form>
  );
}

export default AddTask;
