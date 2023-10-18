import { FormEventHandler, useEffect } from "react";
import { TaskAtom, taskAtom, taskListAtom } from "./atom";
import { useAtom, useSetAtom } from "jotai";

const ADD_TASK_INPUT_ID = "new_task";

function AddTask() {
  const [, setTask] = useAtom(taskAtom);
  const setTaskList = useSetAtom(taskListAtom);

  useEffect(() => {
    console.warn("rendering AddTask");
  });

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const input = document.getElementById(
      ADD_TASK_INPUT_ID
    ) as HTMLInputElement;
    const label = input !== null ? input.value : "";
    if (!label) {
      return;
    }

    const id = `${label.toLowerCase()}-${Math.random() * 1000000}`; // TODO : à optimiser
    const task: TaskAtom = {
      id,
      label,
      isComplete: false,
    };

    setTask(task);
    setTaskList((taskLists) => [...taskLists, task]);
  };

  return (
    <form className="card card--inline" onSubmit={handleOnSubmit}>
      <label htmlFor="new_task">Whatchu gonna do next ?</label>

      <input
        type="text"
        id={ADD_TASK_INPUT_ID}
        name="new_task"
        placeholder=""
      />
    </form>
  );
}

export default AddTask;
