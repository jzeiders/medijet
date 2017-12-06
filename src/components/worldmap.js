// src/components/WorldMap.js

import React, { Component } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldData from "../assets/map2.json";

class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worldData: []
    };
  }
  projection() {
    return geoMercator()
      .scale(200)
      .translate([800 / 2, 450 / 2]);
  }
  handleEnter(index) {
    let newWorldData = this.state.worldData.slice();
    newWorldData[index].color = "white";
    this.setState({ worldData: newWorldData });
  }
  handleExit(index) {
    let newWorldData = this.state.worldData.slice();
    newWorldData[index].color = "black";
    this.setState({ worldData: newWorldData });
  }
  componentDidMount() {
    this.setState({
      worldData: feature(worldData, worldData.objects.collection).features
    });
  }
  render() {
    return (
      <svg width={400} height={450} viewBox="-200 -100 800 450">
        <g className="countries">
          {this.state.worldData.map((d, i) => (
            <path
              key={`path-${i}`}
              d={geoPath().projection(this.projection())(d)}
              className="country"
              fill={d.color ? d.color : "black"}
              stroke="#FFFFFF"
              strokeWidth={0.5}
              onMouseEnter={() => this.handleEnter(i)}
              onMouseLeave={() => this.handleExit(i)}
            />
          ))}
        </g>
      </svg>
    );
  }
}

export default WorldMap;
