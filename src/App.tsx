import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TaskEvent from "./TaskEvent";
import BoilerplateApp from "./boilerplate/Todo";

function App() {
  const url = new URLSearchParams().get("a");

  return (
    <>
      {!url ? (
        <BoilerplateApp />
      ) : (
        <>
          <AddTask />
          <TaskList />
          <TaskEvent />
        </>
      )}
    </>
  );
}

export default App;
