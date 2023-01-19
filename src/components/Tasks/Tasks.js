import Task from "../Task";
import css from "./style.css";


function Tasks({ tasks }) {
  return (
    <div className="row" id="list">
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
}

export default Tasks;
