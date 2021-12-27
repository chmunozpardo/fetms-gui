import React, { useRef, useEffect } from 'react';
import { plotAxes } from './Axes';
import * as THREE from 'three';
import * as d3 from 'd3';
import { _3d } from 'd3-3d';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function BeamPatternPlot(props) {
  let svgRef = useRef(null);
  let threedOption = false;

  useEffect(
    () => {
      if (props.items && svgRef.current) {
        if(props.type) {
          let offset = (props.items.minAmp + props.items.maxAmp) * 0.5;
          let color_scale = d3
            .scaleLinear()
            .domain([props.items.maxAmp - offset, props.items.minAmp - offset]);
          let camera, scene, renderer;
          let geometry, material, mesh;
          let material2;
          let points;
          let controls;

          init();
          animate();

          function init() {
            const sprite = new THREE.TextureLoader().load(
              "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/sprites/circle.png"
            );

            camera = new THREE.PerspectiveCamera(
              15,
              props.width / props.height,
              0.01,
              1000
            );
            camera.position.z = 0;
            camera.position.x = 0;
            camera.position.y =
              props.items.maxAmp +
              Math.abs((props.items.maxAmp + props.items.minAmp) * 0.5) - offset;

            scene = new THREE.Scene();
            scene.background = new THREE.Color("#ffffff");
            camera.lookAt(0, (props.items.maxAmp + props.items.minAmp) * 0.5 - offset, 0);

            var vertices = [];
            var colors = [];
            var temp_color = new THREE.Color();
            for (let i = 0; i < props.items.dataAmp.length; i++) {
              const x = props.items.dataAmp[i]["x"];
              const y = props.items.dataAmp[i]["y"];
              const z = props.items.dataAmp[i]["value"] - offset;
              vertices.push(x, z, -y);
              const color_spec = d3.rgb(d3.interpolateSpectral(color_scale(z)));
              temp_color.setRGB(
                color_spec.r / 255,
                color_spec.g / 255,
                color_spec.b / 255
              );
              colors.push(temp_color.r, temp_color.g, temp_color.b);
            }

            var geometry2 = new THREE.BufferGeometry();
            geometry2.setAttribute(
              "position",
              new THREE.Float32BufferAttribute(vertices, 3)
            );
            geometry2.setAttribute(
              "color",
              new THREE.Float32BufferAttribute(colors, 3)
            );

            material2 = new THREE.PointsMaterial({
              size: 5,
              map: sprite,
              side: THREE.DoubleSide,
              vertexColors: THREE.VertexColors,
              alphaTest: 0.5,
              sizeAttenuation: true,
              transparent: true,
            });
            points = new THREE.Points(geometry2, material2);
            scene.add(points);

            var axes = new THREE.GridHelper(30,30);
            scene.add(axes);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(props.width, props.height);
            controls = new OrbitControls(camera, renderer.domElement);
            controls.update();
            svgRef.current.appendChild(renderer.domElement);
            renderer.render(scene, camera);
          }

          function animate() {
            controls.update();
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
          }
        }

        else {
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
      }
    }, [props]);

  if(props.type){
    return (<div
      width={props.width}
      height={props.height}
      ref={svgRef}
    />
    );
  } else {
    return (<svg
      width={props.width}
      height={props.height}
      ref={svgRef}
    />
    );
  }
}