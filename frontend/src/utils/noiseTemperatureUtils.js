import * as d3 from 'd3';
import d3Tip from "d3-tip";

/*
Noise Temperature plot functions
*/

export const noiseTemperature = [
  {
    key: 'Pol0S1',
    text: 'Polarization 0 Sideband 1',
    value: 'Pol0S1',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.FreqLO + d.CenterIF); })
      .y(function (d) { return yScale(d.Pol0S1); })
      .curve(d3.curveLinear),
    cx: (xScale) => (d) => { return xScale(d.FreqLO + d.CenterIF); },
    cy: (yScale) => (d) => { return yScale(d.Pol0S1); },
    color: 'blue',
    tip: d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        return "<strong>Frequency:</strong> <span style='color:white'>" + (d.FreqLO + d.CenterIF) + "</span><br>" +
          "<strong> Value:</strong> <span style='color:white'>" + (d.Pol0S1) + "</span><br>";
      })
  },
  {
    key: 'Pol0S2',
    text: 'Polarization 0 Sideband 2',
    value: 'Pol0S2',
    xlabel: (d) => { return d.FreqLO - d.CenterIF },
    ylabel: (d) => { return d.Pol0S2 },
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.FreqLO - d.CenterIF); })
      .y(function (d) { return yScale(d.Pol0S2); })
      .curve(d3.curveLinear),
    cx: (xScale) => (d) => { return xScale(d.FreqLO - d.CenterIF); },
    cy: (yScale) => (d) => { return yScale(d.Pol0S2); },
    color: 'red',
    tip: d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        return "<strong>Frequency:</strong> <span style='color:white'>" + (d.FreqLO - d.CenterIF) + "</span><br>" +
          "<strong> Value:</strong> <span style='color:white'>" + (d.Pol0S2) + "</span><br>";
      })
  },
  {
    key: 'Pol1S1',
    text: 'Polarization 1 Sideband 1',
    value: 'Pol1S1',
    xlabel: (d) => { return d.FreqLO + d.CenterIF },
    ylabel: (d) => { return d.Pol1S1 },
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.FreqLO + d.CenterIF); })
      .y(function (d) { return yScale(d.Pol1S1); })
      .curve(d3.curveLinear),
    cx: (xScale) => (d) => { return xScale(d.FreqLO + d.CenterIF); },
    cy: (yScale) => (d) => { return yScale(d.Pol1S1); },
    color: 'green',
    tip: d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        return "<strong>Frequency:</strong> <span style='color:white'>" + (d.FreqLO + d.CenterIF) + "</span><br>" +
          "<strong> Value:</strong> <span style='color:white'>" + (d.Pol1S1) + "</span><br>";
      })
  },
  {
    key: 'Pol1S2',
    text: 'Polarization 1 Sideband 2',
    value: 'Pol1S2',
    xlabel: (d) => { return d.FreqLO - d.CenterIF },
    ylabel: (d) => { return d.Pol1S2 },
    line: (xScale, yScale) => d3.line()
      .x((d) => { return xScale(d.FreqLO - d.CenterIF); })
      .y((d) => { return yScale(d.Pol1S2); })
      .curve(d3.curveLinear),
    cx: (xScale) => (d) => { return xScale(d.FreqLO - d.CenterIF); },
    cy: (yScale) => (d) => { return yScale(d.Pol1S2); },
    color: 'black',
    tip: d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        return "<strong>Frequency:</strong> <span style='color:white'>" + (d.FreqLO - d.CenterIF) + "</span><br>" +
          "<strong> Value:</strong> <span style='color:white'>" + (d.Pol1S2) + "</span><br>";
      })
  }
]

export const noiseTemperatureOptions = {
  Pol0S1: true,
  Pol0S2: true,
  Pol1S1: true,
  Pol1S2: true
}