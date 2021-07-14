import React, { useRef, useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import WorkmanshipAmplitudePlot from './plots/WorkmanshipAmplitudePlot';
import { Dropdown } from 'semantic-ui-react';
import * as plotUtils from '../utils/workmanshipAmplitudeUtils.js';
import { Radio } from 'semantic-ui-react'
import { SolarSystemLoading } from 'react-loadingg';
import axios from 'axios';

export default function WorkmanshipAmplitude(props) {
  let plotRef = useRef(null);
  let error = useRef(null);
  let type = useRef(plotUtils.workmanshipAmplitudeOptions[0].value);
  let plotComponent = useRef(null);
  let optionsList = useRef(null);

  let [isLoaded, setLoaded] = useState(false);
  let [plots, setPlots] = useState(plotUtils.initOptions);
  let [items, setItems] = useState(null);
  let [width, setWidth] = useState(null);
  let [height, setHeight] = useState(null);

  const fetchData = async () => {
    let query = new URLSearchParams(props.location.search);
    let keyHeader = query.get("keyHeader");
    await axios.get(process.env.REACT_APP_DB_HOSTNAME + "/workmanship_amplitude/results?keyheader=" + keyHeader)
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

  const updateList = (e, { value }) => {
    let plotsTemp = {}
    plotUtils[value].forEach(obj =>
      plotsTemp[obj.key] = true
    )
    type.current = value;
    setPlots({ ...plotsTemp });
  }


  let plotOptionsList = plotUtils[type.current]
  if (isLoaded && items != null) {
    plotComponent.current =
      <WorkmanshipAmplitudePlot key={width} width={width} height={height} margin={10} items={items} plots={plots} type={type.current} />
    optionsList.current = plotOptionsList.map(
      obj => {
        return (
          <Row style={{ margin: "1rem" }} key={obj.key} className='w-100'>
            <Radio toggle id={obj.key} key={obj.key} checked={plots[obj.key]} onClick={handlePlotsChange} />
            <span style={{ marginLeft: "1rem", marginRight: "1rem", color: obj.color, fontSize: "40px" }}>—</span>
            <span>{obj.text}</span>
          </Row>)
      })
  } else {
    plotComponent.current = <div className="loader-box w-100"><SolarSystemLoading color="#19475E" /></div>
    optionsList.current = <div></div>
  }

  return (
    <Container fluid className='mw-100 h-100'>
      <Row className='h-100'>
        <Col className='border-box p-0 h-100' xs={{ span: 9, offset: 1 }} ref={plotRef}>
          {plotComponent.current}
        </Col>
        <Col className='border-box p-0 h-100' xs={{ span: 2 }}>
          <Row style={{ marginTop: "1rem", marginLeft: "1rem", marginRight: "1rem" }}>
            <Dropdown fluid selection className='icon' onChange={updateList}
              options={plotUtils.workmanshipAmplitudeOptions} defaultValue={type.current}
            />
          </Row>
          {optionsList.current}
        </Col>
      </Row>
    </Container>
  );
}
