import React, { useRef, useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import * as plotUtils from '../utils/ifSpectrumUtils';
import { Radio } from 'semantic-ui-react';
import axios from 'axios';
import NraoLoader from './loaders/NraoLoader';
import IFSpectrumPlot from './plots/IFSpectrumPlot';

export default function IFSpectrum(props) {
  let plotRef = useRef(null);
  let error = useRef(null);
  let temp = useRef(true);
  let plotComponent = useRef(null);
  let LOList = useRef(null);
  let optionsList = useRef(null);

  let [isLoaded, setLoaded] = useState(false);
  let [plots, setPlots] = useState(null);
  let [items, setItems] = useState(null);
  let [width, setWidth] = useState(null);
  let [height, setHeight] = useState(null);

  const fetchData = async () => {
    let query = new URLSearchParams(props.location.search);
    let keyHeader = query.get("keyHeader");
    await axios.get(process.env.REACT_APP_DB_HOSTNAME + "/if_spectrum/results?keyheader=" + keyHeader)
      .then(
        (result) => {
          LOList.current = result.data.LOList;
          let plotsTemp = {};
          LOList.current.forEach(
            obj => {
              plotsTemp[obj] = true;
            });
          setPlots(plotsTemp);
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

  if (isLoaded && items != null) {
    plotComponent.current =
      <IFSpectrumPlot key={width} width={width} height={height} margin={10} items={items} plots={plots} type={temp.current} />
    optionsList.current = LOList.current.map(
      (obj, index) => {
        return (
          <Row style={{ margin: "1rem" }} key={obj} className='w-100'>
            <Radio toggle id={obj} key={obj} checked={plots[obj]} onClick={handlePlotsChange} />
            <span style={{ marginLeft: "1rem", marginRight: "1rem", color: plotUtils.ifSpectrum[index], fontSize: "40px" }}>—</span>
            <span>LO Frequency {obj} [GHz]</span>
          </Row>
        )
      }
    )
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
