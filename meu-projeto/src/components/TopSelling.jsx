import { useState, useEffect } from 'react';
import "./recentAndTopSales.css";
import CardFilter from './CardFilter';
import PropTypes from 'prop-types';

function TopSellingItem({ item }) {
    const revenue = item.price * item.sold;
    const formattedRevenue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(revenue);
    return (
        <tr>
            <td><img src={item.preview} alt={item.name} style={{width: '50px', height: '50px'}} /></td>
            <td>{item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>{item.sold}</td>
            <td>{formattedRevenue}</td>
        </tr>
    );
}

TopSellingItem.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        preview: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        sold: PropTypes.number.isRequired,
    }).isRequired,
};


function TopSelling() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };
    
    const fetchData = () => {
        fetch('http://localhost:4000/topselling')
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
        <div className="card top-selling overflow-auto">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body pb-8">
                <h5 className="card-title">
                    Top Selling <span>| {filter}</span>
                </h5>

                <table className="table table-borderless">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Preview</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => <TopSellingItem key={item._id} item={item} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TopSelling;
