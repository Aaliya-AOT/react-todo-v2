import { useEffect, useState } from "react";
import close from "../assets/close.svg";
import { CreateTask, EditTask } from "../services/taskServices";
import "../styles/css/modal.css";

function Modal({ onClose, modalType, task ,setMode}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duedate, setDueDate] = useState("");

  useEffect(() => {
    if (modalType === "Edit" && task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.duedate);
    }
    else{
      setTitle("");
      setDescription("");
      setDueDate("");
    }
  }, [modalType, task]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formTask = {
      title: title,
      description: description,
      duedate: duedate,
    };
    console.log(formTask);
    try {
      if (modalType === "Add") {
        const response = await CreateTask(formTask);
        setMode(true)
        console.log(response);
      }
      else if(modalType ==="Edit"){
        const response = await EditTask({...formTask, id : task.id});
        setMode(true)
        console.log("edit inside modal",response)
      }
    } catch (error) {
      console.log(error);
    }
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2 className="modal-title">{modalType === "Add"? "Add Task":"Edit Task"}</h2>
        <button id="top-cancel-btn" onClick={onClose}>
          <img src={close}></img>
        </button>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="modal-content">
          <div className="task-title-field">
            <label htmlFor="task-name" className="task-name-label">
              Title *
            </label>
            <input
              type="text"
              placeholder="eg. Create two ad banners"
              id="task-name"
              value={title}
              style={ modalType === "Add" ? { color:'#A3A3A3'} : {color : '#282829'} }
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="task-description-field">
            <label htmlFor="task-detail" className="task-detail-label">
              Description
            </label>
            <textarea
              id="task-detail"
              placeholder="Add your task description."
              value={description}
              style={ modalType === "Add" ? { color:'#A3A3A3'} : {color : '#282829'} }
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="task-date-field">
            <label htmlFor="task-date" className="task-date-label">
              Due Date
            </label>
            <input
              id="task-date"
              type="date"
              value={duedate}
              style={ modalType === "Add" ? { color:'#A3A3A3'} : {color : '#282829'} }
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="task-btn-field">
            <button id="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" id="add-task-btn">
            {modalType === "Add"? "Add Task":"Update Task"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
