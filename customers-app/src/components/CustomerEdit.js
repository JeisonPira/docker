import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Prompt} from 'react-router-dom';
import {setPropsAsInitial} from '../helpers/setPropsAsInitial';
import CustomersActions from "./CustomersActions";
import {accessControl} from "../helpers/accessControl";
import {CUSTOMER_EDIT} from './../constants/permissions';

const isRequired = value => (
    !value && "Este campo es requerido"
);
const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);
const validate = values => {
    const error = {};
    if (!values.name) {
        error.name = "El campo nombre es requerido"
    }
    return error;
};

const toNumber = value => value && Number(value);
const toLower = value => value && value.toLowerCase();
const onlyGrow = (value, previousValue, values) =>
    value && (!previousValue ? value : (value > previousValue ? value : previousValue));

class CustomerEdit extends Component {

    componentDidMount() {
        if (this.txt) {
            this.txt.focus();
        }
    }

    myField = ({input, meta, type, name, label, withFocus}) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...input} type={!type ? "text" : type} ref={withFocus && (txt => {
                this.txt = txt;
            })}/>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );

    render() {
        const {handleSubmit, submitting, onBack, pristine, submitSucceeded} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name="dni" component={this.myField} type="text" validate={isRequired} label="DNI"/>
                    <Field withFocus name="name" component={this.myField} type="text" label="Nombre" format={toLower}/>
                    <Field name="age" component={this.myField} type="number" parse={toNumber}
                           validate={[isRequired, isNumber]} label="Edad" normalize={onlyGrow}/>
                    <CustomersActions>
                        <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                        <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                    </CustomersActions>
                    <Prompt when={!pristine && !submitSucceeded} message="Se perderán los datos si continúa"></Prompt>
                </form>
            </div>
        )
    }
};

const customerEditForm = reduxForm({
    form: 'customerEdit',
    validate
})(CustomerEdit);

export default accessControl([CUSTOMER_EDIT])(setPropsAsInitial(customerEditForm));
