import profileImg from '../images/avatarImg.jpg';

function NavAvatar() {
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link nav-icon' href='#' data-bs-toggle="dropdown">
        <img src={profileImg} alt='User Avatar' className='user-avatar' />
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className='dropdown-header text-center'>
          <img src= {profileImg} alt='User Avatar' className='rounded-circle mb-2' />
          <h6>Mateus Oliveira</h6>
          <small>Web Developer</small>
        </li>
        
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <a className='dropdown-item' href='#'>
            <i className='bi bi-person'></i> My profile
          </a>
        </li>
        
        <li>
          <a className='dropdown-item' href='#'>
            <i className='bi bi-gear'></i> Account Settings
          </a>
        </li>
        
        <li>
          <a className='dropdown-item' href='#'>
            <i className='bi bi-box-arrow-right'></i> Sign out
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;
