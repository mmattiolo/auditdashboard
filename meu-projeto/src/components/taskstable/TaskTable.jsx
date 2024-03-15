import { useState, useEffect,useRef } from 'react';
import PropTypes from 'prop-types';
import ColumnFilterAndSort from './ColumnFilterAndSort';
import './taskTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from '../pagination/Pagination';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function TasksTable({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks || []);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  
  
  // Referências para os campos do formulário
  const contentRef = useRef();
  const areaRef = useRef();
  const deadlineRef = useRef();
  const responsibleRef = useRef();
  const statusRef = useRef();

  const handleAddTask = () => {
    // Obter os valores do formulário
    const newTask = {
      id: tasks.length + 1, // Simples geração de ID, considere usar algo mais robusto
      content: contentRef.current.value,
      area: areaRef.current.value,
      deadline: deadlineRef.current.value,
      responsible: responsibleRef.current.value,
      status: statusRef.current.value,
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
    setSortedTasks(prevTasks => [...prevTasks, newTask]);
    handleClose();

    // Aqui você faria a chamada para a API para persistir a nova tarefa
  };

  const [sortedTasks, setSortedTasks] = useState(initialTasks || []);
  const [currentPage, setCurrentPage] = useState(1); // Moved up
  const tasksPerPage = 10; // Define your tasks per page

  useEffect(() => {
    if (!initialTasks) {
      const fetchTasks = async () => {
        try {
          const response = await fetch('./api/tasks.json'); // Adjust the URL as necessary
          const data = await response.json();
          setTasks(data.tasks);
          setSortedTasks(data.tasks); // Starts with tasks sorted the same way they were loaded
        } catch (error) {
          console.error('Failed to fetch tasks:', error);
        }
      };
      fetchTasks();
    }
  }, [initialTasks]);

  const totalItems = sortedTasks.length;

  const compareValues = (key, order = 'asc') => (a, b) => {
    // Using Object.prototype.hasOwnProperty.call to check for property existence
    if (!Object.prototype.hasOwnProperty.call(a, key) || !Object.prototype.hasOwnProperty.call(b, key)) {
      return 0;
    }
  
    const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
  
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
  
    return (order === 'desc') ? (comparison * -1) : comparison;
  };

  const handleSortChange = (direction, itemType) => {
    const keyMap = {
      Name: 'content',
      Area: 'area',
      DueDate: 'deadline',
      Assignee: 'responsible',
      Status: 'status',
    };

    const order = direction === 'Ascending' ? 'asc' : 'desc';
    const sorted = [...sortedTasks].sort(compareValues(keyMap[itemType], order));
    setSortedTasks(sorted);
  };

  const handleFilterChange = (value, itemType) => {
    const keyMap = {
      Name: 'content',
      Area: 'area',
      DueDate: 'deadline',
      Assignee: 'responsible',
      Status: 'status',
    };

    const filteredTasks = tasks.filter(task => {
      const taskValue = task[keyMap[itemType]];
      return value === '' || taskValue.toString().toLowerCase().includes(value.toLowerCase());
    });

    setSortedTasks(filteredTasks);
  };

  const statusToBadgeClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Planned':
        return 'warning';
      case 'Ongoing':
        return 'danger';
        case 'Review':
          return 'dark';
        case 'Prepared':
          return 'info';
      default:
        return 'secondary';
    }
  };
  // Pagination: Calculate the currently displayed tasks
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = sortedTasks.slice(indexOfFirstTask, indexOfLastTask);

  // Change page function
  const paginate = pageNumber => setCurrentPage(pageNumber);

   return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name <ColumnFilterAndSort onFilterChange={handleFilterChange} onSortChange={handleSortChange} itemType="Name" /></th>
            <th>Area <ColumnFilterAndSort onFilterChange={handleFilterChange} onSortChange={handleSortChange} itemType="Area" /></th>
            <th>Due date <ColumnFilterAndSort onFilterChange={handleFilterChange} onSortChange={handleSortChange} itemType="DueDate" /></th>
            <th>Assignee <ColumnFilterAndSort onFilterChange={handleFilterChange} onSortChange={handleSortChange} itemType="Assignee" /></th>
            <th>Status <ColumnFilterAndSort items={[...new Set(tasks.map(task => task.status))]} onFilterChange={handleFilterChange} onSortChange={handleSortChange} itemType="Status" /></th>
          </tr>
        </thead>
        <tbody>
          {sortedTasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1 + (currentPage - 1) * tasksPerPage}</td>
              <td>{task.content}</td>
              <td>{task.area}</td>
              <td>{task.deadline}</td>
              <td>{task.responsible}</td>
              <td> 
              <span className={`badge bg-${statusToBadgeClass(task.status)}`}>
                {task.status}
              </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button variant="primary" onClick={handleShow} className="btn btn-outline-secondary">+</button>
      <span className='addtask'>Add task</span>
      <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Formulário para adicionar nova tarefa */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Task Name</Form.Label>
            <Form.Control type="text" placeholder="Enter task name" ref={contentRef} />
          </Form.Group>
          {/* Adicione campos similares para área, deadline, responsável e status */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddTask}>
          Save Changes
        </Button>
      </Modal.Footer>
      </Modal>

      <Pagination
        itemsPerPage={tasksPerPage}
        totalItems={sortedTasks.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
TasksTable.propTypes = {
  // Atualizado para refletir o novo nome da prop
  initialTasks: PropTypes.array,
};

export default TasksTable;