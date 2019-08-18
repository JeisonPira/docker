import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import AppFrame from "../components/AppFrame";
import CustomerEdit from "../components/CustomerEdit";
import {SubmissionError} from "redux-form";
import {insertCustomer} from "../actions/insertCustomer";
import {accessControl} from "../helpers/accessControl";
import {CUSTOMER_EDIT, CUSTOMER_NEW} from "../constants/permissions";

class NewCustomer extends Component {

    handleOnBack = () => {
        this.props.history.push('/customers');
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));
        return this.props.insertCustomer(values).then(r => {
                if (r.error) {
                    throw new SubmissionError(r.payload);
                }
            }
        );
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        const newCustomer = {"id": "", "dni": "", "name": "", "age": 0};
        this.props.user.permissions.push(CUSTOMER_EDIT);
        return (
            <CustomerEdit {...newCustomer} onBack={this.handleOnBack}
                          onSubmit={this.handleSubmit} onSubmitSuccess={this.handleOnSubmitSuccess}>
            </CustomerEdit>
        )
    }

    render() {
        return (
            <div>
                <AppFrame
                    header="Adición de Cliente"
                    body={this.renderBody()}>
                </AppFrame>

            </div>
        );
    }
}

const mapDispatchToProps = {insertCustomer};


export default accessControl([CUSTOMER_NEW])(withRouter(connect(null, mapDispatchToProps)(NewCustomer)));
