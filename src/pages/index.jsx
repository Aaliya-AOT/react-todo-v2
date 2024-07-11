import { useEffect, useState } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import TaskContainer from "../components/TaskContainer";
import TaskFilter from "../components/TaskFilter";
import "./index.css";
import { ClearCompleted, DeleteTask, DisplayTask, UpdateTaskStatus } from "../services/taskServices";
import DeleteModal from "../components/DeleteModal";

function Index() {
  const [mode,setMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [sortOption,setSortOption] = useState("Newest First");
  const [modalType,setModalType] = useState("Add")
  const [currentTask, setCurrentTask] = useState(null);

  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const deleteToggleModal = (task) =>{
    setCurrentTask(task)
    setIsDeleteModalOpen(!isDeleteModalOpen)
  }

  const addModal = () =>{
    setModalType("Add")
    setCurrentTask(null)
    toggleModal();
  }

  const editModal = (task) =>{
    setModalType("Edit")
    setCurrentTask(task)
    toggleModal();
  }

  useEffect(() => {
    DisplayTask()
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      setMode(false)
  }, [mode]);

  const toggleStatus = async (id,taskstatus) => {
    try{
      await UpdateTaskStatus(id, taskstatus);
      setMode(true);
    }
    catch(error){
      console.log(error)
    }
  };
 
  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  const handleSort = (sortOption)=>{
    setSortOption(sortOption);
  }

  const handleDelete = async (id) => {
    try {
      await DeleteTask(id);
      setMode(true)
      deleteToggleModal()
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const clearCompletedTask = async()=>{
    try{
      await ClearCompleted();
      setMode(true)
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div className="main-container">
      <Header toggleModal={addModal} />
      <TaskFilter onSearch={handleSearch} onSort={handleSort} />
      <TaskContainer
        searchText={searchText}
        tasks={tasks}
        toggleStatus={toggleStatus}
        sortOption={sortOption}
        editModal = {editModal}
        deleteToggleModal = {deleteToggleModal}
        clearCompletedTask={clearCompletedTask}
      />
      {isModalOpen && <Modal onClose={toggleModal} modalType={modalType} task={currentTask} setMode={setMode}/>}
      {isDeleteModalOpen && <DeleteModal onClose={deleteToggleModal} task={currentTask} onDelete={handleDelete}/>}
    </div>
  );
}

export default Index;
