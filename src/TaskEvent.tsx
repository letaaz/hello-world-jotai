import { useAtomValue } from "jotai";
import { taskAtom } from "./atom";
import { useEffect } from "react";

function TaskEvent() {
  useEffect(() => {
    console.warn("rendering TaskEvent");
  });
  const { label } = useAtomValue(taskAtom);
  if (!label) return null;

  return (
    <div style={{ backgroundColor: "pastel" }}>
      "{label}" a été ajoutée à la liste
    </div>
  );
}

export default TaskEvent;
