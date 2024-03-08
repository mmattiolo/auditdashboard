import React from 'react'

function NavMessage() {
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link nav-icon' href='#' data-bs-toggle="dropdown">
        <i className='bi bi-chat-left-text'></i>
        <span className='badge bg-danger badge-number'>3</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
          You have 2 new messages
          <a href='#'>
            <span className='badge rounded-pill bg-primary p-2 ms-2'> 
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
        <a href='#'>
          <img 
            src='assets/img/messages-1.jpg'
            alt=''
            className='rounded-circle'
            />
          <div>
            <h4>Ademar Pascal</h4>
            <p>Rebimbica da parafuseta.</p>
            <p>3 hrs. ago</p> 
          </div>
          </a>  
        </li>
        
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
        <a href='#'>
          <img 
            src='assets/img/messages-2.jpg'
            alt=''
            className='rounded-circle'
            />
          <div>
            <h4>Eduardo Jose</h4>
            <p>Motor V8 3x4.</p>
            <p>2 hrs. ago</p> 
          </div>
          </a>  
        </li>
        
        <li>
          <hr className='dropdown-divider' />
         </li>
      </ul>
    </li>
  );
}

export default NavMessage