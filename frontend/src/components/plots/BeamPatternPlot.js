import React, { useRef, useEffect } from 'react';
import { plotAxes } from './Axes';
import * as d3 from 'd3';
import { _3d } from 'd3-3d';

export default function BeamPatternPlot(props) {
  let svgRef = useRef(null);

  useEffect(
    () => {
      if (props.items && svgRef.current) {
        let svg = d3.select(svgRef.current);

        let [xScale, yScale] = plotAxes(props, svg, props.items.minX, props.items.maxX, props.items.minY, props.items.maxY, "X", "Y");

        let surface = _3d()
          .scale(10)
          .x(function (d) { return xScale(d.x); })
          .y(function (d) { return yScale(d.y); })
          .z(function (d) { return d.value; })
          .shape('SURFACE', props.items.xSize)
          .scale(1.0);

        let color = d3.scaleLinear()
          .domain([props.items.minAmp, props.items.maxAmp]);
        let data = surface(props.items.dataAmp)
        let planes = svg.append('g').selectAll('path')
          .data(data, function (d) { return d.plane; });
        planes.enter()
          .append('path')
          .attr('class', '_3d')
          .attr('opacity', 0)
          .attr('stroke-opacity', 0.1)
          .merge(planes)
          .attr('stroke', 'black')
          .attr('opacity', 1)
          .attr('d', surface.draw)
          .style('fill', function (d) {
            return d3.interpolateSpectral(1 - color((d[0].value + d[1].value + d[2].value + d[3].value) / 4))
          });

        planes.exit().remove();
        d3.selectAll('._3d').sort(surface.sort);
      }
    }, [props]);

  return (
    <svg
      width={props.width}
      height={props.height}
      ref={svgRef}
    />
  );
}