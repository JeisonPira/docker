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

    handleSelectionLocation = city => {
        console.log("handleSelectionLocation" + city);
    };

    render() {
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
                                <ForecastExtended>

                                </ForecastExtended>
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
