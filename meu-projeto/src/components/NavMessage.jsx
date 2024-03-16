import React from 'react'
import messageImg1 from '../images/messages-1.jpg'; // Importa a imagem
import messageImg2 from '../images/messages-2.jpg'; // Importa a imagem

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
            src={messageImg1}
            alt=''
            className='rounded-circle'
            />
          <div>
            <h4>Ademar Pascal</h4>
            <p>Lorem ipsum dolor sit.</p>
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
            src={messageImg2}
            alt=''
            className='rounded-circle'
            />
          <div>
            <h4>Eduardo Jose</h4>
            <p>Lorem, ipsum dolor.</p>
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