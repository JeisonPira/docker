import React from 'react';

const AppHeader = ({title}) => {
    return (
        <div>
            <div className="app-header">
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default AppHeader;
