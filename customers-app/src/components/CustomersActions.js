import React from 'react';

const CustomersActions = ({ children }) => {
    return (
        <div>
            <div className="customers-actions">
                <div>{children}</div>
            </div>
        </div>
    );
};


export default CustomersActions;
