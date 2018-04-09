import React, { Component } from 'react'
import * as d3 from 'd3'
import radarChart from './radar-chart'


class SurveyVis extends Component {
  componentDidMount() {
    this.drawChart();
  }

  shouldComponentUpdate() {
    return false;
  }

  drawChart() {
    let data = [
      { axis: 'culture',     value: 9 },
      { axis: 'empowerment', value: 6 },
      { axis: 'community',   value: 8 },
      { axis: 'education',   value: 5 },
      { axis: 'work',        value: 7 },
      { axis: 'health',      value: 8 },
    ];

    let config = {
      colours: [
        {name: 'orange',     hex: '#f47721'},
        {name: 'blue',       hex: '#008fb4'},
        {name: 'green',      hex: '#82c341'},
        {name: 'smoke',      hex: '#414142'},
        {name: 'lightSmoke', hex: '#cccccc'},
      ],
      fontSize: 96,
    };

    config.colours.get = name => {
      let i = config.colours.findIndex(i => i.name === name);
      return i > -1 ? config.colours[i].hex : '#f00';
    };

    config.colorScale = d3.scale.linear()
      .domain([1, data.length])
      .interpolate(d3.interpolateHcl)
      .range([config.colours.get('blue'), config.colours.get('green')]);

    let chart = radarChart(config).data(data);

    d3.select('.chart')
      .call(chart);


    // At some point we render a child, say a tooltip
    // const tooltipData = ...
    // this.renderTooltip([50, 100], tooltipData);
  }

  render () {
    return (
      <div>
        <h1>Vis</h1>

        <div className="chart"></div>
      </div>
    )
  }
}

export default SurveyVis
