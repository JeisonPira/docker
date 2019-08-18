import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import AppFrame from "../components/AppFrame";
import CustomersActions from "../components/CustomersActions";

class Home extends Component {

    handleOnClick = () => {
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame
                    header="Home"
                    body={
                        <div>
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    }
                />
            </div>
        );
    }
}

export default withRouter(Home);
