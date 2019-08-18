import React from 'react';
import {Link} from 'react-router-dom'

const CustomerListItem = ({urlPath, name, dni, editAction, delAction}) => {
    return (
        <div className="customers-list-item">
            <div className="field">
                <Link to={`${urlPath}${dni}`}>{name}</Link>
            </div>
            <div className="field">
                <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
            </div>
            <div className="field">
                <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
            </div>
        </div>
    );
};

export default CustomerListItem;
