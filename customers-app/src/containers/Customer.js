import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {SubmissionError} from 'redux-form';
import AppFrame from "../components/AppFrame";
import {getCostumerByDni} from '../selectors/customers'
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";
import {fetchCustomers} from "../actions/fetchCustomers";
import {updateCustomer} from "../actions/updateCustomer";
import {deleteCustomer} from "../actions/deleteCustomer"

class Customer extends Component {

    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers();
        }
    }

    handleOnBack = () => {
        this.props.history.push('/customers');
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));
        const {id} = values;
        return this.props.updateCustomer(id, values).then(r => {
                if (r.error) {
                    throw new SubmissionError(r.payload);
                }
            }
        );
    }

    handleOnDelete = id => {
        return this.props.deleteCustomer(id).then(v => {
            this.props.history.goBack();
        });
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    renderCustomerControl = (isEdit, isDelete) => {
        if (this.props.customer) {
            const CustomerControl = isEdit ? CustomerEdit : CustomerData;
            return <CustomerControl {...this.props.customer} onBack={this.handleOnBack} onDelete={this.handleOnDelete}
                                    onSubmit={this.handleSubmit} onSubmitSuccess={this.handleOnSubmitSuccess}
                                    isDeleteAllow={!!isDelete}/>
        }

        return null;
    }

    renderBody = () => {
        return (
            <Route path="/customers/:dni/edit" children={
                ({match: isEdit}) => (
                    <Route path="/customers/:dni/del" children={
                        ({match: isDelete}) => (
                            this.renderCustomerControl(isEdit, isDelete))
                    }/>)
            }/>
        )
    }

    render() {
        return (
            <div>
                <AppFrame
                    header={`Edición del cliente ${this.props.dni}`}
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

const mapDispatchToProps = {fetchCustomers, updateCustomer, deleteCustomer};

const mapStateToProps = (state, props) => ({
    customer: getCostumerByDni(state, props)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Customer));

