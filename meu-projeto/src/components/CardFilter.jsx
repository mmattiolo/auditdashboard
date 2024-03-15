import "./card.css"
import PropTypes from 'prop-types';

function CardFilter({filterChange}) {
  return (
    <div className="filter">
      <button className="icon" data-bs-toggle="dropdown">
        <i className="bi bi-three-dots"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          Filter
        </li>
        <li className="dropdown-item" onClick={() => filterChange('Today')}>
          Today
        </li>
        <li className="dropdown-item" onClick={() => filterChange('Month')}>
          Month
        </li>
        <li className="dropdown-item" onClick={() => filterChange('Year')}>
          Year
        </li>
        {/* Outros itens do dropdown */}
      </ul>
    </div>
  );
}

CardFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default CardFilter;
