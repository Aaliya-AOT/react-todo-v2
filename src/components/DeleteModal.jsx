import close from '../assets/close.svg'
import '../styles/css/deleteModal.css'

function DeleteModal({onClose,onDelete,task}) {
  return (
    <div className="delete-modal-container">
      <div className="delete-modal-close">
        <button id="close-btn" onClick={onClose}>
          <img src={close}></img>
        </button>
      </div>
      <div className="delete-modal-content">
        <div className="delete-modal-title">
          <h3 className="delete-title">Delete Task?</h3>
        </div>
        <div className="delete-modal-body">
          <p className="delete-message">
            Are you sure you want to delete this task?
          </p>
        </div>
        <div className="delete-modal-footer">
          <button id="delete-modal-cancel" onClick={onClose}>Cancel</button>
          <button id="delete-modal-confirm" onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}


export default DeleteModal