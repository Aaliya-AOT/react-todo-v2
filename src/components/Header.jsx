import '../styles/css/header.css'
function Header({ toggleModal }) {
  return (
    <div className="header-container">
      <h6 className='header-title'>My Tasks</h6>
      <button id="add-btn" onClick={toggleModal}>Add New Task</button>
    </div>
  );
}

export default Header;
