import './main.css';
import PageTitle from './PageTitle.jsx';
import Dashboard from './Dashboard.jsx';
import DragDrop from './Kanban/DragDrop.jsx';
import { useActiveComponent } from './Kanban/ActiveComponentContext'; // Certifique-se de que o caminho está correto
import KanbanNavbar from './Kanban/KanbanNavbar.jsx';
import TasksTable from './taskstable/TaskTable.jsx';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.jsx';

function Main() {
  const { activeComponent } = useActiveComponent(); // Use o hook para acessar o estado atual do componente ativo

  return (
    <div>
    <main id='main' className='main'>
    <ErrorBoundary>
      <PageTitle page={activeComponent} />
      {activeComponent === 'Dashboard' && <Dashboard />}
     
      <KanbanNavbar />
      {activeComponent === 'Board' && <DragDrop />}
      {activeComponent === 'Table' && <TasksTable />}
      </ErrorBoundary>
    </main>
    </div>
  );
}

export default Main;
