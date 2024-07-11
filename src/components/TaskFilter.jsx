import searchIcon from "../assets/search-icon.svg";
import "../styles/css/taskFilter.css";


function TaskFilter({ onSearch, onSort }) {
  const handleSearchBar = (event) => {
    onSearch(event.target.value);
  };

  const handleSortOption = (event) => {
    onSort(event.target.value);
  };

  return (
    <div className="task-filter">
      <div className="search-task">
        <input
          type="text"
          id="search-bar"
          placeholder="Search by task name"
          onChange={handleSearchBar}
        />
        <img src={searchIcon} alt="search-icon"></img>
      </div>
      <div className="sort-task">
        <span className="sort-label">Sort by :</span>
        <div className="sort-dropdown-container">
          <select className="sort-dropdown" id="sort-dropdown" onChange={handleSortOption}>
            <option value="Newest First">Newest First</option>
            <option value="Oldest First">Oldest First</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TaskFilter;
