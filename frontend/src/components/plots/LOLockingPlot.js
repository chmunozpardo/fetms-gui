import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3';
import { plotDoubleAxes, plotDoubleAxesWithBars } from './Axes';
import * as plotUtils from '../../utils/LOLockingUtils';
import { LOLockingOptions } from '../../utils/LOLockingUtils';

export default function LOLockingPlot(props) {
  let svgRef = useRef(null);
  let typeLeftRef = useRef(null);
  let typeRightRef = useRef(null);

  useEffect(
    () => {
      if (props.items && svgRef.current) {
        let svg = d3.select(svgRef.current);

        if (typeLeftRef.current == null) {
          typeLeftRef.current = props.typeLeft;
        }

        if (typeRightRef.current == null) {
          typeRightRef.current = props.typeRight;
        }

        svg.selectAll('#minor_grid').remove();
        svg.selectAll('#grid').remove();
        svg.selectAll('#axes').remove();
        plotUtils[typeLeftRef.current].forEach(obj => {
          svg.selectAll('#path' + obj.key).remove();
          svg.selectAll('#dots' + obj.key).remove();
        });
        plotUtils[typeRightRef.current].forEach(obj => {
          svg.selectAll('#path' + obj.key).remove();
          svg.selectAll('#dots' + obj.key).remove();
        });

        typeLeftRef.current = props.typeLeft;
        typeRightRef.current = props.typeRight;

        let xLabel = "Frequency [GHz]";
        let typeOptionLeft = LOLockingOptions.find(option => option.value === props.typeLeft);
        let typeOptionRight = LOLockingOptions.find(option => option.value === props.typeRight);
        let [xScale, yScale, zScale] = plotDoubleAxesWithBars(
          props, svg,
          props.items.LOStart, props.items.LOStop,
          props.items[typeOptionLeft.value].ymin, props.items[typeOptionLeft.value].ymax,
          props.items[typeOptionRight.value].ymin, props.items[typeOptionRight.value].ymax,
          xLabel, typeOptionLeft.ylabel, typeOptionRight.ylabel);

        plotUtils.LOLockingBoolean.forEach(obj => {
          svg.call(obj.tip);
          svg.append('g')
            .selectAll("dot")
            .data(props.items.data)
            .enter()
            .append("circle")
            .attr('id', 'dots' + obj.key)
            .attr('cx', obj.cx(xScale))
            .attr('cy', obj.cy(props.margin))
            .attr('r', 3)
            .attr('stroke', function (d) { return d[obj.value] ? "green" : "red"; })
            .attr('stroke-width', 3)
            .attr('fill', function (d) { return d[obj.value] ? "green" : "red"; })
            .on('mouseover', obj.tip.show)
            .on('mouseout', obj.tip.hide);
        });
        plotUtils[props.typeLeft].forEach(obj => {
          if (props.plots[obj.key]) {
            svg.call(obj.tip);
            svg.append("path")
              .attr("class", "line")
              .attr('id', 'path' + obj.key)
              .attr("d", obj.line(xScale, yScale)(props.items.data))
              .attr('stroke', obj.color);
            svg.append('g')
              .selectAll("dot")
              .data(props.items.data)
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
        plotUtils[props.typeRight].forEach(obj => {
          if (props.plots[obj.key]) {
            svg.call(obj.tip);
            svg.append("path")
              .attr("class", "line")
              .attr('id', 'path' + obj.key)
              .attr("d", obj.line(xScale, zScale)(props.items.data))
              .attr('stroke', obj.color);
            svg.append('g')
              .selectAll("dot")
              .data(props.items.data)
              .enter()
              .append("circle")
              .attr('id', 'dots' + obj.key)
              .attr('cx', obj.cx(xScale))
              .attr('cy', obj.cy(zScale))
              .attr('r', 2)
              .attr('stroke', obj.color)
              .attr('stroke-width', 2)
              .attr('fill', obj.color)
              .on('mouseover', obj.tip.show)
              .on('mouseout', obj.tip.hide);
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