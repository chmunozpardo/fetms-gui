import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3';
import { plotAxes } from './Axes';
import * as plotUtils from '../../utils/ifSpectrumUtils';

export default function IFSpectrumPlot(props) {
  let svgRef = useRef(null);

  useEffect(
    () => {
      if (props.items && svgRef.current) {
        let svg = d3.select(svgRef.current);

        svg.selectAll('#minor_grid').remove();
        svg.selectAll('#grid').remove();
        svg.selectAll('#axes').remove();
        props.items.LOList.forEach(obj => {
          svg.selectAll('#path' + obj).remove();
        });

        let yLabel = "Power [dBm]";
        let xLabel = "Frequency [GHz]";
        let [xScale, yScale] = plotAxes(props, svg, 0, 18, props.items.minPower, props.items.maxPower, xLabel, yLabel);
        props.items.LOList.forEach(
          (obj, index) => {
            if (props.plots[obj]) {
              svg.append("path")
                .attr("class", "line")
                .attr('id', 'path' + obj)
                .attr("d", plotUtils.lineFunction(xScale, yScale)(props.items.data[index]))
                .attr('stroke', plotUtils.ifSpectrum[index]);
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