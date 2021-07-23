import React, { useRef, useEffect, useState } from 'react';
import FrontEndsComponents from '../tables/FrontEndComponents';
import NoiseTemperatureList from '../tables/NoiseTemperatureList';
import WorkmanshipAmplitudeList from '../tables/WorkmanshipAmplitudeList';
import BeamPatternList from '../tables/BeamPatternList';
import LOLockingList from '../tables/LOLockingList';
import IFSpectrumList from '../tables/IFSpectrumList';
import { Row, Col, Container } from 'react-bootstrap';
import { Dropdown } from 'semantic-ui-react';
import { componentsOptions, measurementOptions } from '../utils/frontEndUtils';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NraoLoader from './loaders/NraoLoader';
import axios from 'axios';

function FrontEndData(props) {
  let error = useRef(null);
  let mainComponent = useRef(null);
  let defValue = useRef(null);
  let optParam = useRef("");

  let query = new URLSearchParams(props.location.search);
  let config = useRef(query.get("config"));
  let band = useRef(query.get("band"));

  const setOptParam = () => {
    let bandIsNumber = !isNaN(band.current) && band.current != null;
    if (bandIsNumber) {
      optParam.current = "&band=" + band.current;
      defValue.current = componentsOptions.filter(element => element.value === band.current)[0];
    } else {
      optParam.current = "";
      defValue.current = componentsOptions[0]
    }
  }

  setOptParam();

  const componentsList = [
    {
      value: 'components',
      label: "Components",
      url: () => {
        return process.env.REACT_APP_DB_HOSTNAME + "/front_end/components/list?config=" + config.current + optParam.current
      },
      items: useState(null),
      isLoaded: useState(false),
      show: useState(true),
      component: FrontEndsComponents
    },
    {
      value: 'noiseTemperature',
      label: "Noise Temperature",
      url: () => {
        return process.env.REACT_APP_DB_HOSTNAME + "/test_data/noise_temperature/list?config=" + config.current + optParam.current
      },
      items: useState(null),
      isLoaded: useState(false),
      show: useState(true),
      component: NoiseTemperatureList
    },
    {
      value: 'workmanshipAmplitude',
      label: "Workmanship Amplitude",
      url: () => {
        return process.env.REACT_APP_DB_HOSTNAME + "/test_data/amplitude_stability/list?config=" + config.current + optParam.current
      },
      items: useState(null),
      isLoaded: useState(false),
      show: useState(true),
      component: WorkmanshipAmplitudeList
    },
    {
      value: 'beamPattern',
      label: "Beam Pattern",
      url: () => {
        return process.env.REACT_APP_DB_HOSTNAME + "/test_data/beam_pattern/list?config=" + config.current + optParam.current
      },
      items: useState(null),
      isLoaded: useState(false),
      show: useState(true),
      component: BeamPatternList
    },
    {
      value: 'loLocking',
      label: "LO Locking",
      url: () => {
        return process.env.REACT_APP_DB_HOSTNAME + "/test_data/lo_locking/list?config=" + config.current + optParam.current
      },
      items: useState(null),
      isLoaded: useState(false),
      show: useState(true),
      component: LOLockingList
    },
    {
      value: 'ifSpectrum',
      label: "IF Spectrum",
      url: () => {
        return process.env.REACT_APP_DB_HOSTNAME + "/test_data/if_spectrum/list?config=" + config.current + optParam.current
      },
      items: useState(null),
      isLoaded: useState(false),
      show: useState(true),
      component: IFSpectrumList
    }
  ];

  const fetchData = async (elementType) => {
    await axios.get(elementType.url())
      .then(
        (result) => {
          elementType.items[1](result.data);
          elementType.isLoaded[1](true);
        },
        (er) => {
          error.current = er;
          elementType.isLoaded[1](true);
        }
      )
  };

  const getData = () => {
    componentsList.forEach(obj => {
      if (obj.show) fetchData(obj);
    })
  }

  useEffect(getData, []);

  const updateComponents = (e, data) => {
    band.current = data.value;
    setOptParam();
    props.history.push(
      {
        pathname: '/front_end',
        search: '?config=' + config.current + "&band=" + band.current
      }
    );
    componentsList.forEach(obj => {
      obj.isLoaded[1](false);
      obj.items[1](null);
    });
    getData();
  }

  const updateList = (e, data) => {
    componentsList.forEach(obj => {
      if (obj.value === data.value || data.value === 'all') obj.show[1](true);
      else obj.show[1](false);
    });
  }

  const { path } = props.match;

  mainComponent.current = componentsList.map(obj => {
    if (obj.show[0]) {
      let componentTemp = null;
      if (obj.isLoaded[0] && obj.items[0] != null) {
        componentTemp = <obj.component data={obj.items[0]} />
      } else {
        componentTemp = <Row className="p-0 loader-box w-100"><NraoLoader speed={3} /></Row>
      }
      return (
        <div key={obj.label}>
          <Row> <span className="list-title">{obj.label}</span><br /></Row>
          <Row> {componentTemp} </Row>
        </div>
      );
    }
  })

  return (
    <Container fluid className='w-100'>
      <Row className='w-100'>
        <Col className='border-box p-0 w-100' xs={{ span: 2 }}>
          <Row style={{ marginTop: "1rem", marginLeft: "1rem", marginRight: "1rem" }}>
            <Dropdown fluid selection className='icon' onChange={updateComponents} options={componentsOptions}
              defaultValue={defValue.current.value} />
          </Row>
          <Row style={{ marginTop: "1rem", marginLeft: "1rem", marginRight: "1rem" }}>
            <Dropdown fluid selection className='icon' onChange={updateList} options={measurementOptions}
              defaultValue={measurementOptions[0].value} />
          </Row>
        </Col>
        <Col xs={{ span: 8 }}>
          <Route path={`${path}`}>
            {mainComponent.current}
          </Route>
        </Col>
      </Row>
    </Container >
  );
}

const FrontEndDataRouter = withRouter(FrontEndData);
export default FrontEndDataRouter;
