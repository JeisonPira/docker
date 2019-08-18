import React from 'react';
import CustomerListItem from "./CustomerListItem";
import {accessControl} from "../helpers/accessControl";
import {CUSTOMER_LIST} from "../constants/permissions";

const CustomerList = ({urlPath, customers}) => {
    return (
        <div className="customers-list">
            {
                customers.map(customer =>
                    <CustomerListItem key={customer.dni} name={customer.name} dni={customer.dni}
                                      editAction={'Editar'} delAction={'Borrar'} urlPath={urlPath}/>
                )
            }
        </div>
    );
};

export default accessControl([CUSTOMER_LIST])(CustomerList);
