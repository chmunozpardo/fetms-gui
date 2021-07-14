import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3';
import { plotAxes } from './Axes';
import * as plotUtils from '../../utils/noiseTemperatureUtils';

export default function NoiseTemperaturePlot(props) {
  let svgRef = useRef(null);

  useEffect(
    () => {
      if (props.items && svgRef.current) {
        let svg = d3.select(svgRef.current);

        svg.selectAll('#minor_grid').remove();
        svg.selectAll('#grid').remove();
        svg.selectAll('#axes').remove();
        plotUtils.noiseTemperature.forEach(obj => {
          svg.selectAll('#path' + obj.key).remove();
          svg.selectAll('#dots' + obj.key).remove();
          if (props.plots[obj.key]) {
            svg.call(obj.tip);
          }
        });

        let yLabel = props.type ? "Temperature" : "Y Factor";
        let xLabel = "Frequency";
        let [xScale, yScale] = plotAxes(props, svg, props.items.minFreq, props.items.maxFreq, props.items.minY, props.items.maxY, xLabel, yLabel);

        for (let i = 0; i < props.items.data.length; i++) {
          plotUtils.noiseTemperature.forEach(obj => {
            if (props.plots[obj.key]) {
              svg.append("path")
                .attr("class", "line")
                .attr('id', 'path' + obj.key)
                .attr("d", obj.line(xScale, yScale)(props.items.data[i]))
                .attr('stroke', obj.color);
              svg.append('g')
                .selectAll("dot")
                .data(props.items.data[i])
                .enter()
                .append("circle")
                .attr('id', 'dots' + obj.key)
                .attr('cx', obj.cx(xScale))
                .attr('cy', obj.cy(yScale))
                .attr('r', 2)
                .attr('stroke', obj.color)
                .attr('stroke-width', 2)
                .attr('fill', obj.color)
                .on('mouseover', obj.tip.show)
                .on('mouseout', obj.tip.hide);
            }
          });
        }
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