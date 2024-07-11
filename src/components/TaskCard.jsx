import yellowDot from '../assets/yellow-dot.svg'
import greenDot from '../assets/green-dot.svg'
import editBtn from '../assets/edit-btn.svg'
import deleteBtn from '../assets/delete-btn.svg'
import calender from '../assets/calender.svg'
import redCalender from '../assets/red-calender.svg'
import '../styles/css/taskCard.css'

function TaskCard ({task, toggleStatus, editModal, deleteToggleModal}){ 
    const statusChange = () =>{
        toggleStatus(task.id, !task.taskstatus);
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

    const duedateRedStyle ={
        backgroundColor: "#C035030F",
        padding: "2px 8px",
        borderRadius: "4px",
        width: "fit-content"
    }

    const duedateTextStyle = {
        color: "#C03503"
    }

    const overDue = new Date(task.duedate)<new Date();

    return (
        <div className="task-box">
            <input type="checkbox" id="task-status" checked={task?.taskstatus} onChange={statusChange}/>
            <div className="task-content">
                <div className="task-title-container">
                    <div className="task-title-content">
                        <h3 className="task-title">{task?.title}</h3>
                        <img src={task.taskstatus ? greenDot: yellowDot}></img>
                    </div>
                    <div className='task-btn'>
                        <button id="edit-btn" onClick={()=> editModal(task)}><img src={editBtn}></img></button>
                        <button id="delete-btn" onClick={()=>deleteToggleModal(task)}><img src={deleteBtn}></img></button>
                    </div>
                </div>
                <p className='task-description'>{task?.description}</p>
                
                
                <div className='task-due-date-container' style={overDue ? duedateRedStyle : {}}>
                    <img src={overDue? redCalender : calender }></img>
                    <p className='task-due-date' style={overDue ? duedateTextStyle : {}}>by {formatDate(task?.duedate)}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskCard