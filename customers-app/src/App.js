import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./containers/Home";
import Customers from "./containers/Customers";
import Customer from "./containers/Customer";
import NewCustomer from "./containers/NewCustomer";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/customers" component={Customers}/>
                    <Switch>
                        <Route path="/customers/new" component={NewCustomer}/>
                        <Route path="/customers/:dni"
                               render={props => <Customer dni={ props.match.params.dni }/>}/>
                    </Switch>
                </div>
            </Router>
        )
    }

}

export default App;
