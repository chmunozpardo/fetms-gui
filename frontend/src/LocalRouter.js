import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import FrontEndsList from './components/FrontEndsList';
import FrontEndDataRouter from './components/FrontEndData';
import BeamPattern from './components/BeamPattern';
import NoiseTemperature from './components/NoiseTemperature';
import LOLocking from './components/LOLocking';
import WorkmanshipAmplitude from './components/WorkmanshipAmplitude';
import { Row, Col, Container } from 'react-bootstrap';
import NraoLoader from './components/loaders/NraoLoader';
import AlmaLoader from './components/loaders/AlmaLoader';
import EsoLoader from './components/loaders/EsoLoader';

class LocalRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" >
          <Container fluid className='w-100'>
            <Row className="loader-box w-100">
              <Col
                className='home-antennas p-0 w-100'
                xs={{ span: 3, offset: 2 }}>
                <AlmaLoader speed={3} />
              </Col>
              <Col
                className='home-antennas p-0 w-100'
                xs={{ span: 3, offset: 0 }}>
                <NraoLoader speed={3} />
              </Col>
              <Col
                className='home-antennas p-0 w-100'
                xs={{ span: 3, offset: 0 }}>
                <EsoLoader speed={3} />
              </Col>
            </Row>
          </Container>
        </Route>
        <Route exact path="/front_ends" component={FrontEndsList}>
        </Route>
        <Route path="/health_check">
        </Route>
        <Route path="/noise_temperature" component={NoiseTemperature}>
        </Route>
        <Route path="/lo_locking" component={LOLocking}>
        </Route>
        <Route path="/workmanship_amplitude" component={WorkmanshipAmplitude}>
        </Route>
        <Route path="/beam_pattern" component={BeamPattern}>
        </Route>
        <Route path="/front_end">
          <FrontEndDataRouter />
        </Route>
        <Redirect from='*' to='/' />
      </Switch>
    )
  }
}

export default withRouter(LocalRouter);