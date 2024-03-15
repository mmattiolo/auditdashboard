import { useState } from 'react';
import "./card.css"
import PropTypes from 'prop-types';
import CardFilter from './CardFilter';

function CustomCard({ card }) {
    const [filter, setFilter] = useState ('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };

  return (
    <div className="col-xxl-4 col-md-6">
      <div className="card card-stats sales-card">
        <CardFilter filterChange ={handleFilterChange} />
        <div className="card-body">
          <h5 className="card-title">
            {card.name} <span>|{filter}</span>
          </h5>

          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className={card.icon}></i>
            </div>
            <div className="ps-3">
            
            <h6>
              {card.amount ? '$' + card.amount.toLocaleString('en-US') : 'No Data'}
            </h6>

              <span
                className={`${
                  card.percentage > 0 ? 'text-success' : 'text-danger'
                } small pt-1 fw-bold`}
              >
                {card.percentage >0
                ? card.percentage *100 
                : -card.percentage *100}
                %
              </span>
              <span className='text-muted small pt-2 ps-1'>
                {card.percentage >0 ? "increase" : "deacrease"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

CustomCard.propTypes = {
  card: PropTypes.shape({
      amount: PropTypes.number,
      percentage: PropTypes.number,
      icon: PropTypes.string,
      name: PropTypes.string
  }).isRequired
};

export default CustomCard