import React, { useRef, useEffect, useState } from 'react';
import LOLockingPlot from './plots/LOLockingPlot';
import { Row, Col, Container } from 'react-bootstrap';
import * as plotUtils from '../utils/LOLockingUtils';
import { Dropdown, Radio } from 'semantic-ui-react';
import axios from 'axios';
import NraoLoader from './loaders/NraoLoader';

export default function LOLocking(props) {
  let plotRef = useRef(null);
  let error = useRef(null);
  let typeLeft = useRef(plotUtils.LOLockingOptions[0].value);
  let typeRight = useRef(plotUtils.LOLockingOptions[1].value);
  let plotComponent = useRef(null);
  let optionsListLeft = useRef(null);
  let optionsListRight = useRef(null);

  let [isLoaded, setLoaded] = useState(false);
  let [plots, setPlots] = useState(plotUtils.initOptions);
  let [items, setItems] = useState(null);
  let [width, setWidth] = useState(null);
  let [height, setHeight] = useState(null);

  const fetchData = async () => {
    let query = new URLSearchParams(props.location.search);
    let keyHeader = query.get("keyHeader");
    await axios.get(process.env.REACT_APP_DB_HOSTNAME + "/lo_locking/results?keyheader=" + keyHeader)
      .then(
        (result) => {
          setItems(result.data);
          setLoaded(true);
        },
        (er) => {
          error.current = er;
          setLoaded(true);
        }
      )
  };

  const updateDimensions = () => {
    if (plotRef.current) {
      setWidth(plotRef.current.offsetWidth);
      setHeight(plotRef.current.offsetHeight);
    }
  }

  useEffect(
    () => {
      if (plotRef.current) {
        setWidth(plotRef.current.offsetWidth);
        setHeight(plotRef.current.offsetHeight);
        fetchData();
        window.addEventListener('resize', updateDimensions);
      }
    }, []);

  const handlePlotsChange = (e) => {
    let plotsTemp = { ...plots };
    plotsTemp[e.target.id] = !plotsTemp[e.target.id];
    setPlots({ ...plotsTemp });
  }

  const updateListLeft = (e, { value }) => {
    let plotsTemp = {}
    plotUtils[value].forEach(obj =>
      plotsTemp[obj.key] = true
    )
    plotUtils[typeRight.current].forEach(obj =>
      plotsTemp[obj.key] = true
    )
    typeLeft.current = value;
    setPlots({ ...plotsTemp });
  }

  const updateListRight = (e, { value }) => {
    let plotsTemp = {}
    plotUtils[value].forEach(obj =>
      plotsTemp[obj.key] = true
    )
    plotUtils[typeLeft.current].forEach(obj =>
      plotsTemp[obj.key] = true
    )
    typeRight.current = value;
    setPlots({ ...plotsTemp });
  }

  let plotOptionsListLeft = plotUtils[typeLeft.current];
  let plotOptionsListRight = plotUtils[typeRight.current];
  if (isLoaded && items != null) {
    plotComponent.current =
      <LOLockingPlot key={width} width={width} height={height} margin={10} items={items} plots={plots} typeLeft={typeLeft.current} typeRight={typeRight.current} />
    optionsListLeft.current = plotOptionsListLeft.map(
      obj => {
        return (
          <Row style={{ margin: "1rem" }} key={obj.key} className='w-100'>
            <Radio toggle id={obj.key} key={obj.key} checked={plots[obj.key]} onClick={handlePlotsChange} />
            <span style={{ marginLeft: "1rem", marginRight: "1rem", color: obj.color, fontSize: "40px" }}>—</span>
            <span>{obj.text}</span>
          </Row>)
      });
    optionsListRight.current = plotOptionsListRight.map(
      obj => {
        return (
          <Row style={{ margin: "1rem" }} key={obj.key} className='w-100'>
            <Radio toggle id={obj.key} key={obj.key} checked={plots[obj.key]} onClick={handlePlotsChange} />
            <span style={{ marginLeft: "1rem", marginRight: "1rem", color: obj.color, fontSize: "40px" }}>—</span>
            <span>{obj.text}</span>
          </Row>)
      });
  } else {
    plotComponent.current = <div className="loader-box w-100"><NraoLoader speed={3} /></div>
  }

  return (
    <Container fluid className='mw-100 h-100'>
      <Row className='h-100'>
        <Col className='border-box p-0 h-100' xs={{ span: 2 }}>
          <Row style={{ marginTop: "1rem", marginLeft: "1rem", marginRight: "1rem" }}>
            <Dropdown fluid selection className='icon' onChange={updateListLeft}
              options={plotUtils.LOLockingOptions} defaultValue={typeLeft.current}
            />
          </Row>
          {optionsListLeft.current}
        </Col>
        <Col className='border-box p-0 h-100' xs={{ span: 8 }} ref={plotRef}>
          {plotComponent.current}
        </Col>
        <Col className='border-box p-0 h-100' xs={{ span: 2 }}>
          <Row style={{ marginTop: "1rem", marginLeft: "1rem", marginRight: "1rem" }}>
            <Dropdown fluid selection className='icon' onChange={updateListRight}
              options={plotUtils.LOLockingOptions} defaultValue={typeRight.current}
            />
          </Row>
          {optionsListRight.current}
        </Col>
      </Row>
    </Container>
  );

}
