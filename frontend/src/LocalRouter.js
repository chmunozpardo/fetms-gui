import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import * as Comp from "./components/index";
import { Row, Col, Container } from "react-bootstrap";
import NraoLoader from "./loaders/NraoLoader";
import AlmaLoader from "./loaders/AlmaLoader";
import EsoLoader from "./loaders/EsoLoader";

class LocalRouter extends Component {
  render() {
    return (
      <Container
        style={{ overflow: "auto", marginBottom: "34px", height: "100%" }}
        fluid
        className="w-100"
      >
        <Switch>
          <Route exact path="/">
            <Container fluid className="w-100">
              <Row className="loader-box w-100">
                <Col
                  className="home-antennas p-0 w-100"
                  xs={{ span: 3, offset: 2 }}
                >
                  <AlmaLoader speed={3} />
                </Col>
                <Col
                  className="home-antennas p-0 w-100"
                  xs={{ span: 3, offset: 0 }}
                >
                  <NraoLoader speed={3} />
                </Col>
                <Col
                  className="home-antennas p-0 w-100"
                  xs={{ span: 3, offset: 0 }}
                >
                  <EsoLoader speed={3} />
                </Col>
              </Row>
            </Container>
          </Route>
          <Route
            exact
            path="/front_ends"
            component={Comp.FrontEndsList}
          ></Route>
          <Route path="/login" component={Comp.LoginForm}></Route>
          <Route path="/current" component={Comp.Current}></Route>
          <Route
            path="/noise_temperature"
            component={Comp.NoiseTemperature}
          ></Route>
          <Route path="/if_spectrum" component={Comp.IFSpectrum}></Route>
          <Route path="/lo_locking" component={Comp.LOLocking}></Route>
          <Route
            path="/workmanship_amplitude"
            component={Comp.WorkmanshipAmplitude}
          ></Route>
          <Route path="/beam_pattern" component={Comp.BeamPattern}></Route>
          <Route path="/front_end">
            <Comp.FrontEndDataRouter />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
    );
  }
}

export default withRouter(LocalRouter);
