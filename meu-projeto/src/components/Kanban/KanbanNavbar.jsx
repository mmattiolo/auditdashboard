import PropTypes from 'prop-types'; // Importe o PropTypes
import './kanbanNavBar.css'
import DragDrop from './DragDrop.jsx';
import { useState } from 'react'; // Importe useState para lidar com estados locais
import { useActiveComponent } from './ActiveComponentContext.jsx';
import TasksTable from '../taskstable/TaskTable.jsx';


const KanbanNavbar = ({ setFilter, setSort }) => {
  // Estados locais para controle dos dropdowns
  const { setActiveComponent } = useActiveComponent();
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);

  // Função para alternar a visibilidade do dropdown de filtro
  const toggleFilterDropdown = () => setShowFilterDropdown(!showFilterDropdown);

  // Função para alternar a visibilidade do dropdown de prioridade
  const togglePriorityDropdown = () => setShowPriorityDropdown(!showPriorityDropdown);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn nav-link" onClick={() => setActiveComponent('Table')&&<TasksTable/>}>Table</button>
            </li>
            <li className="nav-item">
              <button className ="btn nav-link" onClick={() => setActiveComponent('Board')&&<DragDrop/>}>Board</button>
            </li>
            <li className="nav-item dropdown">
              <button className="btn nav-link dropdown-toggle" onClick={toggleFilterDropdown}>Filter</button>
              {showFilterDropdown && (
                <div className="dropdown-menu show">
                  <button className="dropdown-item" onClick={() => setFilter('all')}>All tasks</button>
                  <button className="dropdown-item" onClick={() => setFilter('active')}>All active tasks</button>
                  <button className="dropdown-item" onClick={() => setFilter('myActive')}>My active tasks</button>
                </div>
              )}
            </li>
            <li className="nav-item dropdown">
              <button className="btn nav-link dropdown-toggle" onClick={togglePriorityDropdown}>Priority</button>
              {showPriorityDropdown && (
                <div className="dropdown-menu show">
                  <button className="dropdown-item" onClick={() => setSort('dueDate')}>Due date</button>
                  <button className="dropdown-item" onClick={() => setSort('importance')}>Importance</button>
                  <button className="dropdown-item" onClick={() => setSort('name')}>Name</button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

KanbanNavbar.propTypes = {
  setFilter: PropTypes.func.isRequired, // setFilter deve ser uma função e é obrigatório
  setSort: PropTypes.func.isRequired, // setSort deve ser uma função e é obrigatório
};

export default KanbanNavbar;
