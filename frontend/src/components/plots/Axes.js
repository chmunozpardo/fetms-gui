import * as d3 from 'd3';

export function plotAxes(props, svg, xMin, xMax, yMin, yMax, xAxes, yAxes) {
  let plotMargin = 8 * props.margin;
  var xScale = d3.scaleLinear()
    .domain([xMin, xMax])
    .range([plotMargin, props.width - 2 * props.margin]);
  var yScale = d3.scaleLinear()
    .domain([yMin, yMax])
    .range([props.height - plotMargin, 2 * props.margin]);
  svg.append('g')
    .attr("id", "minor_grid")
    .attr("class", "minor_grid")
    .attr("transform", "translate(0," + (props.height - plotMargin) + ")")
    .call(d3.axisBottom(xScale)
      .ticks(50)
      .tickSize(plotMargin - props.height + 2 * props.margin)
      .tickFormat("")
    )
    .attr('stroke', 'lightgray')
    .attr('stroke-width', 0.5)
    .attr('stroke-dasharray', 3)

  svg.append('g')
    .attr("class", "grid")
    .attr("id", "grid")
    .attr("transform", "translate(0," + (props.height - plotMargin) + ")")
    .call(d3.axisBottom(xScale)
      .ticks(10)
      .tickSize(plotMargin - props.height + 2 * props.margin)
      .tickFormat("")
    )
    .attr('stroke-width', 1.5)
    .attr('stroke', 'darkgray')
    .attr('stroke-dasharray', 12)

  svg.append('g')
    .attr("class", "minor_grid")
    .attr("id", "minor_grid")
    .attr("transform", "translate(" + plotMargin + ", " + (0) + ")")
    .call(d3.axisLeft(yScale)
      .ticks(50)
      .tickSize(-props.width + 2 * props.margin + plotMargin)
      .tickFormat("")
    )
    .attr('stroke', 'lightgray')
    .attr('stroke-width', 0.5)
    .attr('stroke-dasharray', 3)

  svg.append('g')
    .attr("class", "grid")
    .attr("id", "grid")
    .attr("transform", "translate(" + plotMargin + ", " + (0) + ")")
    .call(d3.axisLeft(yScale)
      .ticks(10)
      .tickSize(-props.width + 2 * props.margin + plotMargin)
      .tickFormat("")
    )
    .attr('stroke-width', 1.5)
    .attr('stroke', 'darkgray')
    .attr('stroke-dasharray', 12)

  svg.append("g")
    .attr("id", "axes")
    .attr("transform", "translate(0," + (props.height - plotMargin) + ")")
    .call(d3.axisBottom(xScale))
    .style("font-size", "20px")
    .style("stroke-width", 3);
  svg.append("text")
    .attr("id", "axes")
    .attr("transform",
      "translate(" + (props.width / 2) + " ," +
      (props.height - 2 * props.margin) + ")")
    .style("text-anchor", "middle")
    .style("font-size", "20px")
    .text(xAxes);

  svg.append("g")
    .attr("id", "axes")
    .attr("transform", "translate(" + (plotMargin) + ", " + 0 + ")")
    .call(d3.axisLeft(yScale))
    .style("font-size", "20px")
    .style("stroke-width", 3);
  svg.append("text")
    .attr("id", "axes")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("x", 0 - (props.height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .style("font-size", "20px")
    .text(yAxes);

  d3.selectAll(".minor_grid line")
    .style("stroke", "lightgray");
  d3.selectAll(".grid line")
    .style("stroke", "darkgray");
  return [xScale, yScale];
}

export function plotDoubleAxes(props, svg, xMin, xMax, yMin, yMax, zMin, zMax, xAxes, yAxes, zAxes) {
  let plotMargin = 8 * props.margin;
  var xScale = d3.scaleLinear()
    .domain([xMin, xMax])
    .range([plotMargin, props.width - plotMargin]);
  var yScale = d3.scaleLinear()
    .domain([yMin, yMax])
    .range([props.height - plotMargin, 2 * props.margin]);
  var zScale = d3.scaleLinear()
    .domain([zMin, zMax])
    .range([props.height - plotMargin, 2 * props.margin]);

  svg.append('g')
    .attr("id", "minor_grid")
    .attr("class", "minor_grid")
    .attr("transform", "translate(0," + (props.height - plotMargin) + ")")
    .call(d3.axisBottom(xScale)
      .ticks(50)
      .tickSize(plotMargin - props.height + 2 * props.margin)
      .tickFormat("")
    )
    .attr('stroke', 'lightgray')
    .attr('stroke-width', 0.5)
    .attr('stroke-dasharray', 3)

  svg.append('g')
    .attr("class", "grid")
    .attr("id", "grid")
    .attr("transform", "translate(0," + (props.height - plotMargin) + ")")
    .call(d3.axisBottom(xScale)
      .ticks(10)
      .tickSize(plotMargin - props.height + 2 * props.margin)
      .tickFormat("")
    )
    .attr('stroke-width', 1.5)
    .attr('stroke', 'darkgray')
    .attr('stroke-dasharray', 12)

  svg.append('g')
    .attr("class", "minor_grid")
    .attr("id", "minor_grid")
    .attr("transform", "translate(" + plotMargin + ", " + (0) + ")")
    .call(d3.axisLeft(yScale)
      .ticks(50)
      .tickSize(-props.width + 2 * plotMargin)
      .tickFormat("")
    )
    .attr('stroke', 'lightgray')
    .attr('stroke-width', 0.5)
    .attr('stroke-dasharray', 3)

  svg.append('g')
    .attr("class", "grid")
    .attr("id", "grid")
    .attr("transform", "translate(" + plotMargin + ", " + (0) + ")")
    .call(d3.axisLeft(yScale)
      .ticks(10)
      .tickSize(-props.width + 2 * plotMargin)
      .tickFormat("")
    )
    .attr('stroke-width', 1.5)
    .attr('stroke', 'darkgray')
    .attr('stroke-dasharray', 12)

  svg.append("g")
    .attr("id", "axes")
    .attr("transform", "translate(0," + (props.height - plotMargin) + ")")
    .call(d3.axisBottom(xScale))
    .style("font-size", "20px")
    .style("stroke-width", 3);
  svg.append("text")
    .attr("id", "axes")
    .attr("transform",
      "translate(" + (props.width / 2) + " ," +
      (props.height - 2 * props.margin) + ")")
    .style("text-anchor", "middle")
    .style("font-size", "20px")
    .text(xAxes);

  svg.append("g")
    .attr("id", "axes")
    .attr("transform", "translate(" + (plotMargin) + ", " + 0 + ")")
    .call(d3.axisLeft(yScale))
    .style("font-size", "20px")
    .style("stroke-width", 3);
  svg.append("text")
    .attr("id", "axes")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("x", 0 - (props.height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .style("font-size", "20px")
    .text(yAxes);

  svg.append("g")
    .attr("id", "axes")
    .attr("transform", "translate(" + (props.width - plotMargin) + ", " + 0 + ")")
    .call(d3.axisRight(zScale))
    .style("font-size", "20px")
    .style("stroke-width", 3);
  svg.append("text")
    .attr("id", "axes")
    .attr("transform", "rotate(-90)")
    .attr("y", (props.width - 3 * props.margin))
    .attr("x", 0 - (props.height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .style("font-size", "20px")
    .text(zAxes);

  d3.selectAll(".minor_grid line")
    .style("stroke", "lightgray");
  d3.selectAll(".grid line")
    .style("stroke", "darkgray");
  return [xScale, yScale, zScale];
}

export function plotDoubleAxesWithBars(props, svg, xMin, xMax, yMin, yMax, zMin, zMax, xAxes, yAxes, zAxes) {
  let plotMargin = 8 * props.margin;
  var xScale = d3.scaleLinear()
    .domain([xMin, xMax])
    .range([plotMargin, props.width - plotMargin]);
  var yScale = d3.scaleLinear()
    .domain([yMin, yMax])
    .range([props.height - plotMargin, plotMargin]);
  var zScale = d3.scaleLinear()
    .domain([zMin, zMax])
    .range([props.height - plotMargin, plotMargin]);
  var barsScale = d3.scaleLinear()
    .domain([xMin, xMax])
    .range([plotMargin, props.width - plotMargin]);

  svg.append('g')
    .attr("id", "minor_grid")
    .attr("class", "minor_grid")
    .attr("transform", "translate(0," + (props.height - plotMargin) + ")")
    .call(d3.axisBottom(xScale)
      .ticks(50)
      .tickSize(plotMargin - props.height + plotMargin)
      .tickFormat("")
    )
    .attr('stroke', 'lightgray')
    .attr('stroke-width', 0.5)
    .attr('stroke-dasharray', 3)

  svg.append('g')
    .attr("class", "grid")
    .attr("id", "grid")
    .attr("transform", "translate(0," + (props.height - plotMargin) + ")")
    .call(d3.axisBottom(xScale)
      .ticks(10)
      .tickSize(plotMargin - props.height + plotMargin)
      .tickFormat("")
    )
    .attr('stroke-width', 1.5)
    .attr('stroke', 'darkgray')
    .attr('stroke-dasharray', 12)

  svg.append('g')
    .attr("class", "minor_grid")
    .attr("id", "minor_grid")
    .attr("transform", "translate(" + plotMargin + ", " + (0) + ")")
    .call(d3.axisLeft(yScale)
      .ticks(50)
      .tickSize(-props.width + 2 * plotMargin)
      .tickFormat("")
    )
    .attr('stroke', 'lightgray')
    .attr('stroke-width', 0.5)
    .attr('stroke-dasharray', 3)

  svg.append('g')
    .attr("class", "grid")
    .attr("id", "grid")
    .attr("transform", "translate(" + plotMargin + ", " + (0) + ")")
    .call(d3.axisLeft(yScale)
      .ticks(10)
      .tickSize(-props.width + 2 * plotMargin)
      .tickFormat("")
    )
    .attr('stroke-width', 1.5)
    .attr('stroke', 'darkgray')
    .attr('stroke-dasharray', 12)

  svg.append("g")
    .attr("id", "axes")
    .attr("transform", "translate(0," + (props.height - plotMargin) + ")")
    .call(d3.axisBottom(xScale))
    .style("font-size", "20px")
    .style("stroke-width", 3);
  svg.append("text")
    .attr("id", "axes")
    .attr("transform",
      "translate(" + (props.width / 2) + " ," +
      (props.height - 2 * props.margin) + ")")
    .style("text-anchor", "middle")
    .style("font-size", "20px")
    .text(xAxes);

  svg.append("g")
    .attr("id", "axes")
    .attr("transform", "translate(" + (plotMargin) + ", " + 0 + ")")
    .call(d3.axisLeft(yScale))
    .style("font-size", "20px")
    .style("stroke-width", 3);
  svg.append("text")
    .attr("id", "axes")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("x", 0 - (props.height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .style("font-size", "20px")
    .text(yAxes);

  svg.append("g")
    .attr("id", "axes")
    .attr("transform", "translate(0," + (4 * props.margin) + ")")
    .call(d3.axisBottom(barsScale))
    .style("font-size", "20px")
    .style("stroke-width", 3);
  svg.append("text")
    .attr("id", "axes")
    .attr("transform",
      "translate(" + (3 * props.margin) + " ," + (5 * props.margin) + ")")
    .style("text-anchor", "middle")
    .style("font-size", "16px")
    .text("LO");

  svg.append("g")
    .attr("id", "axes")
    .attr("transform", "translate(0," + (3 * props.margin) + ")")
    .call(d3.axisTop(barsScale))
    .style("font-size", "20px")
    .style("stroke-width", 3);
  svg.append("text")
    .attr("id", "axes")
    .attr("transform",
      "translate(" + (3 * props.margin) + " ," + (3 * props.margin) + ")")
    .style("text-anchor", "middle")
    .style("font-size", "16px")
    .text("LORTM");

  svg.append("g")
    .attr("id", "axes")
    .attr("transform", "translate(" + (props.width - plotMargin) + ", " + 0 + ")")
    .call(d3.axisRight(zScale))
    .style("font-size", "20px")
    .style("stroke-width", 3);
  svg.append("text")
    .attr("id", "axes")
    .attr("transform", "rotate(-90)")
    .attr("y", (props.width - 3 * props.margin))
    .attr("x", 0 - (props.height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .style("font-size", "20px")
    .text(zAxes);

  d3.selectAll(".minor_grid line")
    .style("stroke", "lightgray");
  d3.selectAll(".grid line")
    .style("stroke", "darkgray");
  return [xScale, yScale, zScale];
}
