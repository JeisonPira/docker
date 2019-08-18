import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Col, Container, Row} from 'react-bootstrap';
import LocationListContainer from './containers/LocationListContainer'
import ForecastExtendedContainer from './containers/ForecastExtendedContainer'
import './App.css';

const cities = ["Bogota,col", "Madrid,es", "Sidney,aus",
    "Tokio,jpn", "Kimberley,afr"];

class App extends Component {

    constructor() {
        super();
        this.state = {city: null}
    }

    render() {
        const {city} = this.state;
        return (
            <Container>
                <Row>
                    <AppBar position='sticky'>
                        <Toolbar>
                            <Typography variant='h6'>
                                Weather APP
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationListContainer cities={cities}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className="details">
                                <ForecastExtendedContainer city={city}/>
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
