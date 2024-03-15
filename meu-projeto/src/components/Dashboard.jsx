import { useState, useEffect } from 'react';
import './dashboard.css';
import CustomCard from './CustomCard';
import Reports from './Reports';
import RecentSales from './RecentSales';
import TopSelling from './TopSelling';
import RecentActivity from './RecentActivity';

function Dashboard() {
    const [cards, setCards] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:4000/cards')
            .then(res => res.json())
            .then(data => {
                setCards(data);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="dashboard section">
            <div className="row">
                {/* Coluna principal (Esquerda) */}
                <div className="col-lg-8">
                    {/* Cartões personalizados */}
                    <div className="row">
                        {cards && cards.length > 0 &&
                            cards.map(card => <CustomCard key={card._id} card={card} />)
                        }
                    </div>
                    {/* Relatórios */}
                    <div className='col-12'>
                        <Reports />
                    </div>
                    {/* Vendas recentes */}
                    <div className='col-12' style={{ marginTop: '10px' }}>
                        <RecentSales />
                    </div>
                    {/* Mais vendidos */}
                    <div className='col-12' style={{ marginTop: '10px' }}>
                        <TopSelling />
                    </div>
                </div>

                {/* Coluna secundária (Direita) */}
                <div className="col-lg-4" style={{ marginTop: '10px' }}>
                    {/* Atividade recente no topo à direita */}
                    <RecentActivity />
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
