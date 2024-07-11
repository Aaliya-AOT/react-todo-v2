import "../styles/css/taskContainer.css";
import TaskCard from "./TaskCard";

function TaskContainer({
  tasks,
  toggleStatus,
  searchText,
  sortOption,
  editModal,
  deleteToggleModal,
  clearCompletedTask,
}) {
  const filteredTask = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "Newest First") {
        return new Date(b.duedate) - new Date(a.duedate);
      } else {
        return new Date(a.duedate) - new Date(b.duedate);
      }
    });

  const activeTasks = filteredTask.filter((task) => !task.taskstatus);
  const completedTasks = filteredTask.filter((task) => task.taskstatus);

  return (
    <div className="main-task-container">
      <div className="active-list-container">
        <span className="task-heading">Active Tasks</span>
        {activeTasks.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
            toggleStatus={toggleStatus}
            editModal={editModal}
            deleteToggleModal={deleteToggleModal}
          />
        ))}
      </div>
      <div className="completed-list-container">
        <div className="completed-title">
          <span className="task-heading">Completed Tasks</span>
          <button id="clear-completed-btn" onClick={clearCompletedTask}>
            Clear Completed Tasks
          </button>
        </div>
        {completedTasks.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
            toggleStatus={toggleStatus}
            editModal={editModal}
            deleteToggleModal={deleteToggleModal}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskContainer;
