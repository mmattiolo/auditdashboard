import { useState } from 'react';
import './sideBar.css';
import { navList } from '../data/NavItem';
import { getStatusClass } from './Functions.jsx';
import { useActiveComponent } from './Kanban/ActiveComponentContext.jsx'

function SideBar() {
  const { setActiveComponent } = useActiveComponent();
  // State to track the active menu item
  const [activeItem, setActiveItem] = useState('Dashboard');

  // Function to update the active item
  const handleSetActiveItem = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <aside id='sidebar' className='sidebar'>
      <ul className='sidebar-nav' id='sidebar-nav'>

        {/* Dashboard */}
        <li className='nav-item'>
          <a 
            className={`nav-link collapsed ${activeItem === 'Dashboard' ? 'active' : ''}`} 
            href='#' 
            onClick={() => setActiveComponent('Dashboard')}
          >
            <i className='bi bi-house'></i>
           <span>Dashboard</span>
          </a>
        </li>

        {/* Project Management */}
        <li className='nav-item'>
          <a
            className={`nav-link collapsed ${activeItem === 'Project Management' ? 'active' : ''}`}
            data-bs-target='#project-management-nav'
            data-bs-toggle='collapse'
            href='#'
            onClick={() => handleSetActiveItem('Project Management')}
          >
            <i className='bi bi-calendar4-week'></i>
            <span>Project Management</span>
          </a>

          <ul
            id='project-management-nav'
            className='mm-show mm-collapse'
            data-bs-parent='#sidebar-nav'
          >
        <li className='nav-item'>
          <a href='#' onClick={() => setActiveComponent('To-do')} className='nav-link'>
            <span>To-do</span>
          </a>
        </li>

        <li className='nav-item'>
          <a href='#' onClick={() => setActiveComponent('Sprint')} className='nav-link'>
            <span>Sprint</span>
          </a>
        </li>

        <li className='nav-item'>
          <a href='#' onClick={() => setActiveComponent('Standup')} className='nav-link'>
            <span>Standup</span>
          </a>
        </li>

        <li className='nav-item'>
          <a href='#' onClick={() => setActiveComponent('People')} className='nav-link'>
            <span>People</span>
          </a>
        </li>
        </ul>
        </li>
        {/* Audit Program */}
 <li className='nav-item'>
          <a
            className='nav-link collapsed'
            data-bs-target='#audit-program-nav'
            data-bs-toggle='collapse'
            href='#'
          >
            <i className='bi bi-journal-text'></i>
            <span>Audit program</span>
            
          </a>
          <ul
            id='audit-program-nav'
            className='nav-content collapse'
            data-bs-parent='#sidebar-nav'
          >
            {navList.map((item, index) => (
              <li key={item._id}>
                <a
                  href='#'
                  className="nav-link collapsed" // Adiciona a classe 'collapsed'
                  data-bs-toggle='collapse' // Permite que o item seja colapsável
                  data-bs-target={`#subArea-collapse-${index}`} // Define um target único baseado no index
                >
                  <span>{item.area}</span>
                  <i className='bi bi-chevron-down ms-auto'></i>
                </a>
                <ul
                  id={`subArea-collapse-${index}`} // Define um ID único baseado no index
                  className="nav-sub-content collapse" // Inicia colapsado
                >
                  {item.subAreas.map((subItem, subIndex) => (
                    <li key={subItem._id}>
                      <a href='#'>
                        <i className={`bi bi-circle-fill ${getStatusClass(subItem.status)}`}></i>
                        <span className="icon-title">{subItem.area}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </aside>
  );
}
export default SideBar;
