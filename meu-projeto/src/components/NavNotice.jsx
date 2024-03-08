import React from 'react';

function NavNotice() {
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link nav-icon' href='#' data-bs-toggle="dropdown">
        <i className='bi bi-bell'></i>
        <span className='badge bg-danger badge-number'>2</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
        <li className='dropdown-header'>
          You have 2 new notifications
          <a href='#'>
            <span className='badge rounded-pill bg-primary p-2 ms-2'> 
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='notification-item'>
          <i className='bi bi-exclamation-circle text-warning'></i>
          <div>
            <h4>Loren Ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>1 hr ago</p> 
          </div>  
        </li>
        
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='notification-item'>
          <i className='bi bi-check-circle text-success'></i>
          <div>
            <h4>Sit rerem</h4>
            <p>Bla bla bla bla</p>
            <p>2 hrs ago</p> 
          </div>  
        </li>
        
        <li>
          <hr className='dropdown-divider' />
        </li>
      </ul>
    </li>
  );
}

export default NavNotice;
