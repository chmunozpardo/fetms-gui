import * as d3 from 'd3';
import d3Tip from "d3-tip";

/*
Noise Temperature plot functions
*/

export const ifSpectrum = [
  "maroon",
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "purple",
  "fuchsia",
  "lime",
  "teal",
  "aqua",
  "blue",
  "navy",
  "black",
  "gray",
  "silver",
  "white",
  "salmon",
  "lawngreen",
  "navajowhite",
  "hotpink",
  "orangered",
  "lemonchiffon",
  "springgreen",
  "goldenrod",
  "paleturquoise",
  "lavender",
  "slategrey",
  "steelblue",
  "darkred",
  "olive",
]

export const lineFunction = (xScale, yScale) => d3.line()
  .x(function (d) { return xScale(d.Freq); })
  .y(function (d) { return yScale(d.Power); })
  .curve(d3.curveLinear);