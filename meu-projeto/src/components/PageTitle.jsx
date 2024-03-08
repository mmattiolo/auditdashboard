import React from 'react';
import './pageTitle.css';

function PageTitle({page}) {
    return (
        <div className="pageTitle">
            <h1>{page}</h1>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#" className="bi bi-house-door"></a>
                    </li>
                    <li className="breadcrumb-item active">{page}</li>
                </ol>
            </nav>
        </div>
    );
}

export default PageTitle;
