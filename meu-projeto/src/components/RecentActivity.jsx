import { useEffect, useState } from 'react';
import CardFilter from './CardFilter';
import './recentActivity.css';
import PropTypes from 'prop-types';

function RecentActivityItem({ item }) {
    return (
        <div className='activity-item d-flex align-items-center'>
        <div className='activity-label'>{item.time}</div>
        <i className={`bi bi-circle-fill activity-badge ${item.color}`}></i>
        <div className='activity-content'>
            {item.highlight === '' ? (
                item.content
            ) : (
                <>
                    {item.content.substring(0, item.content.indexOf(item.highlight))}
                    <a href='#' className='fw-bold text-dark'>
                        {item.highlight}
                    </a>
                    {item.content.slice(item.content.indexOf(item.highlight) + item.highlight.length)}
                </>
            )}
        </div>
    </div>
);
}
RecentActivityItem.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        highlight: PropTypes.string,
    }).isRequired,
};

function RecentActivity() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };
    
    const fetchData = () => {
        fetch('http://localhost:4000/recentactiviy')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />
            
            <div className="card-body">
                <h5 className="card-title">
                    Recent Activity <span>|{filter}</span>
                </h5>
                
                <div className="activity">
                    {items &&
                        items.length > 0 &&
                        items.map(item => 
                            <RecentActivityItem key={item._id} item={item} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default RecentActivity;
