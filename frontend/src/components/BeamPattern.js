import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import BeamPatternPlot from "./plots/BeamPatternPlot";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";
import NraoLoader from "../loaders/NraoLoader";
import { Form, Radio } from "semantic-ui-react";

export default function BeamPattern(props) {
  let plotRef = useRef(null);
  let error = useRef(null);
  let plotComponent = useRef(null);

  let [type, setType] = useState(true);
  let [isLoaded, setLoaded] = useState(false);
  let [items, setItems] = useState(null);
  let [width, setWidth] = useState(null);
  let [height, setHeight] = useState(null);

  const fetchData = async () => {
    let query = new URLSearchParams(props.location.search);
    let keyHeader = query.get("keyHeader");
    await axios
      .get(
        process.env.REACT_APP_DB_HOSTNAME +
          "/beam_pattern/results?keyheader=" +
          keyHeader
      )
      .then(
        (result) => {
          setItems(result.data);
          setLoaded(true);
        },
        (er) => {
          error.current = er;
          setLoaded(true);
        }
      );
  };

  const updateDimensions = () => {
    if (plotRef.current) {
      setWidth(plotRef.current.offsetWidth);
      setHeight(plotRef.current.offsetHeight);
    }
  };

  const handleTypeChange = (undefined, { value }) => {
    console.log(value);
    setType(value === "3d");
  };

  useEffect(() => {
    if (plotRef.current) {
      setWidth(plotRef.current.offsetWidth);
      setHeight(plotRef.current.offsetHeight);
      fetchData();
      window.addEventListener("resize", updateDimensions);
    }
  }, []);

  if (isLoaded && items != null) {
    plotComponent.current = (
      <BeamPatternPlot
        key={width}
        width={width}
        height={height}
        margin={10}
        items={items}
        type={type}
      />
    );
  } else {
    plotComponent.current = (
      <div className="loader-box w-100">
        <NraoLoader speed={3} />
      </div>
    );
  }
  return (
    <Container fluid className="mw-100 h-100">
      <Row className="h-100">
        <Col
          className="border-box p-0 h-100"
          xs={{ span: 9, offset: 1 }}
          ref={plotRef}
        >
          {plotComponent.current}
        </Col>
        <Col
          className="border-box p-0 h-100"
          xs={{ span: 2, offset: 0 }}
        >
          <Row key="optionsList" style={{ margin: "1rem" }}>
            <Form>
              <Form.Field> Selected value: </Form.Field>
              <Form.Field>
                <Radio
                  label="3D"
                  name="radioGroup"
                  value="3d"
                  checked={type}
                  onChange={handleTypeChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Image"
                  name="radioGroup"
                  value="image"
                  checked={!type}
                  onChange={handleTypeChange}
                />
              </Form.Field>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
