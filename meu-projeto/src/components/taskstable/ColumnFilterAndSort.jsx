import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import './columnFilterAndSort.css'

const ColumnFilterAndSort = ({ items = [], onFilterChange, onSortChange, itemType }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const handleIconClick = () => {
    if (!dropdownOpen) {
      setDropdownOpen(true);
    }

  };
  // Função para fechar o dropdown
  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="dropdown" onMouseLeave={handleMouseLeave}>
       <i className="bi bi-filter" onClick={handleIconClick} style={{cursor: 'pointer'}}></i>
      {dropdownOpen && (
        <ul className="dropdown-menu show" onMouseEnter={() => setDropdownOpen(true)}>
          <li><span className="dropdown-item-text">Sort</span></li>
          <li><button className="dropdown-item" onClick={() => onSortChange('Ascending', itemType)}>Ascending</button></li>
          <li><button className="dropdown-item" onClick={() => onSortChange('Descending', itemType)}>Descending</button></li>
          <li><hr className="dropdown-divider" /></li>
          <li><span className="dropdown-item-text">Filter</span></li>
          {items.length > 0 && <li><button className="dropdown-item" onClick={() => onFilterChange('', itemType)}>All</button></li>}
          {items.map((item, index) => (
            <li key={index}><button className="dropdown-item" onClick={() => onFilterChange(item, itemType)}>{item}</button></li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Define PropTypes
ColumnFilterAndSort.propTypes = {
  items: PropTypes.array,
  onFilterChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  itemType: PropTypes.string
};

export default ColumnFilterAndSort;
