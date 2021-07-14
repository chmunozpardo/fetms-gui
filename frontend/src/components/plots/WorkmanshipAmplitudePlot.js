import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3';
import { plotDoubleAxes } from './Axes';
import * as plotUtils from '../../utils/workmanshipAmplitudeUtils.js';
import { workmanshipAmplitudeOptions } from '../../utils/workmanshipAmplitudeUtils';

export default function WorkmanshipAmplitudePlot(props) {
  let svgRef = useRef(null);
  let typeRef = useRef(null);

  useEffect(
    () => {
      if (props.items && svgRef.current) {
        let svg = d3.select(svgRef.current);

        if (typeRef.current == null) {
          typeRef.current = props.type;
        }

        svg.selectAll('#minor_grid').remove();
        svg.selectAll('#grid').remove();
        svg.selectAll('#axes').remove();
        plotUtils[typeRef.current].forEach(obj => {
          svg.selectAll('#path' + obj.key).remove();
        });

        typeRef.current = props.type;

        let typeOption = workmanshipAmplitudeOptions.find(option => option.value === props.type);
        let [xScale, yScale, zScale] = plotDoubleAxes(props, svg, props.items.minTS, props.items.maxTS, typeOption.ymin, typeOption.ymax, -2.5, 92.5, "Time", typeOption.ylabel, "Tilt");

        svg.append("path")
          .attr("class", "line")
          .attr('id', 'pathTilt')
          .attr("d", plotUtils.lineFunctionTilt(xScale, zScale)(props.items.data))
          .attr('stroke', 'lightblue');
        plotUtils[props.type].forEach(obj => {
          if (props.plots[obj.key]) {
            svg.append("path")
              .attr("class", "line")
              .attr('id', 'path' + obj.key)
              .attr("d", obj.line(xScale, yScale)(props.items.data))
              .attr('stroke', obj.color);
          }
        });
      }
    }, [props])

  return (
    <svg
      width={props.width}
      height={props.height}
      ref={svgRef}
    />
  );
}