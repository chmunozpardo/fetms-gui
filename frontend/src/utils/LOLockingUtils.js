import * as d3 from 'd3';
import d3Tip from "d3-tip";


export const LOLockingBoolean = [
  {
    key: 'LORTM',
    text: 'LORTM Lock',
    value: 'LORTM',
    cx: (xScale) => (d) => { return xScale(d.FreqLO); },
    cy: (margin) => (d) => { return 3 * margin; },
    color: 'blue',
    tip: d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        return "<strong>Frequency:</strong> <span style='color:white'>" + (d.FreqLO) + "</span><br>" +
          "<strong> Value:</strong> <span style='color:white'>" + (d.LORTMLocked) + "</span><br>";
      })
  },
  {
    key: 'LO',
    text: 'LO Lock',
    value: 'LO',
    cx: (xScale) => (d) => { return xScale(d.FreqLO); },
    cy: (margin) => (d) => { return 4 * margin; },
    color: 'blue',
    tip: d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        return "<strong>Frequency:</strong> <span style='color:white'>" + (d.FreqLO) + "</span><br>" +
          "<strong> Value:</strong> <span style='color:white'>" + (d.LOLocked) + "</span><br>";
      })
  }
]

//
// 4K Temperature plot utils
//

export const temperature = [
  {
    key: 'PLLTemp',
    text: 'PLL Temperature',
    value: 'PLLTemp',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.FreqLO); })
      .y(function (d) { return yScale(d.PLLTemp); })
      .curve(d3.curveLinear),
    cx: (xScale) => (d) => { return xScale(d.FreqLO); },
    cy: (yScale) => (d) => { return yScale(d.PLLTemp); },
    color: 'blue',
    tip: d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        return "<strong>Frequency:</strong> <span style='color:white'>" + (d.FreqLO) + "</span><br>" +
          "<strong> Value:</strong> <span style='color:white'>" + (d.PLLTemp) + "[°C]</span><br>";
      })
  }
];

//
// Voltages
//

export const voltage = [
  {
    key: 'LockVoltage',
    text: 'Lock Voltage',
    value: 'lockVoltage',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.FreqLO); })
      .y(function (d) { return yScale(d.LockVoltage); })
      .curve(d3.curveLinear),
    cx: (xScale) => (d) => { return xScale(d.FreqLO); },
    cy: (yScale) => (d) => { return yScale(d.LockVoltage); },
    color: 'red',
    tip: d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        return "<strong>Frequency:</strong> <span style='color:white'>" + (d.FreqLO) + "</span><br>" +
          "<strong> Value:</strong> <span style='color:white'>" + (d.LockVoltage) + "[V]</span><br>";
      })
  },
  {
    key: 'CorrectionVoltage',
    text: 'Correction Voltage',
    value: 'corrVoltage',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.FreqLO); })
      .y(function (d) { return yScale(d.CorrVoltage); })
      .curve(d3.curveLinear),
    cx: (xScale) => (d) => { return xScale(d.FreqLO); },
    cy: (yScale) => (d) => { return yScale(d.CorrVoltage); },
    color: 'green',
    tip: d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        return "<strong>Frequency:</strong> <span style='color:white'>" + (d.FreqLO) + "</span><br>" +
          "<strong> Value:</strong> <span style='color:white'>" + (d.CorrVoltage) + "[V]</span><br>";
      })
  }
];

//
// Power
//

export const power = [
  {
    key: 'IFTotalPower',
    text: 'IF Total Power',
    value: 'IFTotalPower',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.FreqLO); })
      .y(function (d) { return yScale(d.IFTotalPower); })
      .curve(d3.curveLinear),
    cx: (xScale) => (d) => { return xScale(d.FreqLO); },
    cy: (yScale) => (d) => { return yScale(d.IFTotalPower); },
    color: 'black',
    tip: d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        return "<strong>Frequency:</strong> <span style='color:white'>" + (d.FreqLO) + "</span><br>" +
          "<strong> Value:</strong> <span style='color:white'>" + (d.IFTotalPower) + "[dBm]</span><br>";
      })
  },
  {
    key: 'RefTotalPower',
    text: 'Ref Total Power',
    value: 'refTotalPower',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.FreqLO); })
      .y(function (d) { return yScale(d.RefTotalPower); })
      .curve(d3.curveLinear),
    cx: (xScale) => (d) => { return xScale(d.FreqLO); },
    cy: (yScale) => (d) => { return yScale(d.RefTotalPower); },
    color: 'darkgray',
    tip: d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        return "<strong>Frequency:</strong> <span style='color:white'>" + (d.FreqLO) + "</span><br>" +
          "<strong> Value:</strong> <span style='color:white'>" + (d.RefTotalPower) + "[dBm]</span><br>";
      })
  }
];

//
// Current
//

export const current = [
  {
    key: 'PhotomixerCurrent',
    text: 'Photomixer Current',
    value: 'photomixerCurrent',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.FreqLO); })
      .y(function (d) { return yScale(d.PhotomixerCurrent); })
      .curve(d3.curveLinear),
    cx: (xScale) => (d) => { return xScale(d.FreqLO); },
    cy: (yScale) => (d) => { return yScale(d.PhotomixerCurrent); },
    color: 'orange',
    tip: d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        return "<strong>Frequency:</strong> <span style='color:white'>" + (d.FreqLO) + "</span><br>" +
          "<strong> Value:</strong> <span style='color:white'>" + (d.PhotomixerCurrent) + "[A]</span><br>";
      })
  }
];

export const initOptions = {
  PLLTemp: true,
  LockVoltage: true,
  CorrectionVoltage: true
}

//
// LO Locking - Dropdown options
//

export const LOLockingOptions = [
  {
    key: 'Temperature',
    text: 'Temperature',
    value: 'temperature',
    ymin: 20.0,
    ymax: 32.0,
    ylabel: "Temperature [°C]"
  },
  {
    key: 'Voltage',
    text: 'Voltage',
    value: 'voltage',
    ymin: -1.0,
    ymax: 6.0,
    ylabel: "Voltage [V]"
  },
  {
    key: 'Power',
    text: 'Power',
    value: 'power',
    ymin: -6.0,
    ymax: 0.0,
    ylabel: "Power [dBm]"
  },
  {
    key: 'Current',
    text: 'Current',
    value: 'current',
    ymin: 0.90,
    ymax: 1.10,
    ylabel: "Current [A]"
  }
]