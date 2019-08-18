import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchCustomers} from '../actions/fetchCustomers';
import AppFrame from "../components/AppFrame";
import CustomerList from "../components/CustomerList";
import CustomersActions from "../components/CustomersActions";
import {getCustomers} from "../selectors/customers";

class Customers extends Component {

    componentDidMount() {
        if (this.props.customers.length === 0) {
            this.props.fetchCustomers();
        }
    }

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomerList
                customers={customers}
                urlPath="/customers/">
            </CustomerList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame
                    header="Listado de Clientes"
                    body={this.renderBody(this.props.customers)}/>
            </div>
        );
    }
}


Customers.defaultProps = {customers: []};

const mapDispatchToProps = {fetchCustomers};
const mapStateToProps = state => ({
    customers: getCustomers(state)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Customers));
