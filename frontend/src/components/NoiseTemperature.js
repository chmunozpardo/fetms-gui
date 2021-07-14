import React, { useRef, useEffect, useState } from 'react';
import NoiseTemperaturePlot from './plots/NoiseTemperaturePlot';
import { Row, Col, Container } from 'react-bootstrap';
import * as plotUtils from '../utils/noiseTemperatureUtils';
import { Form, Radio } from 'semantic-ui-react';
import axios from 'axios';
import NraoLoader from './loaders/NraoLoader';

export default function NoiseTemperature(props) {
  let plotRef = useRef(null);
  let error = useRef(null);
  let temp = useRef(true);
  let plotComponent = useRef(null);
  let optionsList = useRef(null);

  let [isLoaded, setLoaded] = useState(false);
  let [plots, setPlots] = useState(plotUtils.noiseTemperatureOptions);
  let [items, setItems] = useState(null);
  let [width, setWidth] = useState(null);
  let [height, setHeight] = useState(null);

  const fetchData = async (value) => {
    let query = new URLSearchParams(props.location.search);
    let keyHeader = query.get("keyHeader");
    let temp = value === "temp";
    await axios.get(process.env.REACT_APP_DB_HOSTNAME + process.env.REACT_APP_NOISE_TEMPERATURE_DATA + "?keyheader=" + keyHeader + "&temp=" + temp)
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
        fetchData("temp");
        window.addEventListener('resize', updateDimensions);
      }
    }, []);

  const handlePlotsChange = (e) => {
    let plotsTemp = { ...plots };
    plotsTemp[e.target.id] = !plotsTemp[e.target.id];
    setPlots({ ...plotsTemp });
  }

  const handleTypeChange = (undefined, { value }) => {
    temp.current = value === "temp";
    setLoaded(false);
    fetchData(value);
  }

  if (isLoaded && items != null) {
    plotComponent.current =
      <NoiseTemperaturePlot key={width} width={width} height={height} margin={10} items={items} plots={plots} type={temp.current} />
    optionsList.current = plotUtils.noiseTemperature.map(
      obj => {
        return (
          <Row style={{ margin: "1rem" }} key={obj.key} className='w-100'>
            <Radio toggle id={obj.key} key={obj.key} checked={plots[obj.key]} onClick={handlePlotsChange} />
            <span style={{ marginLeft: "1rem", marginRight: "1rem", color: obj.color, fontSize: "40px" }}>—</span>
            <span>{obj.text}</span>
          </Row>
        )
      }
    )
    optionsList.current.push(
      <Row key="optionsList" style={{ margin: "1rem" }}>
        <Form>
          <Form.Field> Selected value: </Form.Field>
          <Form.Field>
            <Radio label='Temperature' name='radioGroup' value='temp' checked={temp.current} onChange={handleTypeChange} />
          </Form.Field>
          <Form.Field>
            <Radio label='Y Factor' name='radioGroup' value='yfactor' checked={!temp.current} onChange={handleTypeChange} />
          </Form.Field>
        </Form>
      </Row>)
  } else {
    plotComponent.current = <div className="loader-box w-100"><NraoLoader speed={3} /></div>
  }

  return (
    <Container fluid className='mw-100 h-100'>
      <Row className='h-100'>
        <Col className='border-box p-0 h-100' xs={{ span: 9, offset: 1 }} ref={plotRef}>
          {plotComponent.current}
        </Col>
        <Col className='border-box p-0 h-100' xs={{ span: 2 }}>
          {optionsList.current}
        </Col>
      </Row>
    </Container>
  );

}
