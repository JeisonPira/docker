import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Container, Row, Col} from 'react-bootstrap';
import LocationList from './components/LocationList'
import ForecastExtended from './components/ForecastExtended'
import './App.css';

const cities = ["Bogota,col", "Madrid,es", "Sidney,aus",
    "Tokio,jpn", "Kimberley,afr"];

class App extends Component {

    constructor(){
        super();
        this.state = { city: null }
    }

    handleSelectionLocation = city => {
        this.setState({city: city});
    };

    render() {
        const { city } = this.state;
        return (
            <Container>
                <Row>
                    <AppBar position='sticky'>
                        <Toolbar>
                            <Typography variant='title' color='inherit'>
                                Weather APP
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList cities={cities}
                          onSelectedLocation={this.handleSelectionLocation}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className="details">
                                { city && <ForecastExtended city={city}/> }
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
