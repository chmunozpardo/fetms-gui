import * as d3 from 'd3';

//
// 110K Temperature plot utils
//

export const temperature110K = [
  {
    key: 'CartTemp1',
    text: 'Cartridge 1 Temperature',
    value: 'cartTemp1',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CartTemp1); })
      .curve(d3.curveBasis),
    color: 'blue'
  },
  {
    key: 'CryoTemp9',
    text: 'Cryostat 9 Temperature',
    value: 'cryoTemp9',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CryoTemp9); })
      .curve(d3.curveBasis),
    color: 'red'
  },
  {
    key: 'CryoTemp10',
    text: 'Cryostat 10 Temperature',
    value: 'cryoTemp10',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CryoTemp10); })
      .curve(d3.curveBasis),
    color: 'green'
  },
  {
    key: 'CryoTemp11',
    text: 'Cryostat 11 Temperature',
    value: 'cryoTemp11',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CryoTemp11); })
      .curve(d3.curveBasis),
    color: 'black'
  },
  {
    key: 'CryoTemp12',
    text: 'Cryostat 12 Temperature',
    value: 'cryoTemp12',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CryoTemp12); })
      .curve(d3.curveBasis),
    color: 'darkgray'
  }
]

//
// 15K Temperature plot utils
//

export const temperature15K = [
  {
    key: 'CartTemp4',
    text: 'Cartridge 4 Temperature',
    value: 'cartTemp4',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CartTemp4); })
      .curve(d3.curveBasis),
    color: 'blue'
  },
  {
    key: 'CryoTemp5',
    text: 'Cartridge 5 Temperature',
    value: 'cartTemp5',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CryoTemp5); })
      .curve(d3.curveBasis),
    color: 'red'
  },
  {
    key: 'CryoTemp6',
    text: 'Cartridge 6 Temperature',
    value: 'cartTemp6',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CryoTemp6); })
      .curve(d3.curveBasis),
    color: 'green'
  },
  {
    key: 'CryoTemp7',
    text: 'Cartridge 7 Temperature',
    value: 'cartTemp7',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CryoTemp7); })
      .curve(d3.curveBasis),
    color: 'black'
  },
  {
    key: 'CryoTemp8',
    text: 'Cartridge 8 Temperature',
    value: 'cartTemp8',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CryoTemp8); })
      .curve(d3.curveBasis),
    color: 'darkgray'
  }
]

//
// 4K Temperature plot utils
//

export const temperature4K = [
  {
    key: 'CartTemp0',
    text: 'Cartridge 0 Temperature',
    value: 'cartTemp0',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CartTemp0); })
      .curve(d3.curveBasis),
    color: 'blue'
  },
  {
    key: 'CartTemp2',
    text: 'Cartridge 2 Temperature',
    value: 'cartTemp2',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CartTemp2); })
      .curve(d3.curveBasis),
    color: 'red'
  },
  {
    key: 'CartTemp5',
    text: 'Cartridge 5 Temperature',
    value: 'cartTemp5',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CartTemp5); })
      .curve(d3.curveBasis),
    color: 'green'
  },
  {
    key: 'CryoTemp0',
    text: 'Cryostat 0 Temperature',
    value: 'cryoTemp0',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CryoTemp0); })
      .curve(d3.curveBasis),
    color: 'black'
  },
  {
    key: 'CryoTemp1',
    text: 'Cryostat 1 Temperature',
    value: 'cryoTemp1',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CryoTemp1); })
      .curve(d3.curveBasis),
    color: 'darkgray'
  },
  {
    key: 'CryoTemp2',
    text: 'Cryostat 2 Temperature',
    value: 'cryoTemp2',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CryoTemp2); })
      .curve(d3.curveBasis),
    color: 'orange'
  },
  {
    key: 'CryoTemp3',
    text: 'Cryostat 3 Temperature',
    value: 'cryoTemp3',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CryoTemp3); })
      .curve(d3.curveBasis),
    color: 'yellow'
  },
  {
    key: 'CryoTemp4',
    text: 'Cryostat 4 Temperature',
    value: 'cryoTemp4',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.CryoTemp4); })
      .curve(d3.curveBasis),
    color: 'brown'
  },
]

//
// Total Power plot utils
//

export const totalPower = [
  {
    key: 'Pol0chA',
    text: 'Polarization 0 Channel A',
    value: 'pol0chA',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.Pol0chA); })
      .curve(d3.curveBasis),
    color: 'blue'
  },
  {
    key: 'Pol0chB',
    text: 'Polarization 0 Channel B',
    value: 'pol0chB',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.Pol0chB); })
      .curve(d3.curveBasis),
    color: 'red'
  },
  {
    key: 'Pol1chA',
    text: 'Polarization 1 Channel A',
    value: 'pol1chA',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.Pol1chA); })
      .curve(d3.curveBasis),
    color: 'green'
  },
  {
    key: 'Pol1chB',
    text: 'Polarization 1 Channel B',
    value: 'pol1chB',
    line: (xScale, yScale) => d3.line()
      .x(function (d) { return xScale(d.TS); })
      .y(function (d) { return yScale(d.Pol1chB); })
      .curve(d3.curveBasis),
    color: 'black'
  }
]

//
// Tilt plot utils
//

export function lineFunctionTilt(xScale, zScale) {
  return d3.line()
    .x(function (d) {
      return xScale(d.TS);
    })
    .y(function (d) {
      return zScale(d.tilt);
    })
    .curve(d3.curveBasis);
}

//
// Workmanship Amplitude - Dropdown options
//

export const workmanshipAmplitudeOptions = [
  {
    key: 'Total Power',
    text: 'Total Power',
    value: 'totalPower',
    ymin: -22.0,
    ymax: -20.0,
    ylabel: "Amplitude"
  },
  {
    key: '4K Temperature',
    text: '4K Temperature',
    value: 'temperature4K',
    ymin: 2.0,
    ymax: 5.0,
    ylabel: "Temperature"
  },
  {
    key: '15K Temperature',
    text: '15K Temperature',
    value: 'temperature15K',
    ymin: 10.0,
    ymax: 20.0,
    ylabel: "Temperature"
  },
  {
    key: '110K Temperature',
    text: '110K Temperature',
    value: 'temperature110K',
    ymin: 80.0,
    ymax: 120.0,
    ylabel: "Temperature"
  }
]

//

export const initOptions = {
  Pol0chA: true,
  Pol0chB: true,
  Pol1chA: true,
  Pol1chB: true
}